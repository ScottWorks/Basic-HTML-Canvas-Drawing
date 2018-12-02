function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    var scale = 20;
    var spacing = 20;
    var countY = 0;

    for (let x = 0; x <= ctx.canvas.width; x += spacing) {
      for (let y = 0; y <= ctx.canvas.height; y += spacing) {
        countY += 0.07;
        ctx.strokeStyle = `rgb(${Math.floor(222 - countY)}, ${Math.floor(
          100 - countY
        )}, ${Math.floor(78 - countY)})`;

        ctx.beginPath();

        const direction = Math.random();
        if (direction > 0.5) {
          ctx.moveTo(x, y);
          ctx.lineTo(x + scale, y + scale);
        } else {
          ctx.moveTo(x + scale, y);
          ctx.lineTo(x, y + scale);
        }
        ctx.stroke();
      }
    }
  }
}
