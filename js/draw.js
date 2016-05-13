var c = document.getElementById('myCanvas');
var ctx = c.getContext("2d");
var getWidthAndHeight = function(object){
  return {width:object.width,height:object.height}
}
dimensions = getWidthAndHeight(c);

var drawCircle = function(){

    center = {
      x:dimensions.width/2,
      y:dimensions.height/2
    };
    var kidRandom = {
        x:0,
        y:0,
        lastChange:0,
        change: function(){
          debugger;
          if(parseInt(Math.random()*10)===5){
            this.lastChange = 0;
          }
          else if(this.lastChange<0){
            this.x-=Math.random();
            this.y-=Math.random();
            this.lastChange++;
        }
        else if(this.lastChange>=0){
            this.x+=Math.random();
            this.y+=Math.random();
            this.lastChange--;
        }
      }
    }
    var arrayOfPoints = getCirclePoints(1000, 60, center);
    for(var i = 0; i<arrayOfPoints.length;++i){
      ctx.fillRect(arrayOfPoints[i].x+kidRandom.x,arrayOfPoints[i].y+kidRandom.y,1,1);

      kidRandom.change();
    }
    // ctx.moveTo(dimensions.width/2,dimensions.height/2);
    // ctx.lineTo(0,0);

}
var drawBorder = function(dimensions){
  ctx.moveTo(0,0);
  ctx.lineTo(dimensions.width,0);
  ctx.moveTo(dimensions.width,0);
  ctx.lineTo(dimensions.width,dimensions.height);
  ctx.moveTo(dimensions.width,dimensions.height);
  ctx.lineTo(0,dimensions.height);
  ctx.moveTo(0,dimensions.height);
  ctx.lineTo(0,0);
  ctx.stroke();
}

getCirclePoints = function(noOfPoints, radius, center){
  arrayOfPoints = [];
  var x0 = center.x;
  var y0 = center.y;
  for(var i = 0; i < noOfPoints; i++) {
    var x = x0 + radius * Math.cos(2 * Math.PI * i / noOfPoints);
    var y = y0 + radius * Math.sin(2 * Math.PI * i / noOfPoints);
    arrayOfPoints.push({x:x,y:y});
  }
  return arrayOfPoints;
}

var save = function(){
  var dataURL = canvas.toDataURL('image/png');
  mirror.src = dataURL;
}
drawBorder(dimensions);
