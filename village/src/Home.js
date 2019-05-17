import React from 'react';
import './App.css'

const Home = () => {
    return(
        <div className="home">
            <h2>Welcome to Smurf Village!</h2> 
            <h4>Click one of the links above to be routed to your destination!</h4>
            <div className="optionsbox">
                <div className="options">
                    <h5>List of Smurfs:</h5>
                    <p>This is a list of all Smurfs currently in the Village!</p>
                </div>
                <div className="options">
                    <h5>Add A Smurf:</h5>
                    <p>This is where you can add a Smurf of your very own!</p>
                </div>
            </div>
        </div>
    )
}

export default Home;