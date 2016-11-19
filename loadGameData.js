function startBoard(data) {
  const obstaclesMap = data;
  const pixelWidth = width/numPixelsAcross;
  const pixelHeight = height/numPixelsHigh;
  const totalPixelsHigh = obstaclesMap.length;
  totalTrackLength = totalPixelsHigh * pixelHeight;
  console.log(totalTrackLength);
  for (var i = 0; i < totalPixelsHigh; i++) {
    const initialYPos = (i * pixelHeight) - (totalTrackLength);
    obstaclesAtYPosition = obstaclesMap[i]
    for (var j = 0; j < obstaclesAtYPosition.length; j++) {
      const obstacleType = obstaclesMap[i][j];
      if (obstacleType > 0) {
        var initialXPos = j * pixelWidth;
        obstacles.push(new Obstacle(initialXPos, initialYPos, obstacleType));
      }
    }
  }
  console.log(obstacles);
}

function gotData(data) {
  var spreadsheetArray = [];
  for (row of data.values) {
    let rowValues = [];
    for (cell of row) {
      rowValues.push(Number(cell));
    }
    spreadsheetArray.push(rowValues);
  }
  startBoard(spreadsheetArray);
}

function loadGoogleSpreadsheetData() {
  var fullUrl = 'https://sheets.googleapis.com/v4/spreadsheets/1W5bjn6PWX1mEArglyG7OeWAwW_NtqbryS4z4ZSAu5M0/values/A1%3AA1?key=AIzaSyAqqf3gqNPwK9_lx9hMhPgqYIRjWYA5TAo'
  var apiKey = 'AIzaSyAqqf3gqNPwK9_lx9hMhPgqYIRjWYA5TAo';
  var spreadSheetId = '1W5bjn6PWX1mEArglyG7OeWAwW_NtqbryS4z4ZSAu5M0';
  var sheetName = 'Second'
  var range = 'Z3%3AAI100';
  var fullRange = sheetName + '!' + range
  var urlBase = 'https://sheets.googleapis.com/v4/spreadsheets/';
  var url = urlBase + spreadSheetId + '/values/' + fullRange + '?key=' + apiKey;
  loadJSON(url, gotData);
}
