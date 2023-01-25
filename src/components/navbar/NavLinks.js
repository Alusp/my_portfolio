import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BiEnvelope } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';

const NavLinks = ({ handleNav }) => (
  <ul className="nav-links">
    <li onClick={handleNav} aria-hidden="true">
      <Link
        to="//twitter.com/aseni_jalloh"
        target="_blank"
        className="nav-link"
      >
        <FaTwitter />
      </Link>
    </li>
    <li onClick={handleNav} aria-hidden="true">
      <Link
        to="//www.linkedin.com/in/alusine-jalloh"
        target="_blank"
        className="nav-link"
      >
        <FaLinkedin />
      </Link>
    </li>
    <li onClick={handleNav} aria-hidden="true">
      <Link to="//github.com/Alusp" target="_blank" className="nav-link">
        <BsGithub />
      </Link>
    </li>
    <li onClick={handleNav} aria-hidden="true">
      <Link
        to="//mailto:alujallo@gmail.com"
        target="_blank"
        className="nav-link"
      >
        <BiEnvelope />
      </Link>
    </li>
  </ul>
);

NavLinks.propTypes = {
  handleNav: NavLinks.string,
}.isRequired;

export default NavLinks;
