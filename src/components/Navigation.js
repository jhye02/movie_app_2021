import React from 'react';
import { Link } from 'react-router-dom'; //페이지 이동 기능을 할 수 있게 도와줌
import './Navigation.css'

function Navigation(){
    return(
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}
export default Navigation;