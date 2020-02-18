'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var userNameInput = setup.querySelector('.setup-user-name');

  // Обработчик закрытия окна
  var onPopupEscPress = function (evt) {
    if (evt.target !== userNameInput) {
      window.utils.isEscEvent(evt, closePopup);
    }
  };

  // Открывает popup по клавише
  var openPopup = function () {
    window.utils.showElement('.setup');
    document.addEventListener('keydown', onPopupEscPress);
  };

  // Закрывает popup по клавише
  var closePopup = function () {
    window.utils.hideElement('.setup');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  // Открывает popup по клику
  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.utils.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.utils.isEnterEvent(evt, closePopup);
  });

  // Перемещение диалогового окна
  var dialogHandler = setup.querySelector('.upload');
  var setupSubmit = setup.querySelector('.setup-submit');

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  // При закрытии окна сбрасывает сдвиг смещения окна
  var onCloseDialog = function () {
    setup.style.top = null;
    setup.style.left = null;
  };

  setupClose.addEventListener('click', onCloseDialog);
  setupSubmit.addEventListener('click', onCloseDialog);

})();

