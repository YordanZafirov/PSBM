import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./sideBar";
import PostNumRent from "./zad1/PostNumRent";
import PreNum from "./zad1/PreNum";
import Term from "./zad1/Term";
import Pdate from "./zad1/Pdate";
import MoreThanYear from "./zad1/MoreThanYear";
import OneTimePayment from "./zad2/OneTimePayment";
import Amortization from "./zad5/Amortization";
import Repayment from "./zad6/Repayment";
import LeasingIn from "./zad4/LeasingIn";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/postNum" element={<PostNumRent />} />
            <Route path="/preNum" element={<PreNum />} />
            <Route path="/term" element={<Term />} />
            <Route path="/pdate" element={<Pdate />} />
            <Route path="/moreThanYear" element={<MoreThanYear />} />
            <Route path="/oneTimePayment" element={<OneTimePayment />} />
            <Route path="/leasing" element={<LeasingIn />} />
            <Route path="/amortization" element={<Amortization />} />
            <Route path="/repayment" element={<Repayment />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
