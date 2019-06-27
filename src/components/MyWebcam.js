import React from 'react';
import Webcam from 'react-webcam';

class MyWebcam extends React.Component {
    setRef = webcam => {
        this.webcam = webcam; 
    }
    
    startCapturing = () => {
        setInterval(() => {
            const image = this.webcam.getScreenshot();
            console.log(image);
        }, 1000);
    }

    render() {
        const videoContraints = {
            width: 750,
            height: 500,
            facingMode: 'user'
        };

        return(
            <div>
                <div>
                    <Webcam 
                        ref = {this.setRef}
                        audio = {false}
                        height = {250}
                        width = {375}
                        screenshotFormat = "image/jpeg"
                        videoConstraints = {videoContraints}/>
                </div>
                <button variant = 'primary' onClick = {this.startCapturing}>Start Game</button>
            </div>
        )
    }
}

export default MyWebcam;