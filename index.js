function setboard() {
  // Create a center tag to center all the elements
  var center = document.createElement("center");

  // Create a table element
  var chessboard = document.createElement("table");
  for (var i = 0; i < 8; i++) {
    // Create a row
    var tr = document.createElement("tr");
    for (var j = 0; j < 8; j++) {
      // Create a cell
      var td = document.createElement("td");
      let id = i.toString() + j.toString();
      td.setAttribute("id", id);
      td.setAttribute("onclick", "getKnightMoves(id)");
      td.innerHTML = id;

      // If the sum of cell coordinates is even then white tile
      if ((i + j) % 2 == 0) {
        td.setAttribute("class", "cell whitecell");
        tr.appendChild(td);
      }
      // If the sum of cell coordinates is odd then black tile
      else {
        td.setAttribute("class", "cell blackcell");
        tr.appendChild(td);
      }
    }
    // Append the row
    chessboard.appendChild(tr);
  }
  center.appendChild(chessboard);

  // Modifying table attribute properties
  chessboard.setAttribute("cellspacing", "0");
  chessboard.setAttribute("width", "500px");
  document.body.appendChild(center);
}
setboard();

function getKnightMoves(id) {
  //Knight moves array
  var row = [2, 1, -1, -2, -2, -1, 1, 2, 2];
  var col = [1, 2, 2, 1, -1, -2, -2, -1, 1];
  document.getElementById(id).setAttribute("class", "selectedSquare");

  let x = Number(id[0]);
  let y = Number(id[1]);
  for (var k = 0; k < 8; k++) {
    // get new Knight position based on current selected position
    let newX = x + row[k];
    let newY = y + col[k];
    if (isValidMove(newX, newY)) {
      console.log(newX, newY);
      let id = newX.toString() + newY.toString();
      document.getElementById(id).setAttribute("class", "validMove");
    }
  }
}

//check if all the positions are valid
function isValidMove(x, y) {
  return !(x < 0 || y < 0 || x >= 8 || y >= 8);
}

//reset the chess board to default settings
function resetBoard() {
  window.location.reload();
}
