import React from "react";
import "./Events.scss"

const Events = () => {

    return(
        <div>
            <section className="container container__events">
                <h1><em>Tournaments and</em> Events</h1>
                <p>Mbuzz Esports will run all over the year among the most popular event in the planet, a series of tournaments with the most popular game of the moment.</p>
            </section>
            <section className="container container__gitex">
                <div className="container__gitex-header">
                    <h2>Gitex 2022</h2>
                    <p>Join us at GITEX 2022 in DUBAI and register to play vs the best esports player at Taken 7 in the world, to take the challenge vs Madi NAZ in League of Legend or beats our best FIFA player.</p>
                    <div className="container__gitex-register" >
                        <p>To register and visit Gitex 2022, click here:</p>
                        <div className="container__gitex-register-btn">
                            <a href="https://visit.gitex.com/" rel="noopener noreferrer" target={"_blank"}>Register for Gitex!</a>
                        </div> 
                    </div>
                </div>    
                <iframe width="560" height="315" src="https://www.youtube.com/embed/zg226z81bqU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="container__gitex-register">
                    <p className="btn-call">To register and visit Gitex 2022, click here:</p>
                    <div className="container__gitex-register-btn">
                        <a href="https://visit.gitex.com/" rel="noopener noreferrer" target={"_blank"}>Register for Gitex!</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Events;