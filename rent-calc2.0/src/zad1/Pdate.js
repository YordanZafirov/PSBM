import { useState } from "react";
const Pdate = () => {
    const [term, setTerm] = useState('')
    const [cont, setN] = useState('')
    const [rentPay, setR] = useState('');
    const [interest, setI] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        let p = Number(term)
        let n = Number(cont);
        let r = Number(rentPay);
        let i = Number(interest) / 100;

        if (!Number(term)) {
            alert('Въведете продължителност');
        } else if (!Number(cont)) {
            alert('Въведете сумата');
        } else if (!Number(rentPay)) {
            alert('Въведете сумата');
        } else if (!Number(interest)) {
            alert('Въведете лихва');
        } else {
            let calculation = (r * (Math.pow(1 + i, n) - 1) / (p * (Math.pow(1 + i, (i /p)) - 1))).toFixed(2);
            setResult(calculation);
        }
    }

    return (
        <div className="content">
            <form>
                <h2>Р-срочна рента</h2>
                <p>Срок на рентата</p>
                <label htmlFor="term-date">p =</label>
                <input type="text" id="term-date"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)} /> мес.
                <p>Сумата на всяко едно рентно плащане</p>
                <label htmlFor="r">R =</label>
                <input type="text" id="rent-payment"
                    value={rentPay}
                    onChange={e => setR(e.target.value)} /> лева
                <p>Годишна лихва</p>
                <label htmlFor="interest">i =</label>
                <input type="text" id="interest"
                    value={interest}
                    onChange={e => setI(e.target.value)} /> %
                <p>Продължителност на рентните плащания</p>
                <label htmlFor="interest">n =</label>
                <input type="text" id="payment-length"
                    value={cont}
                    onChange={e => setN(e.target.value)} /> год.
                <button className="submit-btn" onClick={handleSubmit}>Изчисление</button>
            </form>

            <div className="result">
                <p>Нарасналата сума:</p>
                <p className="digit">{result} лв.</p>
            </div>
        </div>
    );
}

export default Pdate;