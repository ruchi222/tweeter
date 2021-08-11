/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$( document ).ready(function() {

    // Test / driver code (temporary). Eventually will get this from the server.
    const data = [
        {
          "user": {
            "name": "Newton",
            "avatars": "https://i.imgur.com/73hZDYK.png"
            ,
            "handle": "@SirIsaac"
          },
          "content": {
            "text": "If I have seen further it is by standing on the shoulders of giants"
          },
          "created_at": 1461116232227
        },
        {
          "user": {
            "name": "Descartes",
            "avatars": "https://i.imgur.com/nlhLi3I.png",
            "handle": "@rd" },
          "content": {
            "text": "Je pense , donc je suis"
          },
          "created_at": 1461113959088
        }
      ]

const renderTweets = function(tweets) {
    // loops through tweets
    for (let tweet of tweets) {
            // calls createTweetElement for each tweet
        const $tweet = createTweetElement(tweet);
        // console.log($tweet); // to see what it looks like
           // takes return value and appends it to the tweets container
        $('.tweet-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
    }
}


const createTweetElement = function(tweet) {
    let $tweet = $(`<article class="tweet">
    <header>
      <div class="tweet-user">
      <img src="https://i.imgur.com/z5LNkkB.png">
      <p>Newton</p></div>
      <p>@Sirlsaac</p>
    </header>
   
    <footer>
      <p>10 days ago</p>
      <div class="footer-icons">
      <i class="fas fa-heart"></i>
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
    </div>
    </footer>
  </article>`)
  return $tweet;
}
renderTweets(data);

});


