'use strict';

// Показать элемент, убрав класс  'hidden'
(function () {
  window.showElement = function (showClass) {
    document.querySelector(showClass).classList.remove('hidden');
  };
})();
