$(function() {
    var overlay = $('<div class="overlay"/>'),
        content = $('<div/>');
    overlay.css('background-color', 'green');
    overlay.append(content);
    $('body').append(overlay);
    var lolmeme = setInterval(function() {
      content.append("Follow me on instagram @notfunnyboy69 ");
      if (content.height() > overlay.height()) {
        clearInterval(lolmeme);
        overlay.animate({opacity: 0}, 1000, function() {
          overlay.remove();
          $('.main, .lolmeme').fadeIn(); // Mostramos el contenido principal con una animación de desvanecimiento suave
        });
      }
    }, 5);
  });