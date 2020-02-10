'use strict';

(function () {
  var StatusCode = {
    OK: 200
  };
  var TIMEOUT_IN_MS = 10000;

  // Подготавливает данные к загрузке или отправке и проверяет callback
  var prepareLoad = function (onLoad, onError) {
    xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения. Нет подключения к Интернету');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;
  };

  var xhr;

  window.backend = {
    // Выгрузка с сервера данных
    load: function (url, onLoad, onError) {
      prepareLoad(onLoad, onError);

      xhr.open('GET', url);
      xhr.send();
    },
    // Отправка формы
    save: function (url, data, onLoadForm, onError) {
      prepareLoad(onLoadForm, onError);

      xhr.open('POST', url);
      xhr.send(data);
    }


  };
})();
