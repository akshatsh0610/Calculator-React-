import '../style.css'
import { useState } from 'react';
function Calculator(){

    const [str,setstr]=useState("")

    function calculate(e){
        const val=e.target.value;
        if(str.length===0)
        {
            if(val==='0' || val==='1' || val==='2' || val==='3' || val==='4' || val==='5' || val==='6' || val==='7' || val==='8' || val==='9' || val==='00')
            {
                document.querySelector('.calculator').value+=val;
                setstr(document.querySelector('.calculator').value);
            }
            else if(val==='+/-')
            {
                document.querySelector('.calculator').value+='-';
                setstr(document.querySelector('.calculator').value);
            }
        }
        else 
        {
            if(val==='0' || val==='1' || val==='2' || val==='3' || val==='4' || val==='5' || val==='6' || val==='7' || val==='8' || val==='9'
            || val==='+' || val==='-' || val==='*' || val==='.' || val==='/' || val==='00')
            {
                document.querySelector('.calculator').value+=val;
                setstr(document.querySelector('.calculator').value);
            }
            else if(val==='+/-')
            {
                document.querySelector('.calculator').value+='-';
                setstr(document.querySelector('.calculator').value);
            }
            else if(val==='=')
            {
                let a=str[str.length-1];
                let y;
                if(str.length===0)
                {
                    alert("Invalid operation")
                }
                if(a==='+' || a==='-' || a==='/' || a==='*')
                {
                    alert("Please enter valid expression");
                }
                else{
                    y = eval(str);
                    document.querySelector('.calculator').value+=val;
                    document.querySelector('.calculator').value+=y;
                }
            }
            else if(val==='C')
            {
                document.querySelector('.calculator').value="";
                setstr("");
            }
            else if(val==='X')
            {
                if(str==="")
                {
                    console.log("hello")
                    alert("Invalid operation")
                }
                else{
                    setstr(str.substring(0, str.length - 1));
                    document.querySelector('.calculator').value=str;
                }
            }
        }
    }
    return(
        <table>
        <tr>
            <td>
                <input type="text" className="calculator" placeholder="0"/>
            </td>
        </tr>
        <tr>
            <td>
                <input type="button" value="7" id="btn" onClick={calculate}/>
                <input type="button" value="8" id="btn" onClick={calculate}/>
                <input type="button" value="9" id="btn" onClick={calculate}/>
                <input type="button" value="*" id="btn" onClick={calculate}/>
                <input type="button" value="C" id="btn" onClick={calculate}/>
            </td>
        </tr>
        <tr>
            <td>
                <input type="button" value="4" id="btn" onClick={calculate}/>
                <input type="button" value="5" id="btn" onClick={calculate}/>
                <input type="button" value="6" id="btn" onClick={calculate}/>
                <input type="button" value="+" id="btn" onClick={calculate}/>
                <input type="button" value="X" id="btn" onClick={calculate}/>
            </td>
        </tr>
        <tr>
            <td>
                <input type="button" value="1" id="btn" onClick={calculate}/>
                <input type="button" value="2" id="btn" onClick={calculate}/>
                <input type="button" value="3" id="btn" onClick={calculate}/>
                <input type="button" value="-" id="btn" onClick={calculate}/>
                <input type="button" value="+/-" id="btn" onClick={calculate}/>
            </td>
        </tr>
        <tr>
            <td>
                <input type="button" value="0" id="btn" onClick={calculate}/>
                <input type="button" value="." id="btn" onClick={calculate}/>
                <input type="button" value="=" id="btn" onClick={calculate}/>
                <input type="button" value="/" id="btn" onClick={calculate}/>
                <input type="button" value="00" id="btn" onClick={calculate}/>
            </td>
        </tr>
    </table>
    )
}

export default Calculator;