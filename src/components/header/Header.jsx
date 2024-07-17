import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "./header.scss";
import { IoSearchSharp } from "react-icons/io5";


const Header = ({ title }) => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };
    return (
        <header id="header">
            <div className="header">
                <div className="header__left">
                    <RxHamburgerMenu />
                    <form action="">
                        <IoSearchSharp />
                        <input type="text" placeholder="search..." />
                    </form>
                </div>
                <div className="header__right">
                    <select name="" id="">
                        <option value="en">English</option>
                        <option value="ru">Russia</option>
                        <option value="ru">Uzbek</option>
                    </select>
                </div>
            </div>
        </header>
    );
};

export default Header;
