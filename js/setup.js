'use strict';

(function () {
  var WIZARD_NUMBER = 4;
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb (0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var wizards = [];

  var similarListElement = document.querySelector('.setup').querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');
  /*
  // Показать элемент, убрав класс  'hidden'
  var showElement = function (showClass) {
    document.querySelector(showClass).classList.remove('hidden');
  };

  // Спрятать элемент, добавив класс  'hidden'
  var hideElement = function (hideClass) {
    document.querySelector(hideClass).classList.add('hidden');
  };
  */

  // Выдает один рандомный элемент из массива
  var getRandomElement = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  // Клонирует по шаблону Wizard и задает имя параметры name, coatColor и eyesColor
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  // Сощдает массив wizard размером WIZARD_NUMBER и рандомными name, coatColor и eyesColor
  var createArrayWizards = function () {
    for (var i = 0; i < WIZARD_NUMBER; i++) {
      wizards[i] = {
        name: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES),
        coatColor: getRandomElement(WIZARD_COATS),
        eyesColor: getRandomElement(WIZARD_EYES)
      };
    }
  };

  // Выводит в разметку весь массив wizard
  var renderWizards = function () {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  // showElement('.setup');
  createArrayWizards();
  renderWizards();
  window.showElement('.setup-similar');

  // Задание 4
  // Нажатие на элемент .setup-open удаляет класс hidden
  // у блока setup. Нажатие на элемент .setup-close, расположенный
  // внутри блока setup возвращает ему класс hidden.
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  var setupWizardCoat = setup.querySelector('.wizard-coat');
  var setupWizardEyes = setup.querySelector('.wizard-eyes');
  var setupWizardFireball = setup.querySelector('.setup-fireball-wrap');
  var userNameInput = setup.querySelector('.setup-user-name');

  var onPopupEscPress = function (evt) {
    if (evt.target !== userNameInput) {
      window.keyCheck.isEscEvent(evt, closePopup);
    }
  };

  // Открывает popup по клавише
  var openPopup = function () {
    window.showElement('.setup');
    document.addEventListener('keydown', onPopupEscPress);
  };

  // Закрывает popup по клавише
  var closePopup = function () {
    window.hideElement('.setup');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.keyCheck.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.keyCheck.isEnterEvent(evt, closePopup);
  });

  window.colorSize(WIZARD_COATS, setupWizardCoat);
  window.colorSize(WIZARD_EYES, setupWizardEyes);
  window.colorSize(WIZARD_FIREBALLS, setupWizardFireball);

})();


