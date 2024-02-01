// Home.js
import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
//import { uploadVideo } from './apiService'; // Adjust the path accordingly

const VideoRecorder = () => {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const startCapture = async () => {
    setRecordedChunks([]);
    const options = { mimeType: 'video/webm;codecs=vp9' };

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      webcamRef.current.srcObject = stream;
      mediaRecorderRef.current = new MediaRecorder(stream, options);

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setRecordedChunks((prev) => [...prev, event.data]);
        }
      };

      mediaRecorderRef.current.onstop = async () => {
        const blob = new Blob(recordedChunks, {
          type: 'video/webm',
        });

        // Upload the recorded video to the backend
       // await uploadVideo(blob);
console.log(blob);
        setCapturing(false);
      };

      mediaRecorderRef.current.start();
      setCapturing(true);
    } catch (error) {
      console.error('Error accessing media devices: ', error.name, error.message);
    }
  };

  const stopCapture = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
  };

  return (
    <div>
      <Webcam audio={false} ref={webcamRef} />
      {capturing ? (
        <button onClick={stopCapture}>Stop Recording</button>
      ) : (
        <button onClick={startCapture}>Start Recording</button>
      )}
    </div>
  );
};

export default VideoRecorder;
