"use client"
import Style from "./Music.module.css"
import Link from "next/link";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export default function Music(props) {
    const audioRef = useRef(null);
    const timeChangeRef = useRef(null)
    const [timer, setTimer]  = useState('0:00/-')
    const [status, setStatus] = useState(false)

    useEffect(() => {
        setTimer(`0:00/${toNormalTime(Math.round(audioRef.current.duration))}`)
    }, [])

    useEffect(() => {
        const timerLoop = setInterval(() => {
            setTimer(`${toNormalTime(Math.round(audioRef.current.currentTime))}/${toNormalTime(Math.round(audioRef.current.duration))}`); 
            const one_percent = audioRef.current.duration/1000
            console.log(one_percent, 'one percent. All ',  audioRef.current.duration, 'cur ', audioRef.current.currentTime)
            timeChangeRef.current.value = audioRef.current.currentTime/(one_percent)
            console.log('res ', timeChangeRef.current.value)
            
            //const one_percent = audioRef.current.duration/100
            //setTimer(`${toNormalTime(Math.round(audioRef.current.currentTime))}/${toNormalTime(Math.round(audioRef.current.duration))}`)
            //audioRef.current.currentTime = (one_percent)*e.target.value

            if (audioRef.current.currentTime== audioRef.current.duration) {
                console.log('end')
                setStatus(false)
            }
            console.log('in work')}, 1000
        )
        if (audioRef.current.paused) {
            clearInterval(timerLoop);
        }
        return () => {
            console.log('clear');
            clearInterval(timerLoop);
        }
    }, [status])


    function toNormalTime(sec) {
        if (sec) {

        return `${Math.floor(sec/60)}:${String(sec%60).padStart(2, "0")}`
    } else {
            window.location.reload()
            return '-:-'
        }
    }

    

    function handlePlay(){
        const one_percent = audioRef.current.duration/1000
        timeChangeRef.current.value = audioRef.current.currentTime/(one_percent)

        if (audioRef.current.paused) {
            audioRef.current.play();

            setStatus(true)
        } else {
            audioRef.current.pause()
            setStatus(false)
        }

        
        
    }

    function handleVolume(e) {
        audioRef.current.volume = (e.target.value)/100
    }

    function handleTimeChange(e) {


            console.log(e.target.value,audioRef.current.duration)
        const one_percent = audioRef.current.duration/1000
        setTimer(`${toNormalTime(Math.round(audioRef.current.currentTime))}/${toNormalTime(Math.round(audioRef.current.duration))}`)
        audioRef.current.currentTime = (one_percent)*e.target.value
        
    }



    return (
        <div className={`${Style.music} `}>
            <img src={props.pic} alt="" />
            <p>{props.text}</p>
            <div className={`${Style.controls} `}>
                <p className="timer"></p>
                <button onClick={handlePlay} className={`${Style.play} `}>{!status ? '►' : '||'}</button>
                <input type="range" min={0} max={1000} onChange={handleTimeChange} ref={timeChangeRef} defaultValue={0} className={`${Style.timeChanger} `}/>
                
                <p>{timer}</p>
                <input type="range" min={0} max={100} onChange={handleVolume} defaultValue={100} className={`${Style.volume} `}/>
                <audio src={props.src} ref={audioRef}></audio>
            </div>
        </div>
    )
}