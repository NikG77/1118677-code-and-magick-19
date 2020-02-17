'use strict';

(function () {
  var URL_DATA = 'https://js.dump.academy/code-and-magick/data';
  var URL_FORM = 'https://js.dump.academy/code-and-magick';
  var wizards = [];

  var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var setup = document.querySelector('.setup');

  var setupWizardCoat = setup.querySelector('.wizard-coat');
  var setupWizardEyes = setup.querySelector('.wizard-eyes');
  var setupWizardFireball = setup.querySelector('.setup-fireball-wrap');
  var setupWizardCoatInput = setup.querySelector('input[name="coat-color"]');
  var setupWizardEyesInput = setup.querySelector('input[name="eyes-color"]');
  var setupWizardFireballInput = setup.querySelector('input[name="fireball-color"]');

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === setupWizardCoatInput.value) {
      rank += 2;
    }
    if (wizard.colorEyes === setupWizardEyesInput.value) {
      rank += 1;
    }

    return rank;
  };

  window.setup = {
    updateWizards: function () {
      window.render(wizards.sort(function (left, right) {
        var rankDiff = getRank(right) - getRank(left);
        if (rankDiff === 0) {
          rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
        }
        return rankDiff;
      }));
    }
  };

  var onLoad = function (data) {
    wizards = data;
    window.setup.updateWizards();
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

  window.colorSize.colorChange(WIZARD_COATS, setupWizardCoat, setupWizardCoatInput);
  window.colorSize.colorChange(WIZARD_EYES, setupWizardEyes, setupWizardEyesInput);

  window.colorSize.colorChange(WIZARD_FIREBALLS, setupWizardFireball, setupWizardFireballInput);

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
