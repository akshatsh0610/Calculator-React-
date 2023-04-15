import { useState } from "react";
import '../style.css'

function Header(){
    const [darkmode,setdarkmode]=useState(false);
    function fun(){
        if(darkmode===false)
        {
            document.body.classList.toggle('dark');
            setdarkmode(true)
        }
        else{
            document.body.classList.remove('dark');
            setdarkmode(false)
        }
        // console.log(darkmode)
    }
    return(
        <header>
            <h1><i className="fas fa-calculator"></i> Calculator</h1>
            <input type="checkbox" className="checkbox" id="checkbox"/>
            <label for="checkbox" className="label">
                <i className="fas fa-moon"></i>
                <i className='fas fa-sun'></i>
                <div className='ball' onClick={fun}></div>
            </label>
        </header>
    )
}

export default Header;