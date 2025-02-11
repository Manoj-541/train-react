import React, { useRef } from 'react'
import { useState , useEffect  } from 'react';
import Video from "./Video.mp4"

const RefExamples = () => {
    const [play, setPlay] = useState(true);
    const eleRef  = useRef();
    const videoRef  = useRef();
    console.log(videoRef);
    useEffect(()=>{
        eleRef.current.style = "teal";
        eleRef.current.innerHtml = "React Ref"
    });
    let playORpause = () => {
        if (play == true) {
            videoRef.current.play();
            console.log(play);
            setPlay(false);

        }else{
            videoRef.current.pause();
            console.log(play);
            setPlay(true);
        }
    }
  return (
    <div>
    <h2 ref = {eleRef}>RefExamples </h2>
    <video src={Video} ref = {videoRef} onClick={playORpause}></video>
    </div>
  )
}

export default RefExamples