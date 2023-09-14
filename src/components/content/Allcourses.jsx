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

    const selectcourse =(course) => {

           console.log(course);
    }

console.log(allcourses);
    return (
        <div className='container'>
            <div className='allcontainer'>
            <div className='card-container'>
                {
                    allcourses.map(course =>(
                    <div key={course.course_id} className='card'>
                    <div className='course-img'>
                        <img className='img' src={course.picture} alt="" />
                    </div>
                    <h3 className='course-name'>{course.course_name}</h3>
                    <div className='course-des' >
                    <p >{course.description}</p>
                    </div>
                    
                    <div className='info'>
                       <p>Price:{course.price}</p>
                        <p>Credit: {course.credit_hour}hr</p>

                    </div>
                    <button onClick={()=>selectcourse(course)} className='btn'> Select </button>
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