var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem1 = document.getElementById("myBar1");
    var height = 100;
    var id = setInterval(frame, 10);
    function frame() {
      if (height >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        height--;
        elem1.style.height = height + "px";
      }
    }
  }
}