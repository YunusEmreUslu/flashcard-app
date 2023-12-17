import React, { useState, /* useEffect */ } from "react";
import FlashcardList from "./FlashcardList";
import SAMPLE_FLASHCARDS from "./sampleFlashcards"
import './app.css'

function App() {
  const [flashcards, /* setFlashcards */] = useState(SAMPLE_FLASHCARDS)

  let currentIndex = SAMPLE_FLASHCARDS.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [SAMPLE_FLASHCARDS[currentIndex], SAMPLE_FLASHCARDS[randomIndex]] = [
      SAMPLE_FLASHCARDS[randomIndex], SAMPLE_FLASHCARDS[currentIndex]];
  }

 return (
    <div className="container"> 
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}



export default App;
