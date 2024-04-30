import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Link, useLocation } from 'react-router-dom';
import './Signature.css'

const SignatureComponent = () => {

    const location = useLocation();
    const showBackButton = location.pathname !== '/';

    const signatureRef = useRef();

    const handleDownload = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        // Set canvas size to match the signature canvas
        canvas.width = signatureRef.current.getCanvas().width;
        canvas.height = signatureRef.current.getCanvas().height;

        // Set background color to white
        context.fillStyle = 'white';
        context.fillRect(0, 0, canvas.width, canvas.height);

        // Draw the signature
        context.drawImage(signatureRef.current.getCanvas(), 0, 0);

        // Convert canvas to data URL
        const imageData = canvas.toDataURL('image/png');

        // Create download link
        const link = document.createElement('a');
        link.href = imageData;
        link.download = 'signature.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const handleClear = () => {
        signatureRef.current.clear();
    };

    return (        
        <div className="sigContainer">
            {showBackButton && (
                <Link to="/" className="backButton">Back</Link>
            )}
            <h2>Sign Here</h2>
            <SignatureCanvas
                ref={signatureRef}
                penColor='blue'
                maxWidth={1.5}
                dotSize={1}
                canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
            />
            <div className="buttonContainer">
                <button onClick={handleDownload}>Download</button>
                <button onClick={handleClear}>Clear</button>
            </div>
        </div>
    );
}

export default SignatureComponent;