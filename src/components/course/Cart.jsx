/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
 
// eslint-disable-next-line react/prop-types
const Cart = ({selectedcours,resthour,totalprice,totalcrhr}) => {
   
    return (
        <div className='card1'>
            <h3 className='remaimning-hr'>Credit Hour Remaining {resthour} hr</h3>
            <h1>Course Name</h1>
    
            <h5>Total Course :{selectedcours.length}</h5>
            {selectedcours.map((course) =>(
               <ol key={course.course_id}>{course.course_name}</ol>
            ))}
            <h3>Total Credit Hour :{totalcrhr}</h3>
           <h3>Total Price : {totalprice} USD</h3>
        </div>
    );
};

export default Cart;