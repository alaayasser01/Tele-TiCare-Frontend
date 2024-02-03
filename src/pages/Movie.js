import React, { useState } from 'react'
import Layout from './Layout'
import ReactPlayer from 'react-player'
import WebcamVideo from './WebcamVideo'
import { Container } from 'react-bootstrap'

function Movie() {
    const [captureStatus, setCaptureStatus] = useState('start'); 

    const updateCaptureStatus = (status) => {
      setCaptureStatus(status);
    };
    
    return (
    <>
    <Layout/>
   
    <Container>
      <div className="m-5 embed-responsive embed-responsive-16by9">
       {captureStatus === 'start' ? (
            <h3>Press start capture then enjoy your movie</h3>
          ) : (
            <h3>Press stop capture and download your video</h3>
          )} <WebcamVideo onCaptureStatusChange={updateCaptureStatus}/>
        <ReactPlayer
          className="embed-responsive-item"
          controls
          url='https://www.youtube.com/watch?v=oaIJNOqY1oQ'
        />
      </div>
      
      
    </Container>
    </>
  )
}

export default Movie