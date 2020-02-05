'use strict';

// Спрятать элемент, добавив класс  'hidden'
(function () {
  window.hideElement = function (hideClass) {
    document.querySelector(hideClass).classList.add('hidden');
  };
})();
