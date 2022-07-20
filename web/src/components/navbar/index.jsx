import React from "react";
import "./styles/style.css";
import Logo from "../../assets/KKhane.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import MapIcon from "../../assets/map.png";
import UserIcon from "../../assets/user.png";

export default function Navbar() {
  const [language, setLanguage] = React.useState("eng");

  const handleLanguageChange = () => {
    setLanguage((prev) => (prev === "eng" ? "np" : "eng"));
  };

  return (
    <div className="navbar__container">
      <div className="leftContainer">
        <Link to="/">
          <img src={Logo} alt="K Khane" />
        </Link>
        <div className="userLocation">
          <Button>
            <img src={MapIcon} alt="" /> Address:{" "}
            <span>Change Your Location</span>
          </Button>
        </div>
      </div>

      <div className="navbar__menu">
        <div className="language">
          <img
            src={
              language === "eng"
                ? "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/1200px-Flag_of_Nepal.svg.png"
            }
            alt=""
          />
          <select
            onChange={handleLanguageChange}
            defaultValue={language}
            name=""
            id=""
          >
            <option value="">eng</option>
            <option value="">np</option>
          </select>
        </div>

        <div className="searchButton">
          <input type="text" placeholder="My appetite loves to have..." />
          <button>
            <i className="ri-search-2-line"></i>
          </button>
        </div>

        <Button className="user">
          <img src={UserIcon} />
        </Button>
      </div>
    </div>
  );
}
