// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    let left = dodger.style.left;
    left = parseInt(left);
  
    if (left < 360) {
      left += 1; // Move the dodger to the right
    }
  
    dodger.style.left = `${left}px`; // Update dodger's position
    
    // Check if dodger is at the right edge
    const rightEdge = 400 - 40; // Width of game field - width of dodger
    if (left === rightEdge) {
      expect(left).to.equal(rightEdge);
    }
  }
  