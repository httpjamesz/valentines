$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var noClickCount = 0;

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open").removeClass("close");
        // Show the response buttons
        $('.response-buttons').show();
        // Hide the "Open" and "Close" buttons
        $('.reset button').hide();
    }

    function close() {
        envelope.addClass("close").removeClass("open");
        // Hide the response buttons
        $('.response-buttons').hide();
        // Show the "Open" and "Close" buttons
        $('.reset button').show();
    }

     // Event listener for the "Yes" button
     $('.yes-btn').click(function() {
        // Change the text
        $('.words.line2').text("Thank you love, kita na");
        $('.words.line3').text("tayo tomorrow! :))");
        // Wait for 5 seconds before redirecting
        setTimeout(function() {
            window.location.href = "flower.html";
        }, 1500);
    });

    // Array of possible texts for line2 and line3
    var randomTexts = [
        "Bakit naman ayaw mo?",
        "Kumukulit ka na love!",
        "Ayaw mo ata ako kasama eh.",
        "Pumayag ka na, please :>",
        "Hindi ka talaga sasama!?",
        "Miss na kita, pumayag ka na :(",
        "Payag ka na love, please",
        "PUMAYAG KA NA KASI!!"
    ];

    // Event listener for the "No" button
    $('.no-btn').click(function() {
        if (noClickCount < 20) {
            // Choose a random text from the array
            var randomIndex = Math.floor(Math.random() * randomTexts.length);
            var randomText = randomTexts[randomIndex];
            // Change line2 and line3 texts to the random text
            $('.words.line2').text(randomText);
            $('.words.line3').text("");
            noClickCount++;
        } else {
            // Hide the "No" button and change line2 and line3 texts
            $('.no-btn').hide();
            var finalText = "Ayan, bawal ka na tumanggi!";
            $('.words.line2').text(finalText);
            $('.words.line3').text("");
        }
    });
});
