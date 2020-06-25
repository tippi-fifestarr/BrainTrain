
let sec = 0;
let done = 0;

// const initialParagraph = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga animi maiores molestiae odit! Blanditiis mollitia, molestiae, sapiente quis rerum totam eum, culpa illo qui rem consequatur? Tempora tenetur necessitatibus rem!`
const initialParagraph = `When you finish reading, press the done button; The text will go away. <br> It will be replaced by an opportunity, a challenge, if you will.  <br> You will recieve a reward of 16 (s). <br> The purpose of this all is to train your brain, build mental muscles, and, of course, to have a blast.`
document.getElementById("ptext").innerHTML = initialParagraph


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

const doneFunc = () => {
  const element = document.getElementById("ptext");
  if (element != null) {
    element.remove()
  }

  const displayTimer = document.createElement("p")
  displayTimer.classList.add("display-timer")

  if (sec < 2) {
    displayTimer.innerHTML = `NO WAY you read that in less than 2 seconds!`
    
  } else {
    displayTimer.innerHTML = `You took ${sec} seconds to read the text.`
  }

  document.getElementById("thetext").appendChild(displayTimer)
  // console.log(sec)
  done++;

  console.log(done)
}

const compareWords = () => {
  let userWords = document.getElementById("words").value
  const wordsArr = userWords.split(` `)
  const initialParArr = initialParagraph.split(` `)

  //compare wordsArr with initialParagraph
  for (i = 0; i < wordsArr.length; i++) {
    for (j = 0; j < initialParArr.length;j++){
      if (wordsArr[i] == initialParArr[j]){
        console.log("MATCH!!!!!", wordsArr[i], j)
        let match = wordsArr[i]
        document.getElementById("results").textContent += match + ` `
      }
    }
  }


  console.log(wordsArr)
}

