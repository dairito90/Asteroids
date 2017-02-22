

module.exports = function asteroids(){
    for (var i = 0; i < 100; i++) {

      var asteroid = new Image();
      asteroid.id = "asteroid" + i.toString();
      asteroid.src = "img/asteroid.png";
      asteroid.style.height = (((Math.random() * 6) + 0)*30)+"px";
      asteroid.style.position = "absolute";
      asteroid.style.top = (((Math.random() * 6) + 0)*100)+"px";
      asteroid.style.right = -200+"px";
      var asteroidPosition = asteroid.style.right;
      var asteroidID = asteroid.id;

      document.body.appendChild(asteroid);

    }
}
