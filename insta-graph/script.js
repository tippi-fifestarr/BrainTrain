// console.log(localStorage)

const graphArray = [];
let sec = 0;
//get the done value from loval storage if it exists, otherwise set it to 0
let done = localStorage.getItem('Done') || 0;
let randomPar;


//fetch the json file
fetch('/insta-graph/words.json')
  .then(resp => resp.json())
  .then(data => {
    let html = '';
    data.words.forEach(par => {
      graphArray.push(par);
    });
    randomPar = graphArray[Math.floor(Math.random() * graphArray.length)];
    document.getElementById("ptext").innerHTML = randomPar
  })

const fromLoadTimer = () => {
  var timer = setInterval(function(){
    sec++;
    // console.log("you've taken: " + sec + " seconds")
    // if (sec > 10) {
    //   console.log("you've taken too long!!!")
    //   clearInterval(timer);
    // }
  }, 1000);
}

//function that calls when user finishes reading the text
const doneFunc = () => {
  const element = document.getElementById("ptext");
  //if there isnt an element, because it has already been deleted, dont try to delete again
  if (element != null) {
    element.remove()
    document.getElementById("done-reading-button").remove()
  }

  const displayTimer = document.createElement("p")
  displayTimer.classList.add("display-timer")

  if (sec < 2) {
    displayTimer.innerHTML = `NO WAY you read that in less than 2 seconds!`
    
  } else {
    displayTimer.innerHTML = `You took ${sec} seconds to read the text.`
  }

  document.getElementById("thetext").appendChild(displayTimer)
  document.getElementById("input-box").classList.add("shown")
  done++;
  //add done variable to local storage
  localStorage.setItem("Done", done)
  console.log(done)
  console.log(localStorage)
}

const compareWords = () => {
  let userWords = document.getElementById("words").value
  console.log("userwords", userWords)
  const wordsArr = userWords.split(` `)
  const randomParArray = randomPar.split(` `)
  let correctWords = localStorage.getItem('Correct') || 0;
  //compare wordsArr with initialParagraph
  for (i = 0; i < wordsArr.length; i++) {
    for (j = 0; j < randomParArray.length;j++){
      if (wordsArr[i] == randomParArray[j]){
        console.log("MATCH!!!!!", wordsArr[i], j)
        let match = wordsArr[i]
        document.getElementById("results").textContent += match + ` `
        if (userWords !== 0){
          correctWords++
          document.getElementById("correctWordsCounter").innerHTML = `Correctly remembered words TOTAL: ${correctWords}`
        }
        console.log("number correct", correctWords)
      }
    }
  }
  localStorage.setItem("Correct", correctWords)
  
  document.getElementById("input-box").remove()
  document.getElementById("results-box").classList.add("shown")
  console.log(localStorage)
}

const clearLocal = () => {
  localStorage.clear()
  document.getElementById("results").textContent = ` `
  document.getElementById("correctWordsCounter").innerHTML = `Correctly remembered words TOTAL: 0`
}