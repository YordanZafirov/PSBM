import { useState } from "react";

const Amortization = () => {
    const initialValues = {
        a: '',
        p: '',
        t: '',
        s: '',
        // RnArr: '',
        // DnArr: '',
    }
    const [values, setValues] = useState(initialValues);

    const [RnArr, setRnArr] = useState([]);
    const [DnArr, setDnArr] = useState([]);

    const [result, setResult] = useState('')

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };


    // const appendToTable = (e) =>{
    //     e.preventDefault();
    //         setInputArr([...inputArr, {RnArr, DnArr}])
    //         console.log(inputArr);
    //         console.log(values);
    // }

    const handleSubmit = e => {
        e.preventDefault();
        let a = Number(values.a);
        let p = Number(values.p) / 100;
        let t = Number(values.t);
        let s = Number(values.s);

        if (!Number(a) && !Number(p) && !Number(t)
            && !Number(s)) {
            alert('Неправилно въведени данни');
        } else if (values.p == '?') {
            p = (((a - s) / t) / a) * 100;
            setResult(`p = ${p.toFixed(2)}%`)
        } else if (values.s == '?') {
            s = a - t * (a * p);
            setResult(`S = ${s.toFixed(2)} лв.`)
        }

        let Dn = a * p;
        DnArr.push(Dn)
        for (let i = 1; i < t + 1; i++) {
            let Rn = a * (1 - i * p)
            RnArr.push(Rn);
        }
    }


    return (
        <div className="content">
            <form>
                <h2>Амортизационни отчисления без отслабване на дегресия</h2>
                <p>Стойност на създаване на актива</p>
                <label htmlFor="n">А =</label>
                <input type="text" id="price" name="a"
                    value={values.a}
                    onChange={handleInputChange}
                />
                <p>Постоянна процентна ставка</p>
                <label htmlFor="r">р =</label>
                <input type="text" id="rent-payment" name="p"
                    value={values.p}
                    onChange={handleInputChange}
                />
                <p>Брой години</p>
                <label htmlFor="interest">t =</label>
                <input type="text" id="interest" name="t"
                    value={values.t}
                    onChange={handleInputChange}
                />
                <p>Сума</p>
                <label htmlFor="interest">S =</label>
                <input type="text" id="interest" name="s"
                    value={values.s}
                    onChange={handleInputChange}
                />
                <button className="submit-btn" onClick={handleSubmit}>Изчисление</button>
            </form>
            <div className="advance-payment">
                <ul className="payment"></ul>
            </div>

            <table border={1} width='20%' cellPadding={10}>
                <tbody>
                    <tr>
                        <td>N</td>
                        <td>Амортизационна сума, Rn</td>
                        <td>Балансова стойност, Dn</td>
                    </tr>
                    {
                        RnArr?.map((info, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{info}</td>
                                    {DnArr?.map((info, index) => {
                                        return (
                                            <td>{info}</td>
                                            
                                        )
                                    })}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <div className="result">
                <p className="digit">{result} </p>
            </div>
        </div>
    );
}

export default Amortization;