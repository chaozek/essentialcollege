import React from 'react';
import logo from '../imgs/ec.png';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import { Link } from "react-router-dom"


  const Navbar = () => {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
    const displaySubmenu = (e) => {
      const page = e.target.textContent;
      const tempBtn = e.target.getBoundingClientRect();
      const center = (tempBtn.left + tempBtn.right) / 2;
      const bottom = tempBtn.bottom - 3;
      openSubmenu(page, { center, bottom });
    };
    const handleSubmenu = (e) => {
      if (!e.target.classList.contains('link-btn')) {
        closeSubmenu();
    }
  };
  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
         <Link to="/"><img src={logo} className='nav-logo' alt='' /> </Link></div>
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
          <ul className='nav-links'>
          <Link to="/doma">
        <li>
          <button className='link-btn' onMouseOver={closeSubmenu} >
              Doma
            </button>
              </li>
          </Link> 
        
            <Link to="/Uchazeči">

          <li>
            <button className='link-btn' onMouseOver={displaySubmenu} >
            Pro uchazeče
            </button>
            </li>
            


              </Link> 
              <Link to="/katedry">

<li>
  <button className='link-btn' onMouseOver={displaySubmenu}>
  Katedry
  </button>
    </li>
    </Link> 
              <Link to="/sponzori">

          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
            Partneři
            </button>
          </li>
          </Link> 

          </ul>
          <Link to="/soutez">

        <button className='btn signin-btn'>Soutěž</button></Link> 

        </div>

    </nav>
  );
};

export default Navbar;
