import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import queryString from "query-string";
import $ from 'jquery'
function Movie() {
    const [isWatch,setIsWatch] = useState(false)
    const [episode,setEpisode] = useState(1)
    const [isMovie,setIsMovie] = useState(false)
    const [isTV,setIsTV] = useState(false)
    const [ID,setID] = useState(null)

    useEffect(()=>{
        const parsed = queryString.parse(window.location.search)
        let ep = parsed.ep || 1
        if(ep) setEpisode(ep)
        let pathName = window.location.pathname.split('/')
        let type = pathName[pathName.length-2]
        let id = pathName[pathName.length-1]
        if(id){
            setID(id)
        }
        if(parsed.watch === null){
            setIsWatch(true)
        }
        if(type === "movie"){
            setIsMovie(true)
            setIsTV(false)
        }else{
            setIsMovie(false)
            setIsTV(true)
        }
      
       
    },[])
    return (
        <>
            <Header/>
            
            <Footer/>
        </>
    )
}

export default Movie
