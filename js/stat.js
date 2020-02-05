'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var FONT_GAP = 16;
  var BAR_WIDTH = 40;
  var BAR_DISTANCE = 50;
  var BAR_HEIGHT = 150;
  var TEXT_FONT = '16px PT Mono';
  var TEXT_COLOR = '#000';

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  var renderText = function (ctx, text, x, y, font, color) {
    ctx.fillStyle = color;
    ctx.font = font;
    ctx.fillText(text, x, y);
  };

  var renderColumn = function (ctx, name, number, time, maxTime) {
    ctx.fillStyle = '#000';
    ctx.fillText(name, CLOUD_X + FONT_GAP * 2 + (BAR_DISTANCE + BAR_WIDTH) * number, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP);
    ctx.fillText(Math.floor(time), CLOUD_X + FONT_GAP * 2 + (BAR_DISTANCE + BAR_WIDTH) * number, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP - GAP - (BAR_HEIGHT * time) / maxTime - GAP - FONT_GAP);
    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var colorRandom = 'hsl(240, ' + Math.floor(Math.random() * 100) + '%, 50%)';
      ctx.fillStyle = colorRandom;
    }
    ctx.fillRect(CLOUD_X + FONT_GAP + FONT_GAP + (BAR_DISTANCE + BAR_WIDTH) * number, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP * 2 - GAP, BAR_WIDTH, -(BAR_HEIGHT * time) / maxTime);
  };

  window.renderStatistics = function (ctx, names, times) {
    var maxTime = getMaxElement(times);

    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
    renderText(ctx, 'Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP * 2, TEXT_FONT, TEXT_COLOR);
    renderText(ctx, 'Cписок результатов', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP + FONT_GAP * 2, TEXT_FONT, TEXT_COLOR);

    for (var i = 0; i < names.length; i++) {
      renderColumn(ctx, names[i], i, times[i], maxTime);
    }
  };
})();
