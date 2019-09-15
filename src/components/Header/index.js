import React from "react";
import "./style.css";

function Header() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 text-center title"> MCU Clicky Game</h1>
                <p className="lead text-center">
                    Click each Super Hero once until the
                    score is 10 to win. Click a Super Hero
                    more than once, and you lose. Beware, the
                    heros appear at random after each click.</p>
                <p className="disclaim text-center">(Not an official Marvel product)</p>
            </div>
        </div>
    )
}

export default Header;