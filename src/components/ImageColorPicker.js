import React, { useState } from 'react';
import { ImageColorPicker } from 'react-image-color-picker';
import { Link, useLocation } from 'react-router-dom';
import './ImageColorPicker.css';

const ImageColorPickerComponent = () => {

    const location = useLocation();
    const showBackButton = location.pathname !== '/';

    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    const handleColorPick = (color) => {
        console.log('Selected color:', color);
        let hexvalue = rgbToHex(color);
        setSelectedColor(hexvalue);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            setSelectedImage(e.target.result);
        };
        reader.readAsDataURL(file);
        }
    };

    const rgbToHex = (rgb) => {
        // Separate the RGB components
        const [r, g, b] = rgb.match(/\d+/g);
        // Convert each component to hexadecimal format
        const rHex = parseInt(r).toString(16).padStart(2, '0');
        const gHex = parseInt(g).toString(16).padStart(2, '0');
        const bHex = parseInt(b).toString(16).padStart(2, '0');
        // Return the hexadecimal color code
        return `#${rHex}${gHex}${bHex}`;
    }
    

    return (
        <div className="imageColorPickerContainer">
            {showBackButton && (
                <Link to="/" className="backButton">Back</Link>
            )}
            <h1>Select color from Image</h1>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {selectedImage && (
                <div className="imageColorPickerWrapper">
                    <ImageColorPicker
                        onColorPick={handleColorPick}
                        imgSrc={selectedImage}
                        zoom={1}
                    />
                    {selectedColor && (
                        <div className="colorInfo">
                            Selected color: {selectedColor}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ImageColorPickerComponent;
