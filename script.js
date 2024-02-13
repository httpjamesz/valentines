$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var noClickCount = 0;
  
    var bgAudio = document.getElementById("bgAudio");
    
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
      $('.response-buttons').show();
      $('#reset').show();
      $('#open').hide();
    }
  
    function close() {
      envelope.addClass("close").removeClass("open");
      $('.response-buttons').hide();
      $('#open').show();
      $('#reset').hide();
    }
  
    $('.yes-btn').click(function() {
      $('.words.line2').text("Thank you love, kita na");
      $('.words.line3').text("tayo tomorrow! :))");
      setTimeout(function() {
        window.location.href = "flower.html";
      }, 1500);
    });
  
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
  
    $('.no-btn').click(function() {
      if (noClickCount < 3) {
        var randomIndex = Math.floor(Math.random() * randomTexts.length);
        var randomText = randomTexts[randomIndex];
        $('.words.line2').text(randomText);
        $('.words.line3').text("");
        noClickCount++;
      } else {
        $('.no-btn').hide();
        var finalText = "Ayan, bawal ka na tumanggi!";
        $('.words.line2').text(finalText);
        $('.words.line3').text("");
      }
    });
  
    $('#musicBtn').click(function() {
      if (bgAudio.paused) {
        bgAudio.play();
        $(this).text("Pause Music");
      } else {
        bgAudio.pause();
        $(this).text("Play Music");
      }
    });
  });
