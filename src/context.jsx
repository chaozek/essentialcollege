import React, { useState, useContext } from 'react';
import sublinks from './Components/data';
import emailjs from 'emailjs-com';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState({ page: '', links: [] });
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
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };
 function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_2eikht8', 'template_5hdxv33', e.target, 'user_PXYnq2AaQl8bnJdRA22WP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
   e.target.reset()
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
