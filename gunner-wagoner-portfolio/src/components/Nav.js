import React from "react";
import { capitalizeFirstLetter } from "../utils/helpers";

function Nav(props) {
  const {
    navTabs = [],
    setCurrentNavTab,
    currentNavTab,
    contactSelected,
    setContactSelected,
  } = props;

  return (
    <header className="">
      <h2>
        <a href="/">Gunner Wagoner</a>
      </h2>
      <nav>
        <ul className="">
          <li className="mx-2">
            <a href="#about" onClick={() => setContactSelected(false)}>
              About
            </a>
          </li>
          <li className="{`mx-2 ${contactSelected && 'navActive'}`}">
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {navTabs.map((category) => (
            <li
              className={`mx-1 ${
                currentNavTab.name === category.name &&
                !contactSelected &&
                "navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentNavTab(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
