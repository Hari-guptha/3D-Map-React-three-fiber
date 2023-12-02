import React from 'react'
import bgvideo from '../assets/preloader.mp4'

const Preloader = () => {
    return (
        <>
        <video src={bgvideo} muted loop autoPlay ></video>
        </>
    )
}

export default Preloader