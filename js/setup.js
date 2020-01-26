'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];


var userDialog = document.querySelector('.setup'); //
userDialog.classList.remove('hidden'); //

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
/*
var createWizard = function () {
  createWizard.name = receiveRandom(WIZARD_NAMES) + receiveRandom(WIZARD_SURNAMES);
  createWizard.coatColor = receiveRandom(WIZARD_COATS);
  createWizard.eyesColor = receiveRandom(WIZARD_EYES);
};
*/

var receiveRandom = function (arr) {
  var numberRandom = Math.floor(Math.random() * arr.length);
  // eslint-disable-next-line no-console
  console.log('рамдомное число ' + numberRandom, arr[numberRandom]);
  return arr[numberRandom];
};


var wizards = [
  {
    name: receiveRandom(WIZARD_NAMES) + receiveRandom(WIZARD_SURNAMES),
    coatColor: receiveRandom(WIZARD_COATS),
    eyesColor: receiveRandom(WIZARD_EYES)
  },
  {
    name: receiveRandom(WIZARD_NAMES) + receiveRandom(WIZARD_SURNAMES),
    coatColor: receiveRandom(WIZARD_COATS),
    eyesColor: receiveRandom(WIZARD_EYES)
  },
  {
    name: WIZARD_NAMES[1],
    coatColor: 'rgb(215, 210, 55)'
  },
  {
    name: WIZARD_NAMES[2],
    coatColor: 'rgb(101, 137, 164)'
  },
  {
    name: WIZARD_NAMES[3],
    coatColor: 'rgb(127, 127, 127)'
  }
];

// eslint-disable-next-line no-console
console.log(wizards);


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
