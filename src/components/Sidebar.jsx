import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { FaBars } from 'react-icons/fa';
import { logo } from '../assets';
import { links } from '../assets/constants';
import { useLocation } from 'react-router-dom';
import './extraStyle.css';
const NavLinks = ({ handleClick }) => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="mt-10">
      {links.map((item, i) => {
        return (
          <NavLink
            key={item.name}
            to={item.to}
            className={`flex flex-row justify-start items-center my-8 text-sm p-2 text-gray-400 nav__link ${
              location.pathname == item.to && 'nav__links'
            } `}
            onClick={() => {
              handleClick && handleClick();
            }}
          >
            <item.icon className="w-6 h-6 mr-2" />
            {item.name}
          </NavLink>
        );
      })}
    </div>
  );
};
const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] p-10 px-4 bg-[#080808]">
        {/* <img src={logo} alt="logo" className="w-full h-14 object-contain" /> */}
        <h2 className="text-[40px] text-center font-bold text-[#D2001A] tracking-wider">
          Musify
        </h2>
        <NavLinks />
      </div>
      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine
            onClick={() => setMobileMenuOpen(false)}
            className="w-6 h-6 text-white mr-2"
          />
        ) : (
          <FaBars
            onClick={() => setMobileMenuOpen(true)}
            className="w-6 h-6 text-white mr-2"
          />
        )}
      </div>
      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to [#483b8b] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? 'left-o ' : 'left-full'
        }`}
      >
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks onClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
