'use strict';

// Выбор рандомного цвета и запуск перерисовки при изменение цвета coat и eyes
(function () {
  window.colorSize = {
    colorChange: function (colors, element, elementInput) {
      var getRandomColor = function () {
        return colors[Math.floor(colors.length * Math.random())];
      };
      element.addEventListener('click', function () {
        var color = getRandomColor();
        if (element.tagName.toLowerCase() === 'div') {
          element.style.backgroundColor = color;
          elementInput.value = color;
        } else {
          element.style.fill = color;
          elementInput.value = color;

          window.setup.updateWizards();
        }
      });
    }
  };
})();

