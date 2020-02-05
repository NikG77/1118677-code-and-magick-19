'use strict';

// Выбор рандомного цвета
(function () {
  window.colorSize = function (colors, element) {
    var getRandomColor = function () {
      return colors[Math.floor(colors.length * Math.random())];
    };
    element.addEventListener('click', function () {
      var color = getRandomColor();
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
    });
  };
})();
