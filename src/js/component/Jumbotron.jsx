import React from 'react';

const Jumbotron  = () => {
    return (
        <div className="card">
            <div className ="card-body text-bg-secondary p-3">
                 <h1>A Warm Welcome!</h1>
                <p className ="card-title">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                 <a href="#" className="btn btn-primary">Call to action</a>
            </div>
        </div>
    ); 
}

export  default Jumbotron;