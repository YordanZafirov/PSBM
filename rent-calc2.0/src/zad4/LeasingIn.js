import { useState } from "react";

const LeasingIn = () => {
    const initialValues = {
        n: '',
        s: '',
        p: '',
        m: '',
        rS: '',
        months: '',
    }
    const [values, setValues] = useState(initialValues);
    const [purchaseMonthlyExpenses, setPurchaseMonthlyExpenses] = useState([]);
    const [rentMonthlyExpenses, setRentMonthlyExpenses] = useState([]);
    let allPurchaseExpenses = '';

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    let purcaseMonthlyMaintananceCost = '';

    const handleSubmit = e => {
        e.preventDefault();
        let n = Number(values.n);
        let s = Number(values.s);
        let p = Number(values.p) / 100;;
        let m = Number(values.m)
        let rS = Number(values.rS)
        let months = Number(values.months)

        let purchaseExpenses = n * s;
        let rentExpenses = 0;
        purcaseMonthlyMaintananceCost = (p * n * s) / 100;
        allPurchaseExpenses = purcaseMonthlyMaintananceCost * (months - p-1);

        for(let i = 0; i < months; i++) {
            // Purchase
            const cost = n*s;
            purchaseExpenses += (m <= i) ? (p*cost) / 100 : 0;
            setPurchaseMonthlyExpenses(prevArr => [...prevArr, purchaseExpenses])
            console.log(purchaseMonthlyExpenses);
    
            // Rent
            rentExpenses += rS*n;
            setRentMonthlyExpenses(prevArr => [...prevArr, rentExpenses])
            console.log(rentMonthlyExpenses);
        }
    }

    return (
        <div className="content">
            <form>
                <h2>Покупка срещу наем</h2>
                <p><b>Покупка:</b></p>
                <p>Брой продукти:</p>
                <label htmlFor="n"></label>
                <input type="text" id="price" name="n"
                    value={values.n}
                    onChange={handleInputChange}
                />
                <p>Цена на продукта</p>
                <label htmlFor="r"></label>
                <input type="text" id="rent-payment" name="s"
                    value={values.s}
                    onChange={handleInputChange}
                />
                <p>Процент на допълнителни разходи</p>
                <label htmlFor="interest"></label>
                <input type="text" id="interest" name="p"
                    value={values.p}
                    onChange={handleInputChange}
                />
                <p>Начало на разходите в месеци</p>
                <label htmlFor="interest"></label>
                <input type="text" id="interest" name="m"
                    value={values.m}
                    onChange={handleInputChange}
                />
                <p><b>Наем</b></p>
                <p>Месечна вноска, лв/м</p>
                <label htmlFor="interest"></label>
                <input type="text" id="interest" name="rS"
                    value={values.rS}
                    onChange={handleInputChange}
                />
                <p>Срок на договор под наме, в месеци</p>
                <label htmlFor="interest"></label>
                <input type="text" id="interest" name="months"
                    value={values.months}
                    onChange={handleInputChange}
                />
                <button className="submit-btn" onClick={handleSubmit}>Изчисление</button>
            </form>

            <div className="result">
                <p><b>Покупка</b></p>
                {/* <p>Месечни разходи: {purcaseMonthlyMaintananceCost}лв./м</p>
                <p>Общо допълнителни разходи: {allPurchaseExpenses} лв.</p>
                <p>Общи разходи при покупка: {purchaseMonthlyExpenses} лв.</p>
                <p><b>Наем</b></p>
                <p>Месечни вноски: {values.rS}лв.</p>
                <p>Общи разходи при наем: {rentMonthlyExpenses} </p> */}
            </div>
        </div>
    );
}

export default LeasingIn;