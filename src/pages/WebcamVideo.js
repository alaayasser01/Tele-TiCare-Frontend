import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { postVideo } from "../apiServices/postVideo";

export default function WebcamVideo({ onCaptureStatusChange }) {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const handleDataAvailable = useCallback(({ data }) => {
    if (data.size > 0) {
      setRecordedChunks((prev) => prev.concat(data));
    }
  }, [setRecordedChunks]);

  const handleStartCaptureClick = useCallback(() => {
    onCaptureStatusChange('stop');
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable, onCaptureStatusChange]);

  const handleStopCaptureClick = useCallback(() => {
    onCaptureStatusChange('start');
    mediaRecorderRef.current.stop();
    setCapturing(false);

    // Send the recorded video to the backend
    if (recordedChunks.length > 0) {
      const formData = new FormData();
      const blob = new Blob(recordedChunks, { type: "video/webm" });
      formData.append("video", blob, "recorded.webm");

      console.log("Before making the network request");
      postVideo(formData)
        .then(response => {
          console.log("Response from server:", response.data);
        })
        .catch(error => {
          console.error("Error uploading video:", error);
        });

      setRecordedChunks([]);
    }
  }, [mediaRecorderRef, setCapturing, recordedChunks, onCaptureStatusChange]);

  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  const videoConstraints = {
    width: 420,
    height: 420,
    facingMode: "user",
  };

  return (
    <div className="Container">
      <Webcam
        height={400}
        width={400}
        audio={false}
        mirrored={true}
        ref={webcamRef}
        videoConstraints={videoConstraints}
        style={{ position: 'absolute', left: '-9999px' }}
      />
      {capturing ? (
        <button className="m-3" onClick={handleStopCaptureClick}>Stop Capture</button>
      ) : (
        <button className="m-3" onClick={handleStartCaptureClick}>Start Capture</button>
      )}
      {recordedChunks.length > 0 && (
        <button className="m-3" onClick={handleDownload}>Download</button>
      )}
    </div>
  );
}
