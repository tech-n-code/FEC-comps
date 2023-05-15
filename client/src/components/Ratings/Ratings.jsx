import React from "react";
import "./Ratings.css";
import thumbsUp from "../../assets/thumbs_up.svg"
import thumbsDown from "../../assets/thumbs_down.svg"

const Ratings = () => {
    return (
        <>
            <div className="rating-root-container">
                <div className="rating-container-centered">
                
                </div>
                <div className="rating-summary-container">
                    <div >
                        <img className="thumbsUp" src={thumbsUp} alt="Thumbs Up"></img>
                        <span>97%</span>
                    </div>
                    <span>1758 ratings · 1089 reviews</span>
                </div>
                <div className="rating-container">
                    <div className="rating-card">
                        <div className="user-pic-thumb">
                            <img></img>
                            <img></img>
                        </div>
                        <div className="user-name-date">
                            <span>Emma M.</span>
                            <span>recommends</span>
                            <span>May 8, 2023</span>
                        </div>
                        <div className="rating-card-body">
                            <span>Eagles Nest Treehouse Farmstay</span>
                            <span>Great stay!</span>
                            <span>Lesley and John were lovely hosts. They are incredibly responsive and kindly showed us around the treehouse and answered questions about the property. Photos cannot do the treehouse justice. The craftsmanship and peaceful location are truly special.</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Ratings;
