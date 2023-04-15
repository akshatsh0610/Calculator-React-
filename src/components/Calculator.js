import '../style.css'

function Calculator(){
    return(
        <table>
        <tr>
            <td>
                <input type="text" className="calculator" placeholder="0"/>
            </td>
        </tr>
        <tr>
            <td>
                <input type="button" value="7" id="btn"/>
                <input type="button" value="8" id="btn"/>
                <input type="button" value="9" id="btn"/>
                <input type="button" value="*" id="btn"/>
                <input type="button" value="C" id="btn"/>
            </td>
        </tr>
        <tr>
            <td>
                <input type="button" value="4" id="btn"/>
                <input type="button" value="5" id="btn"/>
                <input type="button" value="6" id="btn"/>
                <input type="button" value="+" id="btn"/>
                <input type="button" value="X" id="btn"/>
            </td>
        </tr>
        <tr>
            <td>
                <input type="button" value="1" id="btn"/>
                <input type="button" value="2" id="btn"/>
                <input type="button" value="3" id="btn"/>
                <input type="button" value="-" id="btn"/>
                <input type="button" value="+/-" id="btn"/>
            </td>
        </tr>
        <tr>
            <td>
                <input type="button" value="0" id="btn"/>
                <input type="button" value="." id="btn"/>
                <input type="button" value="=" id="btn"/>
                <input type="button" value="/" id="btn"/>
                <input type="button" value="00" id="btn"/>
            </td>
        </tr>
    </table>
    )
}

export default Calculator;