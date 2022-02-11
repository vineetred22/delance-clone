import React from "react";
import "./HeaderSlider.css";
import { RiArrowRightSLine } from "react-icons/ri";
// import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { Link, NavLink } from "react-router-dom";
// import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { BiArrowBack } from "react-icons/bi";
import { MdCreate } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

function HeaderSlider() {
  return (
    <h2 className="nav-item" icon={<MdCreate />}>
      <DropdownMenu></DropdownMenu>
    </h2>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>
            <h2 className="maincontent"> Menu</h2>
          </DropdownItem>
          <Link to="/home">
            <DropdownItem>Home</DropdownItem>
          </Link>
          <DropdownItem goToMenu="Find">
            <Link>
              Find work <RiArrowRightSLine className="arrow" />
            </Link>
          </DropdownItem>
          <DropdownItem goToMenu="Employers">
            <Link>
              For Employers <RiArrowRightSLine className="arrow" />
            </Link>
          </DropdownItem>
          <DropdownItem goToMenu="Dashboard">
            <Link>
              Dashboard <RiArrowRightSLine className="arrow" />
            </Link>
          </DropdownItem>
          <DropdownItem goToMenu="Pages">
            <Link>
              About Us <RiArrowRightSLine className="arrow" />
            </Link>
          </DropdownItem>
        </div>
      </CSSTransition>
      {/* <CSSTransition
        in={activeMenu === "home"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<BiArrowBack />}>
            <h2 className="maincontent">
              <Link> Home</Link>
            </h2>
          </DropdownItem>

          <DropdownItem>
            {" "}
            <Link>Home1</Link>
          </DropdownItem>
        </div>
      </CSSTransition> */}

      <CSSTransition
        in={activeMenu === "Find"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<BiArrowBack />}>
            <h2 className="maincontent">
              {" "}
              <Link> Find work</Link>
            </h2>
          </DropdownItem>
          {/* <DropdownItem goToMenu="Jobs">
            <Link>
              Browse Jobs <RiArrowRightSLine className="arrow" />
            </Link>
          </DropdownItem> */}

          <Link to="/findwork">
            <DropdownItem>Browse Project</DropdownItem>
          </Link>
          {/* <DropdownItem>
            {" "}
            <Link>Job Pages </Link>
          </DropdownItem>
          <DropdownItem>
            {" "}
            <Link>Project Pages </Link>
          </DropdownItem>
          <Link to="/userprofile">
            <DropdownItem> Profile</DropdownItem>
          </Link> */}
        </div>
      </CSSTransition>

      {/* <CSSTransition
        in={activeMenu === "Jobs"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="Find" leftIcon={<BiArrowBack />}>
            <h2 className="maincontent">
              <Link> Browse Jobs</Link>
            </h2>
          </DropdownItem>
          <DropdownItem>
            <Link>Full page+grid</Link>
          </DropdownItem>
          <DropdownItem>
            <Link>Full page+grid+map</Link>
          </DropdownItem>
          <DropdownItem>
            <Link>Full page Create</Link>
          </DropdownItem>
          <DropdownItem>
            <Link>List layout</Link>
          </DropdownItem>
        </div>
      </CSSTransition> */}

      <CSSTransition
        in={activeMenu === "Employers"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<BiArrowBack />}>
            <h2 className="maincontent">
              <Link>
                For Employers <RiArrowRightSLine />
              </Link>
            </h2>
          </DropdownItem>
          <Link to="/findfreelancer">
            <DropdownItem> Find a Freelancer</DropdownItem>
          </Link>
          <Link to="/postproject">
            <DropdownItem> Post a Project</DropdownItem>
          </Link>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "Dashboard"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<BiArrowBack />}>
            <h2 className="maincontent">
              <Link>Dashboard</Link>
            </h2>
          </DropdownItem>
          <Link to="/userdashboard">
            <DropdownItem>Dashboard</DropdownItem>
          </Link>
          <Link to="/messagecomponent">
            <DropdownItem>Messages</DropdownItem>
          </Link>
          <Link to="/userreview">
            <DropdownItem>Reviews</DropdownItem>
          </Link>
          <DropdownItem goToMenu="project">
            <Link>
              Project <RiArrowRightSLine className="arrow" />
            </Link>
          </DropdownItem>
          <Link to="/freelancerupdateprofile">
            <DropdownItem>User Profile</DropdownItem>
          </Link>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "project"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<BiArrowBack />}>
            <h2 className="maincontent">
              <Link>project</Link>
            </h2>
          </DropdownItem>
          <Link to="/manageprojects">
            <DropdownItem>Manage Projects</DropdownItem>
          </Link>
          <Link to="/MyActiveBidsComponent">
            <DropdownItem>My Active Bids</DropdownItem>
          </Link>
          <Link to="/postproject">
            <DropdownItem>Post Project</DropdownItem>
          </Link>
        </div>
      </CSSTransition>

      {/* <CSSTransition
        in={activeMenu === 'Jobs'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="Find" leftIcon={<BiArrowBack />}>
            <h2 className="maincontent">   Browse Jobs</h2>
          </DropdownItem>
          <DropdownItem >Full page+grid</DropdownItem>
          <DropdownItem >Full page+grid+map</DropdownItem>
          <DropdownItem >Full page Create</DropdownItem>
          <DropdownItem >List layout</DropdownItem>
        </div>
      </CSSTransition> */}
      <CSSTransition
        in={activeMenu === "Pages"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<BiArrowBack />}>
            <h2 className="maincontent">
              <Link>
                About Us <RiArrowRightSLine />
              </Link>
            </h2>
          </DropdownItem>

          <DropdownItem>
            <Link>Blog</Link>
          </DropdownItem>

          <DropdownItem>
            <Link>Checkout pages</Link>
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default HeaderSlider;
