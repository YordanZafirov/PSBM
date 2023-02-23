import { useState } from "react";

const Repayment = () => {
    const initialValues = {
        s: '',
        t: '',
        i: '',
    }
    const [values, setValues] = useState(initialValues);

    const [tableData, setTableData] = useState([]);
    const [totals, setTotals] = useState([]);


    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    let finalPayment = 0;
    let finalInterest = 0;
    let finalYearlyPayment = 0;

    const handleSubmit = e => {
        e.preventDefault();
        let S = Number(values.s);
        let i = Number(values.i);
        let t = Number(values.t);


        if (!Number(S) && !Number(i) && !Number(t)) {
            alert('Неправилно въведени данни');
        } else {
            const T = S / t;

            for (let j = 0; j < t; j++) {
                const Z = S * i;

                const A = T + S * i;
                
                finalPayment += T;
                finalInterest += Z;
                finalYearlyPayment += A;
                const rowData = {
                    id: j + 1,
                    S: S,
                    T: T,
                    Z: Z,
                    A: A,

                };

                setTableData(prevTableData => [...prevTableData, rowData]);
                S -= T;
            }
            const totals = {
                id: "Общо",
                sTotal: "-",
                tTotal: finalPayment,
                zTotal: finalInterest,
                aTotal: finalYearlyPayment,
            }
            setTotals(prevTableData => [...prevTableData, totals]);
        }
    }


    return (
        <div className="content">
            <form>
                <h2>Погасяване на дълг с еднакви погасителни вноски</h2>
                <p>Сума</p>
                <label htmlFor="n"></label>
                <input type="text" id="price" name="s"
                    value={values.s}
                    onChange={handleInputChange}
                />
                <p>Срок</p>
                <label htmlFor="r"></label>
                <input type="text" id="rent-payment" name="t"
                    value={values.t}
                    onChange={handleInputChange}
                />
                <p>Лихва</p>
                <label htmlFor="interest"></label>
                <input type="text" id="interest" name="i"
                    value={values.i}
                    onChange={handleInputChange}
                />
                <button className="submit-btn" onClick={handleSubmit}>Изчисление</button>
            </form>
            <div className="advance-payment">
                <ul className="payment"></ul>
            </div>

            <table border={1} width='40%' >
                <tbody>
                    <tr>
                        <td>Година, t</td>
                        <td>Остатък от дълга в началото на годината</td>
                        <td>Сума за погасяване на дълга, Т</td>
                        <td>Лихва, Zn</td>
                        <td>Срочно плащане, An</td>
                    </tr>
                    {
                        tableData.map(row => {
                            return (
                                <tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td>{row.S}</td>
                                    <td>{row.T}</td>
                                    <td>{row.Z}</td>
                                    <td>{row.A}</td>
                                </tr>
                            )

                        })}
                </tbody>
                <tfoot>
                    {
                        totals.map(info=> (
                            <tr>
                            <td>{info.id}</td>
                            <td>{info.sTotal}</td>
                            <td>{info.tTotal}</td>
                            <td>{info.zTotal}</td>
                            <td>{info.aTotal}</td>
                            </tr>

                        ))
                    }
                    <tr>

                    </tr>
                </tfoot>
            </table>

        </div>
    );
}

export default Repayment;