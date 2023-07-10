import React, { Component } from "react";
import { useEffect, useState } from "react";
import "../styles/netflixoriginal.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
    const baseUrl = `${apiEndpoint}/discover/tv?api_key=${apiKey}&with_networks=213`;
   

    // const Token = localStorage.getItem("Token");

    useEffect(() => {
        const fetchData = fetch(baseUrl).then(res => res.json())
            .then(data => {
                setApidata(data.results);
            })
    }, [])

    return (
        <div className="posterrbg">
            <Slider {...settings}>
                {
                    apidata.map((e) => {
                        console.log(e);
                        return (
                            <div className="movie-card"> 
                                <img className="posterpath" src={`${imgPath}${e.poster_path}`} />
                                <h4>{e.title}</h4>
                            </div>
                        )
                    })
                }
            </Slider >

        </div >
    )

}