import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Sidebar = () => {
    const [isActive, setIsActive] = useState(false);
    const [dropdownArrow, setDropdownArrow] = useState(false);
    const [dropdownArrow2, setDropdownArrow2] = useState(false)
    const [dropdownArrow3, setDropdownArrow3] = useState(false)
    const [dropdownArrow4, setDropdownArrow4] = useState(false)
    const [dropdownArrow5, setDropdownArrow5] = useState(false)
    const [dropdownArrow6, setDropdownArrow6] = useState(false)
    
    const handleClick = ()=>{
        setIsActive(isActive=> !isActive);
    }
    const handleDropdownArrow = (e) =>{
        setDropdownArrow(dropdownArrow=> !dropdownArrow)
    }
    const handleDropdownArrow2 = (e) =>{
        setDropdownArrow2(dropdownArrow=> !dropdownArrow)
    }
    const handleDropdownArrow3 = (e) =>{
        setDropdownArrow3(dropdownArrow=> !dropdownArrow)
    }
    const handleDropdownArrow4 = (e) =>{
        setDropdownArrow4(dropdownArrow=> !dropdownArrow)
    }
    const handleDropdownArrow5 = (e) =>{
        setDropdownArrow5(dropdownArrow=> !dropdownArrow)
    }
    const handleDropdownArrow6 = (e) =>{
        setDropdownArrow6(dropdownArrow=> !dropdownArrow)
    }

    return (
        <div className="body">
            <div className="menu-btn" onClick={handleClick}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className={`sidebar ${isActive ? 'active' : ''}`}>
            <header>
                <div className="close-btn" onClick={handleClick}>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
                <h1>Програмни системи за бизнес моделиране</h1>
            </header>
            <ul className="menu">
                <li className="item"><Link onClick={handleDropdownArrow}>Задача 1
                <FontAwesomeIcon icon={faAngleRight}  className={`dropdown ${dropdownArrow ? 'rotate': ''}`} />
                </Link>
                <div className="sub-menu" style={{display: dropdownArrow ? "block" : "none"}}>
                    <ul>
                        <li><Link to="/postNum" className="sub-item">Постнумерандна рента</Link></li>
                        <li><Link to="/preNum" className="sub-item">Пренумерандна рента</Link></li>
                        <li><Link to="/term" className="sub-item">Определяне срока на рента</Link></li>
                        <li><Link to="/pdate" className="sub-item">Р-срочна рента</Link></li>
                        <li><Link to="/moreThanYear" className="sub-item">Рента с период по-голям от една година</Link></li>
                    </ul>
                </div>
                </li>
                <li className="item"><Link onClick={handleDropdownArrow2}>Задача 2 
                <FontAwesomeIcon icon={faAngleRight}  className={`dropdown ${dropdownArrow2 ? 'rotate': ''}`} />
                </Link>
                <div className="sub-menu" style={{display: dropdownArrow2 ? "block" : "none"}}>
                    <ul>
                        <li><Link to="/oneTimePayment" className="sub-item">Погасяване с еднократно плащане в края на периода</Link></li>
                    </ul>
                </div>
                </li>
                <li className="item"><Link onClick={handleDropdownArrow3}>Задача 3
                <FontAwesomeIcon icon={faAngleRight}  className={`dropdown ${dropdownArrow3 ? 'rotate': ''}`} />
                </Link>
                <div className="sub-menu" style={{display: dropdownArrow3 ? "block" : "none"}}>
                    <ul>
                        <li><Link to="/cleanTransaction" className="sub-item">Метод на чистия приведен доход</Link></li>
                    </ul>
                </div>
                </li>
                <li className="item"><Link onClick={handleDropdownArrow4}>Задача 4
                <FontAwesomeIcon icon={faAngleRight}  className={`dropdown ${dropdownArrow4 ? 'rotate': ''}`} />
                </Link>
                <div className="sub-menu" style={{display: dropdownArrow4 ? "block" : "none"}}>
                    <ul>
                        <li><Link to="/leasing" className="sub-item">Покупка срещу ползване на лизинг</Link></li>
                    </ul>
                </div>
                </li>
                <li className="item"><Link onClick={handleDropdownArrow5}>Задача 5
                <FontAwesomeIcon icon={faAngleRight}  className={`dropdown ${dropdownArrow5 ? 'rotate': ''}`} />
                </Link>
                <div className="sub-menu" style={{display: dropdownArrow5 ? "block" : "none"}}>
                    <ul>
                        <li><Link to="/amortization" className="sub-item">Амортизационни отчисления без отслабване на дегресията</Link></li>
                    </ul>
                </div>
                </li>
                <li className="item"><Link onClick={handleDropdownArrow6}>Задача 6
                <FontAwesomeIcon icon={faAngleRight}  className={`dropdown ${dropdownArrow6 ? 'rotate': ''}`} />
                </Link>
                <div className="sub-menu" style={{display: dropdownArrow6 ? "block" : "none"}}>
                    <ul>
                        <li><Link to="/repayment" className="sub-item">Погасяване на дълг с еднакви погасителни вноски</Link></li>
                    </ul>
                </div>
                </li>
            </ul>
        </div>
        </div>
    );
}

export default Sidebar;