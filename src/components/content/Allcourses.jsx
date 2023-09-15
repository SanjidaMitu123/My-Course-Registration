/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import "./Allcourse.css"
import Cart from '../course/Cart';

const Allcourses = () => {

    const [allcourses, setcourses] = useState([]);
    const [selectedcours, setselectedcourse] = useState([]);

    useEffect(() => {
        fetch("./data.json")
        .then (res => res.json())
        .then((data) => setcourses(data));

    },[] )

    const selectcourse = (course) => {
        const similer = selectedcours.find(co => co.course_id == course.course_id);
        if(similer){
            alert("you have took this course");
        }
        else{
            setselectedcourse([...selectedcours, course]);
        }
       
    };
    console.log(selectedcours);


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
               <Cart selectedcours={selectedcours}></Cart>   
            </div>
            </div>
           
        </div>
    );
};

export default Allcourses;