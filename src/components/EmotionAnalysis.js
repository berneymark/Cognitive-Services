import React from 'react';
import {useState} from 'react';
import MyWebcam from './components/MyWebcam.js';

function EmotionAnalysis() {
    const [result, updateResult] = useState(0);
    
    return (
        <div>
            <MyWebcam onReceivedResult = {updateResult}/>
        </div>
    )
}