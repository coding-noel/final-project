export function truncate(text2){
  let array = [...text2]

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
  if(lines > 7) {
    returnText += "..."
  }

  return returnText;
}
