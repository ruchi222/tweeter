$(document).ready(function() {
    document.querySelector(".textArea").addEventListener("input" , function(event) {
        let counter = $(this).parent().children().find(".counter");
        let length = $(this).val().length;
        let update = $(counter).val(140 - length)
        update;
        if (update.val() < 0) {
            $(counter).css("color", "red");
        } else {
            $(counter).css("color", "black");
        }
    })
});