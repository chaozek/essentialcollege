import React, { useState, useContext, useEffect } from 'react';
import sublinks from './Components/data';
import emailjs from 'emailjs-com';
import { useLocation } from "react-router-dom";
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [value, setValue] = useState("");
  const [page, setPage] = useState({ page: '', links: [] });
console.log(page)
  const [location, setLocation] = useState({});
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  console.log(page)
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };
 function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_2eikht8', 'template_5hdxv33', e.target, 'user_PXYnq2AaQl8bnJdRA22WP')
      .then((result) => {
        console.log(result.text);
        toast.success("Zpráva odeslána 👌")
        console.log(toast.success)
      }, (error) => {
          console.log(error.text);
          toast.error("Vyskytla se chyba 😤, zavolejte prosím")

      });
   e.target.reset()
  }
  function changeValue(e) {
    setValue(e.target.value)
    console.log(e.target.value)
}

  return (
    <AppContext.Provider
      value={{
        sendEmail,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        page,
        location,
        changeValue,
        value
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
