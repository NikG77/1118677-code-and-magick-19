'use strict';

(function () {
  var WIZARD_NUMBER = 4;
  var URL_DATA = 'https://js.dump.academy/code-and-magick/data';
  var URL_FORM = 'https://js.dump.academy/code-and-magick';
  var similarListElement = document.querySelector('.setup').querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');


  // Клонирует по шаблону Wizard и задает имя параметры name, coatColor и eyesColor
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  // Выводит в разметку весь массив полученных с сервера wizard
  var onLoad = function (wizardsOnload) {
    var wizards = window.utils.getAnyArray(wizardsOnload, WIZARD_NUMBER);
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < WIZARD_NUMBER; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
    window.utils.showElement('.setup-similar');
  };

  // Выводит в созданный div информацию об ошибке
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

  // При успешной отправке скрывает окно настройки
  var onLoadForm = function () {
    window.utils.hideElement('.setup');
    submitButton.textContent = 'Сохранить';
  };

  var form = document.querySelector('.setup-wizard-form');
  var submitButton = form.querySelector('.setup-submit');

  // Слушатель на отправку формы
  form.addEventListener('submit', function (evt) {
    submitButton.textContent = 'Данные отправляются ...';
    window.backend.save(URL_FORM, new FormData(form), onLoadForm, onError);
    evt.preventDefault();
  });

  window.backend.load(URL_DATA, onLoad, onError);

})();
