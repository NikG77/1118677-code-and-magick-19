'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var BAR_WIDTH = 40;
var BAR_DISTANCE = 50;
var BAR_HEIGHT = 150;

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

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP);
  ctx.fillText('Cписок результатов', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + FONT_GAP * 2 + (BAR_DISTANCE + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP * 2);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + FONT_GAP * 2 + (BAR_DISTANCE + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP * 2 - GAP - (BAR_HEIGHT * times[i]) / maxTime - GAP - FONT_GAP);
    if (names[i] == 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var colorRandom = 'hsl(240, ' + Math.floor(Math.random() * 100) + '%, 50%)';
      ctx.fillStyle = colorRandom;
    }
    ctx.fillRect(CLOUD_X + FONT_GAP + FONT_GAP + (BAR_DISTANCE + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP * 2 - GAP, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
  }
};
