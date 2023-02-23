import { useState } from "react";

const PostNumRent = () => {
    const[cont, setN] = useState('')
    const[rentPay, setR] = useState('');
    const[interest, setI] = useState('');
    const[result, setResult] = useState('')

    const handleSubmit = e =>{
        e.preventDefault();
        let n = Number(cont);
        let r = Number(rentPay);
        let i = Number(interest) / 100;

        let q = i + 1;

        if(!Number(cont)){
            alert('Въведете продължителност');
        } else if(!Number(rentPay)){
            alert('Въведете сумата');
        }else if(!Number(interest)){
            alert('Въведете лихва');
        } else {
            let calculation = (r * ((Math.pow(q, n) - 1) / (q - 1))).toFixed(2);
            setResult(calculation);
        }
    }

    return (
        <div className="content">
            <form>
                <h2>Постнумерандна рента</h2>
                <p>Продължителност на рентните плащания</p>
                <label htmlFor="n">n =</label>
                <input type="text" id="payment-length" 
                value={cont}
                onChange={(e)=>{setN(e.target.value)}}
                /> година
                <p>Сумата на всяко едно рентно плащане</p>
                <label htmlFor="r">R =</label>
                <input type="text" id="rent-payment" 
                value={rentPay}
                onChange={(e)=>{setR(e.target.value)}}
                /> лева
                <p>Годишна лихва</p>
                <label htmlFor="interest">i =</label>
                <input type="text" id="interest" 
                value={interest}
                onChange={(e)=>{setI(e.target.value)}}
                /> %
                <button className="submit-btn" onClick={handleSubmit}>Изчисление</button>
            </form>

            <div className="result">
                <p>Резултат:</p>
                <p className="digit">{result} лв.</p>
            </div>
        </div>
    );
}

export default PostNumRent;