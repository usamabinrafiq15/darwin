import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { PiPhone } from "react-icons/pi";
import "./FloatingMenu.scss";

const FloatingMenu = () => {
  const menuItems = [
    { title: "Research", icon: <IoIosSearch color="var(--grey-50)" /> },
    { title: "Home", icon: <IoHomeOutline color="var(--grey-50)" /> },

    {
      title: "Contacts",
      icon: <PiPhone color="var(--grey-50)" />,
    },
  ];

  return (
    <div className="floating-menu">
      {menuItems.map((item, index) => (
        <button
          key={index}
          className="floating-button"
          title={item.title}
          onClick={() => console.log(`${item.title} clicked`)}
        >
          <span>{item.icon}</span>
        </button>
      ))}
    </div>
  );
};

export default FloatingMenu;
