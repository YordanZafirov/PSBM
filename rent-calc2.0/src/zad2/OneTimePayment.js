import { useState } from "react";

const OneTimePayment = () => {

    const initialValues = {
        z: '',
        t: '',
        n: '',
        g: '',
        i: '',
        Qt: 0,
        period: 0,
    }
    const [values, setValues] = useState(initialValues);

    const[inputArr, setInputArr] = useState([])
    const[result, setResult] = useState('')

    const handleInputChange = e =>{
        const { name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    let {Qt, period} = values;
    const appendToTable = (e) =>{
        e.preventDefault();
        if(inputArr.length > values.t){
            alert('Невалиден период между плащанията');
        } else {
            setInputArr([...inputArr, {Qt, period}])
            console.log(inputArr);
            console.log(values);
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        let z = Number(values.z);
        let t = Number(values.t);
        let n = Number(values.n);
        let g = Number(values.g) / 100;
        let i = Number(values.i) / 100;
        let pom1 = 0;
        let pom2 = 0;

        if (!Number(z)) {
            alert('Въведете продължителност');
        } else if (!Number(t)) {
            alert('Въведете сумата');
        } else if (!Number(n)) {
            alert('Въведете сумата');
        } else if (!Number(g)) {
            alert('Въведете лихва');
        } else if (!Number(i)) {
            alert('Въведете сумата');
        }  else {
            let k = (Math.pow(1 + g, n)) * (Math.pow(1 + i, -(n + t)));
            for(let index = 0; index < t; index++){
                let Qt = inputArr[index].Qt;
                let period = inputArr[index].period;

                pom1 += Qt;
                pom2 += Qt*Math.pow((1+i), -period);
                let a = pom2 + (z-pom1)*k;
                setResult(a.toFixed(2))
            }
            

        }
    }

    return (
        <div className="content">
            <form>
                <h2>Погасяване с еднократно плащане в края на периода</h2>
                <p>Цена</p>
                <label htmlFor="n">Z =</label>
                <input type="text" id="price" name="z"
                    value={values.z}
                    onChange={handleInputChange}
                /> лв.
                <p>Срок на доставка</p>
                <label htmlFor="r">T =</label>
                <input type="text" id="rent-payment" name="t"
                    value={values.t}
                    onChange={handleInputChange}
                /> г.
                <p>Срок на кредита</p>
                <label htmlFor="interest">N =</label>
                <input type="text" id="interest" name="n"
                    value={values.n}
                    onChange={handleInputChange}
                /> г.
                <p>Лихвена ставка на кредита</p>
                <label htmlFor="interest">g =</label>
                <input type="text" id="interest" name="g"
                    value={values.g}
                    onChange={handleInputChange}
                /> %
                <p>Лихвена ставка за сравнение</p>
                <label htmlFor="interest">i =</label>
                <input type="text" id="interest" name="i"
                    value={values.i}
                    onChange={handleInputChange}
                /> %
                <button className="submit-btn" onClick={handleSubmit}>Изчисление</button>
            </form>
            <div className="advance-payment">
                <ul className="payment"></ul>
            </div>
            <form>
                <p>Авансово плащане</p>
                <label htmlFor="n">Qt =</label>
                <input type="text" id="price" name="Qt"
                    value={values.Qt}
                    onChange={handleInputChange}
                />
                <p>Период между плащания</p>
                <label htmlFor="n">t =</label>
                <input type="text" id="price" name="period"
                    value={values.period}
                    onChange={handleInputChange}
                />
                <button className="submit-btn" onClick={appendToTable}>Добави авансово плащане</button>
            </form>

            <table border={1} width='10%' cellPadding={10}>
                <tbody>
                <tr>
                    <td>Qt</td>
                    <td>t</td>
                </tr>
                {
                    inputArr.map((info, index)=>{
                        return(
                            <tr key={index}>
                                <td>{info.Qt}</td>
                                <td>{info.period}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>

            <div className="result">
                <p>Разход:</p>
                <p className="digit">{result} </p>
            </div>
        </div>
    );
}

export default OneTimePayment;