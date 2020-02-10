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
    },

    // Выдает рандомное число в диапозоне от minNumber до maxNumber
    getRandomRange: function (minNumber, maxNumber) {
      return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    },
    // Выдает на основе входящего массива один рандомный элемент массива
    getRandomElement: function (arr) {
      var numberRandom = window.utils.getRandomRange(0, arr.length - 1);
      return arr[numberRandom];
    },
    // Выдает на основе входящего массива массив с заданным или рандомным(если не задано) кол-вом элементов
    getAnyArray: function (arr, numberRandom) {
      if (!numberRandom) {
        numberRandom = window.utils.getRandomRange(0, arr.length);
      }
      var arrClon = arr.slice();
      var arrNew = [];
      var numberArrRandom;

      for (var j = 0; j < numberRandom; j++) {
        numberArrRandom = window.utils.getRandomRange(0, arrClon.length - 1);
        arrNew[j] = arrClon[numberArrRandom];
        arrClon.splice(numberArrRandom, 1);
      }
      return arrNew;
    },
    // Выдает на основе входящего объекта рандомный элемент(не ключ!)
    getRandomObject: function (obj) {
      var array = Object.keys(obj);
      return window.utils.getRandomElement(array);
    }
  };
})();
