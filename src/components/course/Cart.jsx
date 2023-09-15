/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
 
// eslint-disable-next-line react/prop-types
const Cart = ({selectedcours,resthour,totalprice,totalcrhr}) => {
   let i=1;
  
    return (
        <div className='card1'>
            <h3 className='remaimning-hr'>Credit Hour Remaining {resthour} hr</h3>
            <h2 className='border'>Course Name</h2>
            <div  className='cart-con'>
            <h5 className='coursetotaltitle'>Total Course :{selectedcours.length}</h5>
            {selectedcours.map((course) =>(
               <ol key={course.course_id}>{i++}.{course.course_name}</ol>
               
            ))}
            </div>
            <h3 className='border'>Total Credit Hour :{totalcrhr}</h3>
           <h3>Total Price : {totalprice} USD</h3>
        </div>
    );
   
};

export default Cart;