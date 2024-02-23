import React from 'react';

//import icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

//import house content
import { HouseContext } from './HouseContext';

//import menu
import { Menu } from '@headlessui/react';

const CountryDropdown = () => {
  const { country, setCountry, countries } = React.useContext(HouseContext);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Menu as="div" className="relative dropdown fack">
      <Menu.Button onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left' >
        <RiMapPinLine className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{country}</div>
          <div className='text-[13px]'>Select your country</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items as="ul" className="dropdown-menu">
        {countries.map((country, index) => {
          return (
            <Menu.Item as='li' key={index}
              onClick={() => setCountry(country)}
              className="hover:text-violet-700 transition cursor-pointer">
              {country}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu >
  )
};

export default CountryDropdown;
