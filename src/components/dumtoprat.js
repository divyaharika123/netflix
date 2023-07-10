import React, { Component } from "react";
import { useEffect, useState } from "react";
import "../styles/dumtoprat.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";


export default function Banner() {


    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}`
            );
        }
    };




    const imgPath = "https://image.tmdb.org/t/p/original/"
    const [apidata, setApidata] = useState([])
    const apiKey = "66a961ade5dfafb744e8b742092dc30c";
    const apiEndpoint = "https://api.themoviedb.org/3";
    const baseUrl = `${apiEndpoint}/movie/top_rated?api_key=${apiKey}&language=en-US`;
    const [trailerUrl, setTrailerUrl]=useState("");

    // const Token = localStorage.getItem("Token");

    useEffect(() => {
        const fetchData = fetch(baseUrl).then(res => res.json())
            .then(data => {
                setApidata(data.results);
            })
    }, [])
    const handleClick=(movie)=>{
        console.log(movie,trailerUrl);
        if(trailerUrl){
            setTrailerUrl("")
        }
        else{
            movieTrailer(movie|| "")
            .then((url)=>{
                console.log(url);
                const urlParams= new URLSearchParams(new URL(url).search);
                // // https://www.youtube.com/watch?v=ue80QwXMRHg
                setTrailerUrl(urlParams.get("v")) // ue80QwXMRHg
                
            })

        }
    };
    
    const opts={
        height:"390",
        width:"100%",
        playerVars:{
            autoPlay:1,
        },
    }

    
    return (
        <div className="posterrbg" style={{flexDirection:"column"}}>
            <Slider {...settings}>
                {
                    apidata.map((e) => {
                        console.log(e);
                        return (
                            <div className="movie-card" onClick={() => handleClick(e.title)}> 
                                <img className="posterpath" src={`${imgPath}${e.poster_path}`} />
                                {/* <h4>{e.title}</h4> */}
                            </div>
                        )
                    })
                }
            </Slider >
                {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
        </div >
    )

}