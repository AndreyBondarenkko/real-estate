import React from 'react';

//import icons
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

//import house content
import { HouseContext } from './HouseContext';

//import menu
import { Menu } from '@headlessui/react';

const PropertyDropdown = () => {
  const { property, setProperty, properties } = React.useContext(HouseContext);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Menu as="div" className="relative dropdown fack">
      <Menu.Button onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left' >
        <RiHome5Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{property}</div>
          <div className='text-[13px]'>Select your property</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items as="ul" className="dropdown-menu">
        {properties.map((property, index) => {
          return (
            <Menu.Item as='li' key={index}
              onClick={() => setProperty(property)}
              className="hover:text-violet-700 transition cursor-pointer">
              {property}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu >
  )
};

export default PropertyDropdown;
