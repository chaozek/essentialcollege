import React, {useState} from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
import { useGlobalContext } from "../context"
import img from "../imgs/ec.png"
import { FaTimes } from "react-icons/fa"
import sublinks from './data'


export default function Sidebar() {
  const {isSidebarOpen,openSidebar, openSubmenu, closeSidebar} = useGlobalContext() 

  return (
        <aside className={`${isSidebarOpen? "sidebar-wrapper show":"sidebar-wrapper"}`}>
          <div className="sidebar">
              <button className="close-btn" onClick={closeSidebar}>
                  <FaTimes/>
              </button>
              <div className="sidebar-links">
                  {sublinks.map((item, index) => {
                      const { links, page } = item;
                      return (
                          <article key={index}>
                              <h4><a href={`${item.url}`}>{page}</a></h4>
                          </article>
                      )
                  })}
                  <img className="sidebar-logo" src={img} alt=""/>
              </div>
            </div>
        </aside>
    )
}
