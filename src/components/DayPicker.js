import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './DayPicker.css'; // Import your CSS file for styling

const DayPickerComponent = () => {
    
    const location = useLocation();
    const showBackButton = location.pathname !== '/';
    const [selected, setSelected] = useState();

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }

    return (
        <div className="dayPickerContainer">
            {showBackButton && (
              <Link to="/" className="backButton">Back</Link>
            )}
            <h2>Select a Day</h2>
            <div className="dayPickerWrapper">
                <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                    footer={footer}
                />
            </div>
        </div>
    );
};

export default DayPickerComponent;