'use strict';

// Показать элемент, убрав класс  'hidden'
(function () {
  window.hideElement = function (showClass) {
    document.querySelector(showClass).classList.remove('hidden');
  };
})();
