import { CaretRightOutlined, PauseOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import $ from "jquery";
function Detail2({poster = `${process.env.PUBLIC_URL}/assets/img/films/movies07.png`,videoSrc = "https://storage.whitefoo.workers.dev/Encodes/Mama_2013_1080p.mp4"}) {
    const [isPlay, setIsPlay] = useState(false)
   
    const handlePlay = () =>{
        setIsPlay(!isPlay)
    }

    useEffect(()=>{
        let trailer = $('#trailer')[0]
        isPlay ? trailer.play(): trailer.pause()
    },[isPlay])
    return (
        <div className="p-detail2">
            <div className={isPlay? "p-detail2__content is-play": "p-detail2__content is-pause"}>
                <div className="l-container">
                    <h3 className="c-title">Trailer</h3>
                </div>
                <video onClick={()=>handlePlay()} src={videoSrc} poster= {poster} id="trailer" preload = "true"  loop playsInline ></video>
                <p to ="/" className="c-btn--play c-icon--play"  onClick={()=>handlePlay()}>
                    <CaretRightOutlined />
                </p>
                <p to ="/" className="c-btn--play c-icon--pause"  onClick={()=>handlePlay()}>
                    <PauseOutlined />
                </p>
            </div>
        </div>
    )
}

export default Detail2
