import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const HomeComponent = () => {
    return (
        <div className="container">
            <header>
                <h1>Welcome to My Utility App</h1>
            </header>
            <div className="card-container">
                <Link to="/signature" className="card">
                    <h2>Signature</h2>
                </Link>
                <Link to="/daypicker" className="card">
                    <h2>DayPicker</h2>
                </Link>
                <Link to="/imagecolorpicker" className="card">
                    <h2>Color Picker from Image</h2>
                </Link>
                <Link to="/accordion" className="card">
                    <h2>Accordion</h2>                    
                </Link>
            </div>
        </div>
    );
};

export default HomeComponent;
