import React from 'react';
import './button.css'; // Import CSS for styling
import { Link } from 'react-router-dom'; // Import Link for navigation


function Button({ to,icon, name, bgColor= " #ff3700" , color= " #ffffff"}) {
    return (   //default value of color and bgColor

                    <Link
                    to={to}
                    className="mainBtn"
                    style={{ color: color , background: bgColor}}
                    >
                    {icon}  {name}
                    </Link>

    );
};

export default Button;


