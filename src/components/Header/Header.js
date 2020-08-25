import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import netflixLogo from "../../images/logo-netflix.png";
import userLogin from "../../images/userLogin.png";
import { FiGift } from "react-icons/fi";
import { FaBell, FaAngleDown, FaSearch } from "react-icons/fa";

function Header() {
  const [isFocusSearch, setFocusSearch] = useState(false);
  return (
    <HeaderWrapper isFocus={isFocusSearch} className="nav container">
      <Link to="/">
        <img
          src={netflixLogo}
          alt="Logo"
          title="Go to HomePage"
          className="nav__logo"
        ></img>
      </Link>

      <ul className="nav__list">
        <li className="nav__list-item active">
          <Link to="/">Home</Link>
        </li>
        <li className="nav__list-item">
          <Link to="/">Series</Link>
        </li>
        <li className="nav__list-item">
          <Link to="/">Films</Link>
        </li>
        <li className="nav__list-item">
          <Link to="/">Latest</Link>
        </li>
        <li className="nav__list-item">
          <Link to="/">My List</Link>
        </li>
      </ul>

      <div className="nav__right">
        <div className="nav__right-search">
          <label className="search-icon" for="search">
            <FaSearch color="white" size="23px"></FaSearch>
          </label>
          <input
            type="text"
            name="search"
            id="search"
            className="search-input"
            placeholder="Titles, People, Genres, ..."
            onFocus={() => setFocusSearch(true)}
            onBlur={() => setFocusSearch(false)}
          ></input>
        </div>

        <div className="nav__right-gift" style={{ marginRight: "20px" }}>
          <Link to="/">
            <FiGift color="white" size="25px"></FiGift>
          </Link>
        </div>

        <div className="nav__right-noti">
          <FaBell className="noti-icon" color="white" size="25px"></FaBell>
          <div className="noti-info">
            <div>aaaaaaaaaaaaaa</div>
          </div>
        </div>

        <div className="nav__right-user-login">
          <img
            src={userLogin}
            alt="avatar"
            style={{ width: "30px", objectFit: "contain" }}
          ></img>
          <span>
            <FaAngleDown style={{ marginLeft: "4px" }}></FaAngleDown>
          </span>
          <div className="user-info">
            <h1>aaaaaaaaaaaaaa</h1>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.nav`
  display: flex;
  align-items: center;
  height: 68px;
  .nav__logo {
    max-width: 100px;
    margin-top: 8px;
    object-fit: contain;
  }
  .nav__list {
    list-style: none;
    margin: 0 2.5rem;
    padding: 0;
    .nav__list-item {
      display: inline-block;
      margin-right: 20px;
      padding: 0;
      color: #e5e5e5;
      transition: all 0.4s ease;
      text-transform: capitalize;
      font-size: 15px;
      :hover {
        opacity: 0.7;
        cursor: pointer;
      }
    }
    .nav__list-item.active {
      color: white;
      font-weight: 600;
    }
  }
  .nav__right {
    margin-left: auto;
    display: flex;
    align-items: center;

    .nav__right-search {
      position: relative;
      margin-right: 40px;
      display: flex;
      align-items: center;
      border: ${(props) => (props.isFocus ? "1px solid white" : "none")};
      .search-icon {
        position: absolute;
        top: -2px;
        left: 0;
        transform: ${(props) =>
          props.isFocus ? "translate(4px, 6px)" : "none"};
        cursor: pointer;
      }
      .search-input {
        width: 0;
        border: none;
        outline: none;
        background: ${(props) =>
          props.isFocus ? "rgba(0, 0, 0, 0.2)" : "transparent"};
        color: white;
        transition: all 0.3s ease;
        :focus {
          width: 280px;
          padding: 6px 30px 6px 35px;
        }
        ::placeholder {
          color: white;
          opacity: 0.5;
        }
      }
    }

    .nav__right-noti {
      position: relative;
      margin-right: 20px;
      cursor: pointer;
      .noti-info {
        position: absolute;
        top: calc(100% + 20px);
        right: 0;
        background: rgba(0, 0, 0, 0.5);
        border-top: 2px solid white;
        width: 400px;
        transition: all 0.4s ease;
        transform: scale(0);
        transform-origin: top right;
      }
      :after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translate(-50%, 4px);
      }
      :before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 130%;
        height: 70px;
        background-color: transparent;
      }
      :hover {
        .noti-info {
          transform: scale(1);
        }
        :after {
          border: 8px solid;
          border-color: transparent transparent white transparent;
        }
      }
    }

    .nav__right-user-login {
      display: flex;
      align-items: center;
      position: relative;
      cursor: pointer;
      .user-info {
        position: absolute;
        top: calc(100% + 19px);
        right: 0;
        background: rgba(0, 0, 0, 0.5);
        border-top: 2px solid white;
        width: 400px;
        transition: all 0.4s ease;
        transform: scale(0);
        transform-origin: top right;
      }
      :after {
        content: "";
        position: absolute;
        top: 100%;
        left: 25%;
        transform: translate(-25%, 4px);
      }
      :before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 130%;
        height: 70px;
        background-color: transparent;
      }
      :hover {
        .user-info {
          transform: scale(1);
        }
        :after {
          border: 8px solid;
          border-color: transparent transparent white transparent;
        }
      }
    }
  }
`;

export default Header;
