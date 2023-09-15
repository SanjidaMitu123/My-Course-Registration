/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Cart = ({selectedcours}) => {
  console.log(selectedcours);
    return (
        <div>
            <h1>Course Name</h1>
            <h5>Total Course :{selectedcours.length}</h5>
            {selectedcours.map((course) =>(
               <ol key={course.course_id}>{course.course_name}</ol>
            ))}
           
        </div>
    );
};

export default Cart;