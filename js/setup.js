'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb (0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_NUMBER = 4;
var wizards = [];

var showElement = function (showClass) {
  document.querySelector(showClass).classList.remove('hidden');
};

var similarListElement = document.querySelector('.setup').querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var receiveRandom = function (arr) {
  var numberRandom = Math.round(Math.random() * (arr.length - 1));

  return arr[numberRandom];
};

for (var i = 0; i < WIZARD_NUMBER; i++) {
  wizards[i] = {
    name: receiveRandom(WIZARD_NAMES) + ' ' + receiveRandom(WIZARD_SURNAMES),
    coatColor: receiveRandom(WIZARD_COATS),
    eyesColor: receiveRandom(WIZARD_EYES)
  };
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function () {
  var fragment = document.createDocumentFragment();
  for (i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

showElement('.setup');
renderWizards();
showElement('.setup-similar');
