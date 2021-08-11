

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$( document ).ready(function() {

const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
};

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
    let text = tweet.content.text;
    let $tweet = $(`<article class="tweet">
    <header>
      <div class="tweet-user">
      <img src=${tweet.user.avatars}>
      <p>${tweet.user.name}</p></div>
      <p>${tweet.user.handle}</p>
    </header>

    <p>${escape(text)}</p>
    <footer>
      <p> ${timeago.format(tweet.created_at)} </p>
      <div class="footer-icons">
      <i class="fas fa-heart"></i>
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
    </div>
    </footer>
  </article>`)
  return $tweet;
}
// renderTweets(data);

// timeago.format(1473245023718);   

$("#tweetForm").submit(function(event) {
    event.preventDefault();
    let result = $(this).serialize()
    $.post ("/tweets", result);
    let tweetMessage = $("#tweet-text").val()
    let datalength = tweetMessage.length;
    if (datalength > 140) {
        // alert("please keep your message under 140 charcters");
        $(".alert").text("Please keep your message under 140 charcters").slideDown(() => {
            setTimeout(() => {
                $('.alert').slideUp();
            }, 3000);
        })
    } else if (datalength === 0) {
        // alert("Tweet is empty")
        $(".alert").text("Tweet is empty").slideDown(() => {
            setTimeout(() => {
                $('.alert').slideUp();
            }, 3000);
        })
    } else {
        $.ajax ({
        url: "/tweets", // sending the data
        method: "POST", // post request
        data: $(this).serialize() // serialized the data
        })
    }
})
// Renders the tweets if the GET request was successfull

const loadTweets = function() {
    $.ajax("/tweets", {
        method: "GET",
        data: $(".submit-tweet").serialize(),
        dataType: "json",
        success: function(response) {
            renderTweets(response);
        }
    });
};
loadTweets();

});


