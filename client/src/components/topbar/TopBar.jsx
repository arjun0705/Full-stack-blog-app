import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from "react-icons/ai"
import { BsMedium } from "react-icons/bs"

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:8080/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
       <a href="https://www.linkedin.com/in/arjun-samrat-23b7b11aa/" target="blank"><i  className="topIcon"><AiFillLinkedin /></i></a> 
       <a href="https://github.com/arjun0705" target="blank"><i className="topIcon"><AiOutlineGithub /></i></a> 
       <a href="https://medium.com/@arjunsamrat0705/about" target="blank"> <i className="topIcon"><BsMedium /></i></a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          {/* <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li> */}
          {/* <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li> */}
          <li className="topListItem">
            <Link className="link" to="/write">
            <span className="write">WRITE</span>  
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="profile" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
