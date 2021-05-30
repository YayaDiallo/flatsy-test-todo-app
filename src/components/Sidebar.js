import React from 'react';
import { Link } from 'react-router-dom';
import { links } from '../utils/constants';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <section className='sidebar'>
      <NavLinks>
        {links.map((link) => (
          <div key={link.id}>
            <li style={{ backgroundColor: `${link.bgColor}` }}>
              <Link to={link.url}>{link.icon}</Link>
            </li>
          </div>
        ))}
      </NavLinks>
    </section>
  );
};

const NavLinks = styled.ul`
  div {
    width: 100%;
    height: 100%;
    padding: 18px;

    &:hover {
      background: #1f1f27;
    }
  }

  li {
    padding: 6px 3px 3px;
    text-align: center;
    border-radius: 4px;
  }

  a {
    color: #fff;
    cursor: pointer;
  }
`;

export default Sidebar;
