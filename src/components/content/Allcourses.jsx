/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import "./Allcourse.css"

const Allcourses = () => {

    const [allcourses,setcourses] = useState([]);

    useEffect(() => {
        fetch("./data.json")
        .then (res => res.json())
        .then((data) => setcourses(data));

    },[] )

console.log(allcourses);
    return (
        <div className='container'>
            <div className='allcontainer'>
            <div className='card-container'>
                {
                    allcourses.map(course =>(
                    <div className='card'>
                    <div className='course-img'>
                        <img className='img' src="https://media.istockphoto.com/id/1413798537/photo/businesswomen-discussing-at-networking-event.jpg?s=1024x1024&w=is&k=20&c=_rbF3zcH2P_40BtvOmyoZUzAuCNUHbQxMiqMpyqbOVc=" alt="" />
                    </div>
                    <h2 className='course-name'>course name</h2>
                    <div className='course-des' >
                    <p >course descrip tionfx cvgbhn k cvbnxk mszh bbjnkm vg hgjnk mls xd, ;l,;</p>
                    </div>
                    
                    <div className='info'>
                       <p>Price:4567</p>
                        <p>Credit: 4 hr</p>

                    </div>
                    <button className='btn'> Select </button>
                </div>))
                }           
            </div>
            <div className='cart'>
                  <h1>this is card</h1>
            </div>
            </div>
           
        </div>
    );
};

export default Allcourses;