
var myShape = new Rect(130, 95, 200, 200);

myShape.fill(fillImage('orange.png'));
myShape.stroke('#f00', 2);
myShape.addTo(stage);

new Bitmap('cascade.png').on('load', function() {
  this.addTo(stage);
});
