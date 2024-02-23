import React from 'react';

//import icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

//import house content
import { HouseContext } from './HouseContext';

//import menu
import { Menu } from '@headlessui/react';

const PriceRangeDropdown = () => {
  const { price, setPrice } = React.useContext(HouseContext);
  const [isOpen, setIsOpen] = React.useState(false);

  const priceRange = [
    {
      value: '10000 - 30000'
    },
    {
      value: '30000 - 40000'
    },
    {
      value: '100000 - 130000'
    },
    {
      value: '130000 - 160000'
    },
    {
      value: '160000 - 190000'
    },
    {
      value: '190000 - 220000'
    }
  ]

  return (
    <Menu as="div" className="relative dropdown fack">
      <Menu.Button onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left' >
        <RiMapPinLine className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px]'>Select price range</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items as="ul" className="dropdown-menu">
        {priceRange.map((price, index) => {
          return (
            <Menu.Item as='li' key={index}
              onClick={() => setPrice(price.value)}
              className="hover:text-violet-700 transition cursor-pointer">
              {price.value}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu >
  )
};

export default PriceRangeDropdown;
