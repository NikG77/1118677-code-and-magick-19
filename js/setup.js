'use strict';

(function () {
  var WIZARD_NUMBER = 4;
  // var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  // var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  // var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb (0, 0, 0)'];
  // var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var similarListElement = document.querySelector('.setup').querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');
  /*
  // Выдает один рандомный элемент из массива
  var getRandomElement = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };
  */

  // Клонирует по шаблону Wizard и задает имя параметры name, coatColor и eyesColor
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };
  /*
  // Создает массив wizard размером WIZARD_NUMBER и рандомными name, coatColor и eyesColor
  var createArrayWizards = function () {
    for (var i = 0; i < WIZARD_NUMBER; i++) {
      wizards[i] = {
        name: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES),
        coatColor: getRandomElement(WIZARD_COATS),
        eyesColor: getRandomElement(WIZARD_EYES)
      };
    }
  };
  */

  /*
  // Выводит в разметку весь массив рандомных wizard
  var renderWizards = function () {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
    window.utils.showElement('.setup-similar');
  };
  */

  // Выводит в разметку весь массив полученных с сервера wizard
  var onLoad = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < WIZARD_NUMBER; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
    window.utils.showElement('.setup-similar');
  };

  var onError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.load(onLoad, onError);

  // createArrayWizards();
  // renderWizards();


})();


