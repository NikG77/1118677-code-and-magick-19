'use strict';

(function () {
  var URL_DATA = 'https://js.dump.academy/code-and-magick/data';
  var URL_FORM = 'https://js.dump.academy/code-and-magick';
  var wizards = [];
  var coatColor;
  var eyesColor;

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var updateWizards = function () {
    window.render(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
      }
      return rankDiff;
    }));
  };

  window.wizard.onEyesChange = window.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  window.wizard.onCoatChange = window.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  window.wizard.onFirebollChange();

  var onLoad = function (data) {
    wizards = data;
    updateWizards();
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
