import React, { useState } from "react"
import "./App.css"
import butcherPigImage from "./assets/butcherPig.jpeg"

const App = () => {
  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState(
    "apple through queen squeal fry fluent"
  )
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {
    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    // console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map((eachWord) => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter((vowel) => {
        return (
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" ||
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)
      // creating a variable to hold the first vowel in the word, index 0 from the vowels array
      const firstVowel = vowelsArray[0]
      // creating a variable to hold the index of the first vowel in the word
      const indexOfFirstVowel = eachWord.indexOf(firstVowel)
      // creating a variable to hold the letter of the word before the first vowel to check for q
      const qChecker = eachWord[indexOfFirstVowel - 1]
      // conditional statement that handles all the pig latin-izing
      // checks if the first letter in the vowels array is at the first index of the word
      if (indexOfFirstVowel === 0) {
        return `${eachWord}way`
      } else if (qChecker === "q") {
        // creating a variable to hold the index of the second vowel in the word
        const indexOfNextVowel = eachWord.indexOf(vowelsArray[1])
        // creating a variable to hold the first part of the word not including the first vowel
        const firstPartOfWordWithQ = eachWord.slice(0, indexOfNextVowel)
        // creating a variable to hold the second part of the word from the vowel to the full length
        const secondPartOfWordWithQ = eachWord.slice(indexOfNextVowel)
        // returning the string interpolation of the two parts of the word + 'ay'
        return `${secondPartOfWordWithQ}${firstPartOfWordWithQ}ay`
        // handing the "sometimes y" part of pig latin, there are no vowels in the word so the vowel array is empty
      } else if (vowelsArray.length === 0) {
        // creating a variable to hold the location of "y"
        const findTheY = eachWord.indexOf("y")
        // creating a variable to hold the first part of the word from the first letter to the y
        const firstPartOfWordWithY = eachWord.slice(0, findTheY)
        // creating a variable to hold the second part of the word from the y to the end of the string
        const secondPartOfWordWithY = eachWord.slice(findTheY)
        // returning the string interpolation of the two parts of the word + 'ay'
        return `${secondPartOfWordWithY}${firstPartOfWordWithY}ay`
      } else {
        // creating a variable to hold the first part of the word from the first letter to the first vowel
        const firstPartOfWord = eachWord.slice(0, indexOfFirstVowel)
        // creating a variable to hold the second part of the word from the vowel to the end
        const secondPartOfWord = eachWord.slice(indexOfFirstVowel)
        return `${secondPartOfWord}${firstPartOfWord}ay`
      }
    })

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="drawing of pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2023 | Coded by: Your Names Here!</footer>
    </div>
  )
}

export default App
