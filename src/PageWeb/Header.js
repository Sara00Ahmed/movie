import React, { useState } from "react";
import "./header.css";
import NavItemData from "../Components/NavItemData";
import NavItem from "../Components/NavItem";
import { Link } from "react-router-dom";
import Search from "../Components/Search";
import Button from "../Components/Button";
import { useDispatch, useSelector } from "react-redux";
import { theme } from "../Redux/Actions/theme";
import { lang } from "../Redux/Actions/lang";
import useTranslation from "../translate/useTranslation";

function Header() {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.theme);
  const currentLang = useSelector((state) => state.lang.lang);
  const { t } = useTranslation();

  // 🔹 Define the `searchQuery` state
  const [searchQuery, setSearchQuery] = useState("");

  // 🔹 Define `handleSearch` function
  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log("Searching for:", query); // Debugging output
  };

  // 🔹 Theme Button
  const ChangeThemeBTN = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    dispatch(theme(newTheme));
    localStorage.setItem("theme", newTheme);
  };

  // 🔹 Language Button
  const changeLanguage = () => {
    const newLang = currentLang === "EN" ? "AR" : "EN";
    dispatch(lang(newLang));
    localStorage.setItem("lang", newLang);
  };

  return (
    <header>
      <nav className="header-nav">
        <Link to="/" className="logo">{t("Cinema")}</Link>

        <ul className="navbar">
          {NavItemData.map((item) => (
            <NavItem key={item.id} name={item.name} link={item.link} />
          ))}
        </ul>

        {/* 🔹 Pass `handleSearch` function to Search Component */}
        <Search setSearchQuery={handleSearch} />

        <Button to="/SignIn" icon={<ion-icon name="log-in-outline"></ion-icon>} name="Sign In" />
        <Button to="/SignUp" icon={<ion-icon name="log-out-outline"></ion-icon>} name="Sign Up" />

        <button onClick={ChangeThemeBTN} className="btn btn-primary">
          <ion-icon name="moon-outline"></ion-icon>
        </button>

        <button onClick={changeLanguage}>English</button>
      </nav>
    </header>
  );
}

export default Header;
