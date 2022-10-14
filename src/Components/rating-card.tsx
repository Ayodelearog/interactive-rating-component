import "./Styles/rating-card.css"
import { BrowserRouter as Router, Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { cardContext } from "../App";



export const RatingCard = () => {
    
    const { handleSubmit } = useForm();
    const { setThankYou } = useContext(cardContext)
    const { setRatingNumber } = useContext(cardContext);

    
    const ratingSubmit = (e: any) => {
        setThankYou(true);
    }

    const handleRating = (e: any) => {
        setRatingNumber(e.target.innerHTML);
        
    }



    return (  
        <div className="card-container">
            <div className="rating-card">
                <div className="rating-card-content-container">
                    <div id="rating-star">
                        <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 
                            .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773
                            0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 
                        .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>
                    </div>
        
                    <div className="text-area">
                        <h2>How did we do?</h2>
                            <p>Please let us know how we did with your support request. All feedback is appreciated 
                                to help us improve our offering!
                            </p>
                    </div>
        
                    <form action="" onSubmit={handleSubmit((e) => ratingSubmit(e))}>
                        <div className="rating-btns" onClick={(e) => handleRating(e)}>
                            <button type="button">1</button>
                            <button type="button">2</button>
                            <button type="button">3</button>
                            <button type="button">4</button>
                            <button type="button">5</button>
                        </div>
            
                        <div className="submit-btn">
                            <button type="submit">SUBMIT</button>
                        </div>
                    </form>
                    
                </div>
            </div>
            <Router>
                <div className="attribution">
                    <p>Challenge by <Link to="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</Link>.</p>
                    <p>Coded by <Link to="https://github.com/Ayodelearog">Ayodele Arogundade</Link>.</p>
                </div>
            </Router>
            
        </div>
    )
}