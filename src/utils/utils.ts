export function truncate(text){
  let array = [...text]

  let lines = 0

  let returnArray = array.map((char) => {
    if(char == "\n") {
      lines++;
    }
    if(lines < 8) {
      return char;
    }
  })

  let returnText
  returnText = returnArray.join("")

  return returnText;
}



export function truncateSm(text){
  let array = [...text]

  let lines = 0

  let returnArray = array.map((char) => {
    if(char == "\n") {
      lines++;
    }
    if(lines < 2) {
      return char;
    }
  })

  let returnText
  returnText = returnArray.join("")

  return returnText;
}



var lastUntitled = 1;
var poemNumInArray = 0;

export function poemObject(text) {
  let returnId = "";
  let returnTitle = "";
  let returnNumOfLines = 0
  let returnContent = "";
  let i = 0;

  // Determine values for returnID and returnTitle 
  while(text[i] != "\n") {
    if(text[i] == " ") {
      returnId += "-";
    }
    else {
      returnId += text[i].toLowerCase();
    }
    returnTitle += text[i];
    i++;
  }
  if(returnId == "untitled") {
    returnId += "-" + lastUntitled;
    lastUntitled++
  }

  while(text[i] == " " || text[i] == "\n") {
    i++;
  }

  for(i = i; i < text.length; i++) {
    let upperCaseIt = false
    if(text[i - 1] == "\n") {
      returnNumOfLines++;
      upperCaseIt = true
      while(text[i] == " ") {
        i++;
      }
    }

    returnContent += upperCaseIt ? text[i].toUpperCase() : text[i]
  }

  let returnObject = {
    id: returnId,
    title: returnTitle,
    poemLines: returnContent,
    numOfLines: returnNumOfLines,
    numInSequence: poemNumInArray,
  }

  return returnObject
}

export function idObjectFromArray(array) {
  let returnObject = {}
  for(let i = 0; i < array.length; i++) {
    let id = array[i].id
    returnObject[id] = array[i]
  }
  return returnObject
}
