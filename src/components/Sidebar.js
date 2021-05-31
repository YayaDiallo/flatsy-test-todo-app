import React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { links } from '../utils/constants';
import styled from 'styled-components';

const Sidebar = () => {
  let location = useLocation();
  let history = useHistory();

  // console.log(location);
  // console.log(history);

  // const isActive = location.pathname;
  // if (isActive) {
  //   console.log('is' + isActive);
  // }

  // console.log(isActive === false);

  return (
    <section className='sidebar'>
      <NavLinks>
        {links.map((link) => (
          <div key={link.id}>
            <li style={{ backgroundColor: `${link.bgColor}` }}>
              <NavLink exact to={link.url} activeClassName='active'>
                {link.icon}
              </NavLink>
            </li>
          </div>
        ))}
      </NavLinks>
    </section>
  );
};

const NavLinks = styled.ul`
  .active {
    color: #333;
  }

  div {
    width: 100%;
    height: 100%;
    padding: 18px;
    pointer-events: none;

    &:hover {
      background: #1f1f27;
    }
  }

  div > li > a {
    ${
      '' /* La propriété CSS pointer-events permet aux auteurs de contrôler les circonstances dans lesquelles un élément graphique peut être une cible, c'est-à-dire recevoir des événements de la souris, du pointeur ou du doigt */
    }
    pointer-events: auto;
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
