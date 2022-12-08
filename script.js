const elem = document.getElementById('elem');

let newPosX = 0,
  newPosY = 0,
  startPosX = 0,
  startPosY = 0;

let startOffsetX = elem.offsetLeft;
let startOffsetY = elem.offsetTop;

// when the user clicks down on the element
elem.addEventListener('mousedown', function (e) {
  e.preventDefault();

  // get the starting position of the cursor
  startPosX = e.clientX;
  startPosY = e.clientY;

  document.addEventListener('mousemove', mouseMove);

  document.addEventListener('mouseup', function () {
    document.removeEventListener('mousemove', mouseMove);
    elem.style.top = startOffsetY + 'px';
    elem.style.left = startOffsetX + 'px';
  });
});

function mouseMove(e) {
  // calculate the new position
  newPosX = startPosX - e.clientX;
  newPosY = startPosY - e.clientY;

  // witch each move we also want to update the start X and Y
  startPosX = e.clientX;
  startPosY = e.clientY;

  // set the element's new position
  item.style.top = item.offsetTop - newPosY + 'px';
  item.style.left = item.offsetLeft - newPosX + 'px';
}

// populate the grid with squares

const grid = document.getElementById('grid');

for (let i = 0; i < 100; i++) {
  const square = document.createElement('div');
  square.className = 'square';
  grid.appendChild(square);
}

const item = document.getElementById('item');

item.addEventListener('mousedown', function (e) {
  e.preventDefault();

  startPosX = e.clientX;
  startPosY = e.clientY;

  //document.addEventListener('mousemove', mouseMove);

  document.addEventListener('mouseup', function () {
    document.removeEventListener('mousemove', mouseMove);
  });
});

const squares = grid.querySelectorAll('.square');

for (const square of squares) {
  square.addEventListener('mousemove', function (e) {
    //console.log(e.target);
  });
}

item.addEventListener('mousedown', function (e) {
  e.preventDefault();

  for (const square of squares) {
    square.addEventListener('mousemove', mouseMoveGrid);
  }

  document.addEventListener('mouseup', function () {
    for (const square of squares) {
      square.removeEventListener('mousemove', mouseMoveGrid);
    }
  });
});

function mouseMoveGrid(e) {
  item.style.left = e.target.offsetLeft + 'px';
  item.style.top = e.target.offsetTop + 'px';
}

for (const square of squares) {
  square.addEventListener('mousemove', function (e) {
    console.log(e.target);
  });
}

grid.addEventListener('mousemove', function (e) {
  const rect = grid.getBoundingClientRect();
  console.log(e.clientX - rect.left);
});
