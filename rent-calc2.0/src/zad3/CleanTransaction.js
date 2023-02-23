import { useState } from "react";

const CleanTransaction = () => {

    const initialValues = {
        Mt: '',
        n1: '',
        P1: '',
        E: '',
        n2: '',
        P2: '',
        t: '',
        i: '',
        norm: '',
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

    let { t } = values;
    const appendToTable = (e) =>{
        e.preventDefault();
        if(inputArr.length > values.t){
            alert('Невалиден период между плащанията');
        } else {
            setInputArr([...inputArr, {t}])
            console.log(inputArr);
            console.log(values);
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        let Mt = Number(values.Mt);
        let n1 = Number(values.n1);
        let P1 = Number(values.P1);
        let E = Number(values.E);
        let n2 = Number(values.n2);
        let P2 = Number(values.P2);
        let i = Number(values.i);
        let norm = Number(values.norm);
        let pom1 = 0;
        let pom2 = 0;

        if (!Number(Mt) && !Number(n1) && !Number(P1) 
        && !Number(n2) && !Number(P2) && !Number(E) && !Number(i) && !Number(norm)) {
            alert('Неправилно въведени данни');
        } else {

        }
    }

    return ( 
        <div className="content">
            <form>
                <h2>Метод на чистия приведен доход</h2>
                <p>За инвестициите</p>
                <label htmlFor="n">Mt =</label>
                <input type="text" id="price" name="Mt"
                    value={values.Mt}
                    onChange={handleInputChange}
                />
                <p></p>
                <label htmlFor="r">n1 =</label>
                <input type="text" id="rent-payment" name="n1"
                    value={values.n1}
                    onChange={handleInputChange}
                />
                <p></p>
                <label htmlFor="interest">P1 =</label>
                <input type="text" id="interest" name="P1"
                    value={values.P1}
                    onChange={handleInputChange}
                />
                <p>За отдаването</p>
                <label htmlFor="interest">E =</label>
                <input type="text" id="interest" name="E"
                    value={values.E}
                    onChange={handleInputChange}
                />
                <p></p>
                <label htmlFor="interest">n2 =</label>
                <input type="text" id="interest" name="n2"
                    value={values.n2}
                    onChange={handleInputChange}
                />
                <p></p>
                <label htmlFor="interest">P2 =</label>
                <input type="text" id="interest" name="P2"
                    value={values.P2}
                    onChange={handleInputChange}
                /> 
                <p></p>
                <label htmlFor="interest">i =</label>
                <input type="text" id="interest" name="i"
                    value={values.i}
                    onChange={handleInputChange}
                /> 
                <button className="submit-btn" onClick={handleSubmit}>Изчисление</button>
            </form>
            <div className="advance-payment">
                <ul className="payment"></ul>
            </div>
            <form>
                <p>Паричен поток</p>
                <label htmlFor="n">t =</label>
                <input type="text" id="price" name="t"
                    value={values.t}
                    onChange={handleInputChange}
                />
                <button className="submit-btn" onClick={appendToTable}>Добавяне на колона</button>
            </form>

            <table border={1} width='10%' cellPadding={10}>
                <tbody>
                <tr>
                    <td>N</td>
                    <td>t</td>
                </tr>
                {
                    inputArr.map((info, index)=>{
                        return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{info.t}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>

            <div className="result">
                <p>ЧПД:</p>
                <p className="digit">{result} </p>
            </div>
        </div>
     );
}
 
export default CleanTransaction;