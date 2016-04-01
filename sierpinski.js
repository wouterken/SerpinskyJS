var canvas                  = document.querySelector('canvas')
var context                 = canvas.getContext('2d');
var size                    = Math.min(canvas.width, canvas.height) - 10;
var range                   = document.querySelector('input[type=range]');

function draw(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  (function serpinski(x, y, size, iterations){
    context.moveTo(x + size / 2, y);
    context.lineTo(x, y + size);
    context.lineTo(x + size, y + size);
    context.lineTo(x + size / 2, y);
    if(! iterations--){
      context.closePath();
      context.strokeStyle = '#fff';
      context.stroke();
      return;
    }
    serpinski(x, y + size / 2, size / 2, iterations);
    serpinski(x + size / 2, y + size / 2, size / 2, iterations);
    serpinski(x + size / 4, y, size / 2, iterations);
  })(canvas.width / 2 - size / 2, canvas.height / 2 - size / 2, size, range.value)
}

range.addEventListener('change', draw) || draw();