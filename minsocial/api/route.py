from flask import (
    Blueprint, redirect, render_template, request, url_for, send_from_directory, jsonify
)

from minsocial.decorators import wrap_json, authenticate
from minsocial.api.status import Timeline, MstdnContext
from minsocial.api.conversations import ConversationList, MstdnConversation, TwtConversation


from minsocial.generators.timeline import generate_mentions_timeline
from minsocial.generators.conversation_list import generate_conversation_list
from minsocial.generators.conversation import generate_mstdn_conversation

from minsocial import consts

import tweepy
from mastodon import Mastodon

bp = Blueprint('api', __name__, url_prefix='/api/')


@bp.route("/home")
@authenticate
@wrap_json
def home():

    # Returns a list of Statuses that mentions the current user.

    twt_access_key = request.cookies.get("twtAccessToken")
    mstdn_access_key = request.cookies.get("mstdnAccessToken")

    timeline = generate_mentions_timeline(twt_access_key=twt_access_key, mstdn_access_key=mstdn_access_key)

    return timeline


@bp.route("/messages")
@authenticate
@wrap_json
def messages():

    # Returns a list of Conversations with the current user

    twt_access_key = request.cookies.get("twtAccessToken")
    mstdn_access_key = request.cookies.get("mstdnAccessToken")

    conversations = generate_conversation_list(twt_access_key=twt_access_key, mstdn_access_key=mstdn_access_key)

    return conversations


@bp.route("/messages/twt/<conversation_id>")
@authenticate
@wrap_json
def twtconversation(conversation_id):
    twtAccess = request.cookies.get("twtAccessToken")
    
    messageList = TwtConversation(twtAccess, conversation_id)

    return messageList.messagesList


@bp.route("/messages/mstdn/<conversation_id>")
@authenticate
@wrap_json
def mstdnconversation(conversation_id):

    # From a status id, return the conversation.

    mstdnAccess = request.cookies.get("mstdnAccessToken")
    
    messageList = generate_mstdn_conversation(mstdnAccess, conversation_id)

    return messageList


@bp.route("/tweet/<tweet_id>")
@authenticate
@wrap_json
def view_tweet(tweet_id): # TODO: ADD MORE DETAILS
    a = request.cookies.get("twtAccessToken")

    client = tweepy.Client(a)

    tweet = client.get_tweet(   tweet_id, 
                                expansions=["referenced_tweets.id", "in_reply_to_user_id"],
                                tweet_fields=["conversation_id", "author_id", "in_reply_to_user_id", "referenced_tweets"],
                                user_fields=["id", "username"])

    return dict(tweet.data)


@bp.route("/toot/<toot_id>")
@authenticate
@wrap_json
def view_toot(toot_id): 
    a = request.cookies.get("mstdnAccessToken")
    client = Mastodon(api_base_url=consts.MSTDN_API_BASE_URL, access_token=a)

    toot = client.status(toot_id)

    return toot


@bp.route("/context/toot/<toot_id>")
@authenticate
@wrap_json
def view_toot_context(toot_id):
    a = request.cookies.get("mstdnAccessToken")

    context = MstdnContext(toot_id, a)

    return context.context


@bp.route("/compose", methods=['GET', 'POST'])
@authenticate
@wrap_json
def compose_tweet():
    if request.method == "GET":
        return "Hello"

    if request.form["text"] == None:
        return "hello"

    twtAccess = request.cookies.get("twtAccessToken")
    mstdnAccess = request.cookies.get("mstdnAccessToken")

    if twtAccess:
        client = tweepy.Client(twtAccess, return_type=dict)
        twtdata = client.create_tweet(text=request.form['text'], user_auth=False)
    

    if mstdnAccess:
        client = Mastodon(api_base_url=consts.MSTDN_API_BASE_URL, access_token=mstdnAccess)
        toot = client.status_post(request.form['text'])


    return {"status": "success"}


