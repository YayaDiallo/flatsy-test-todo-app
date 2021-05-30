import React from 'react';
import { FiUser } from 'react-icons/fi';
import { IoSchoolOutline } from 'react-icons/io5';
import { BiBuildings } from 'react-icons/bi';

export const links = [
  {
    id: 1,
    text: 'school',
    icon: <IoSchoolOutline />,
    url: '/school',
    bgColor: '#FC6B97',
  },
  {
    id: 2,
    text: 'user',
    icon: <FiUser />,
    url: '/user',
    bgColor: '#65BCB7',
  },
  {
    id: 3,
    text: 'home',
    icon: <BiBuildings />,
    url: '/',
    bgColor: '#A45DE2',
  },
];
