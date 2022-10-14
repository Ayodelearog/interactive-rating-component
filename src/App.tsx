import React from 'react';
import './App.css';
import { RatingCard } from "./Components/rating-card"
import { ThankYouCard } from './Components/Thank-you-rating-card/thank-you-rating-card';
import { useState, createContext } from "react"


// interface Props {
  // thankYou: boolean;
  // setThankYou: () => boolean;
// }
export const cardContext = createContext<any>(null);

function App() {
  const [thankYou, setThankYou] = useState(false);
  const [ ratingNumber, setRatingNumber ] = useState<number | null>();


  return (
    <cardContext.Provider value={{thankYou, setThankYou, ratingNumber, setRatingNumber}}>
        <div className="App">
            {thankYou ?
            <ThankYouCard /> : 
            <RatingCard />}
            
        </div>
    </cardContext.Provider>
    
  );
}

export default App;
