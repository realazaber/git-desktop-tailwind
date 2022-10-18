import React from "react";

const Header = () => (
  <header className="flex flex-col justify-center items-center text-white py-10 px-3">
    <img
      src="/images/svgs/desktop-icon.svg"
      alt="github logo"
      width="96"
      height="96"
    />
    <ul className="flex flex-row mt-2">
      <li className="text-white m-2 text-base">
        <a href="#home">Overview</a>
      </li>
      <li className="text-purple-500 m-2 text-base">
        <a href="https://desktop.github.com/release-notes/">Release Notes</a>
      </li>
      <li className="text-purple-500 m-2 text-base">
        <a href="https://docs.github.com/en/desktop">Help</a>
      </li>
    </ul>
  </header>
);

export default Header;
