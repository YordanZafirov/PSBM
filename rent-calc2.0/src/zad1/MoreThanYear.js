import { useState } from "react";

const MoreThanYear = () => {
    const [annuity, setAnnuity] = useState('');
    const [rentPayment, setRentPayment] = useState('');
    const [term, setTerm] = useState('');
    const [interest, setInterest] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        let Rr = Number(annuity)
        let r = Number(rentPayment)
        let n = Number(term)
        let i = Number(interest) / 100

        if (!Number(annuity)) {
            alert('Въведете продължителност');
        } else if (!Number(rentPayment)) {
            alert('Въведете сумата');
        } else if (!Number(term)) {
            alert('Въведете лихва')
        } else if (!Number(interest)) {
            alert('Въведете срок')
        } else {
            let calculation = (Rr * (Math.pow(1 + i, n) - 1) / (Math.pow(1 + i, r) - 1)).toFixed(2)
            setResult(calculation);
        }
    }

    return (
        <div className="content">
            <form>
                <h2>Рента с период по-голям от 1 година</h2>
                <p>Член на рентата, изплащана след r-години</p>
                <label htmlFor="annuity">Rr =</label>
                <input type="text" id="annuity" 
                value={annuity}
                onChange={e => setAnnuity(e.target.value)}/> лв.
                <p>Период на рентата</p>
                <label htmlFor="rent-payment">r =</label>
                <input type="text" id="rent-payment" 
                value={rentPayment}
                onChange={e => setRentPayment(e.target.value)}/> год.
                <p>Срок на рентата</p>
                <label htmlFor="term">n =</label>
                <input type="text" id="term" 
                value={term}
                onChange={e => setTerm(e.target.value)}/> год.
                <p>Годишна лихва</p>
                <label htmlFor="interest">i =</label>
                <input type="text" id="interest" 
                value={interest}
                onChange={e => setInterest(e.target.value)}/> %
                <button className="submit-btn" onClick={handleSubmit}>Изчисление</button>
            </form>

            <div className="result">
                <p>Нарасналата сума:</p>
                <p className="digit">{result}</p>
            </div>
        </div>
    );
}

export default MoreThanYear;