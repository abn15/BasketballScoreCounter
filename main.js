//home points
function addpoint1h() {
    let score = parseInt(document.getElementById("homepoint").innerHTML);
    score += 1;
    document.getElementById("homepoint").innerHTML = score;
  }
  
  function addpoint2h() {
    let score = parseInt(document.getElementById("homepoint").innerHTML);
    score += 2;
    document.getElementById("homepoint").innerHTML = score;
  }
  
  function addpoint3h() {
    let score = parseInt(document.getElementById("homepoint").innerHTML);
    score += 3;
    document.getElementById("homepoint").innerHTML = score;
  }
  
  function reseth() {
    document.getElementById("homepoint").innerHTML = 0;
  }
  
  //guest points
  function addpoint1g() {
    let score = parseInt(document.getElementById("guestpoint").innerHTML);
    score += 1;
    document.getElementById("guestpoint").innerHTML = score;
  }
  
  function addpoint2g() {
    let score = parseInt(document.getElementById("guestpoint").innerHTML);
    score += 2;
    document.getElementById("guestpoint").innerHTML = score;
  }
  
  function addpoint3g() {
    let score = parseInt(document.getElementById("guestpoint").innerHTML);
    score += 3;
    document.getElementById("guestpoint").innerHTML = score;
  }
  
  function resetg() {
    document.getElementById("guestpoint").innerHTML = 0;
  }
  
  function newgame() {
    document.getElementById("homepoint").innerHTML = 0;
    document.getElementById("guestpoint").innerHTML = 0;
  }