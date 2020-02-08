'use strict';


(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.utils = {
    // Проверка нажатия клавиш
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    // Спрятать элемент, добавив класс  'hidden'
    hideElement: function (hideClass) {
      document.querySelector(hideClass).classList.add('hidden');
    },
    // Показать элемент, убрав класс  'hidden'
    showElement: function (showClass) {
      document.querySelector(showClass).classList.remove('hidden');
    }
  };
})();
