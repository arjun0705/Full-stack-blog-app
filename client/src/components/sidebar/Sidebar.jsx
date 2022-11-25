import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import Me from "../../assets/profile.png"
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from "react-icons/ai"
import { BsMedium } from "react-icons/bs"

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="abtimg"
          src={Me}
          alt=""
        />
        <p>
          I am a full stack web developer with robust problem-solving skills and proven experience in designing, developing and deploying software, website & web-application in a test-driven environment.

        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name} </li>


            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <a href="https://www.linkedin.com/in/arjun-samrat-23b7b11aa/" target="blank"><i className="topIcon"><AiFillLinkedin /></i></a>
          <a href="https://github.com/arjun0705" target="blank"><i className="topIcon"><AiOutlineGithub /></i></a>
          <a href="https://medium.com/@arjunsamrat0705/about" target="blank"> <i className="topIcon"><BsMedium /></i></a>

        </div>
      </div>
        <span style={{marginTop:"20px"}}>&copy; 2022 Arjun Samrat | All rights reserved.</span>
    </div>
  );
}
