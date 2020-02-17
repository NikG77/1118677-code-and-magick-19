'use strict';

// Выбор рандомного цвета и запуск перерисовки при изменение цвета coat и eyes
(function () {
  var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setup = document.querySelector('.setup');
  var wizardCoatElement = setup.querySelector('.wizard-coat');
  var wizardEyesElement = setup.querySelector('.wizard-eyes');
  var wizardFireBallElement = setup.querySelector('.setup-fireball-wrap');

  window.colorSize = {
    onEyesChange: function () {},
    onCoatChange: function () {},
  };

  var getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };

  wizardCoatElement.addEventListener('click', function () {
    var newColor = getRandomElement(WIZARD_COATS);
    wizardCoatElement.style.fill = newColor;
    window.colorSize.onCoatChange(newColor);
  });

  wizardEyesElement.addEventListener('click', function () {
    var newColor = getRandomElement(WIZARD_EYES);
    wizardEyesElement.style.fill = newColor;
    window.colorSize.onEyesChange(newColor);
  });

  wizardFireBallElement.addEventListener('click', function () {
    var newColor = getRandomElement(WIZARD_FIREBALLS);
    wizardFireBallElement.style.backgroundColor = newColor;
  });

})();
