'use strict';

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

var showElement = function (showClass) {
  document.querySelector(showClass).classList.remove('hidden');
};

var getRandomElement = function (arr) {
  var numberRandom = Math.round(Math.random() * (arr.length - 1));

  return arr[numberRandom];
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var createArrayWizards = function () {
  for (var i = 0; i < WIZARD_NUMBER; i++) {
    wizards[i] = {
      name: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES),
      coatColor: getRandomElement(WIZARD_COATS),
      eyesColor: getRandomElement(WIZARD_EYES)
    };
  }
};

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
showElement('.setup-similar');

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

// Нажатие на элемент .setup-open удаляет класс hidden
// у блока setup. Нажатие на элемент .setup-close, расположенный
// внутри блока setup возвращает ему класс hidden.
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var setupWizardCoat = setup.querySelector('.wizard-coat');
var setupWizardEyes = setup.querySelector('.wizard-eyes');
var setupWizardFireball = setup.querySelector('.setup-fireball-wrap');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY && evt.target === document.querySelector('.setup-user-name')) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY ) {
    closePopup();
  }
});

var userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function (evt) {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

setupWizardCoat.addEventListener('click', function () {
  var wizardCoatColor = getRandomElement(WIZARD_COATS);
  setupWizardCoat.style.fill = wizardCoatColor;
  setup.querySelector('input[name="coat-color"]').value = wizardCoatColor;
});

setupWizardEyes.addEventListener('click', function () {
  var wizardEyesColor = getRandomElement(WIZARD_EYES);
  setupWizardEyes.style.fill = wizardEyesColor;
  setup.querySelector('input[name="eyes-color"]').value = wizardEyesColor;

});

setupWizardFireball.addEventListener('click', function () {
  var WizardFireballColor = getRandomElement(WIZARD_FIREBALLS);
  setupWizardFireball.style.background = WizardFireballColor;
  // почему более точная строчка не срабатывает? setupWizardFireball('input[name="fireball-color"]').value = WizardFireballColor;
  setup.querySelector('input[name="fireball-color"]').value = WizardFireballColor;
});
