import React from 'react'
import MyHeader from '../components/MyHeader'
import MyNavbar from '../components/MyNavbar'
import Movies from '../components/Movies'
import Webcam from 'react-webcam'
import WebcamVideo from './WebcamVideo'

export default function Home() {
  return (
    <>
    {/* <MyHeader />
    <MyNavbar/>
    <div className='container'>
    <Movies/>
    
    </div> */}
    {/* <Webcam/> */}
    <WebcamVideo/>

    
    </>
  )
}
