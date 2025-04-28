import React from "react";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/*logo*/}
          <a href="#">
  <img
    src="../logo.png"
    alt="Logo"
    style={{ width: '100px', height: '100px', objectFit: 'contain' }}
  />
</a>

          {/*button*/}
          <a
            href="#contact"
            className="btn btn-sm flex justify-center items-center"
          >
            Contact me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
