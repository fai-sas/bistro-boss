/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react'

// Profile Dropdown
const ProfileDropDown = (props) => {
  const [state, setState] = useState(false)
  const profileRef = useRef()

  const navigation = [
    { title: 'Dashboard', path: 'javascript:void(0)' },
    { title: 'Settings', path: 'javascript:void(0)' },
    { title: 'Log out', path: 'javascript:void(0)' },
  ]

  useEffect(() => {
    const handleDropDown = (e) => {
      if (!profileRef.current.contains(e.target)) setState(false)
    }
    document.addEventListener('click', handleDropDown)

    return () => {
      document.removeEventListener('click', handleDropDown)
    }
  }, [])

  return (
    <div className={`relative ${props.class}`}>
      <div className='flex items-center space-x-4'>
        <button
          ref={profileRef}
          className='w-10 h-10 rounded-full outline-none ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600'
          onClick={() => setState(!state)}
        >
          <img
            src='https://randomuser.me/api/portraits/men/46.jpg'
            className='w-full h-full rounded-full'
            alt='User Profile'
          />
        </button>
        <div className='lg:hidden'>
          <span className='block'>Micheal John</span>
          <span className='block text-sm text-gray-500'>john@gmail.com</span>
        </div>
      </div>
      <ul
        className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
          state ? '' : 'lg:hidden'
        }`}
      >
        {navigation.map((item, idx) => (
          <li key={idx}>
            <a
              className='block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5'
              href={item.path}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

const NavbarTest = () => {
  const [menuState, setMenuState] = useState(false)

  const navigation = [
    { title: 'Customers', path: 'javascript:void(0)' },
    { title: 'Careers', path: 'javascript:void(0)' },
    { title: 'Guides', path: 'javascript:void(0)' },
    { title: 'Partners', path: 'javascript:void(0)' },
  ]

  return (
    <nav className='bg-white border-b '>
      <div className='flex items-center max-w-screen-xl px-4 py-3 mx-auto space-x-8 md:px-8'>
        <div className='flex-none lg:flex-initial'>
          <a href='javascript:void(0)'>
            <img
              src='https://www.floatui.com/logo.svg'
              width={120}
              height={50}
              alt='Float UI logo'
            />
          </a>
        </div>
        <div className='flex items-center justify-between flex-1'>
          <div
            className={`bg-white absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
              menuState ? '' : 'hidden'
            }`}
          >
            <ul className='mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0'>
              {navigation.map((item, idx) => (
                <li key={idx} className='text-gray-600 hover:text-gray-900'>
                  <a href={item.path}>{item.title}</a>
                </li>
              ))}
            </ul>
            <ProfileDropDown class='mt-5 pt-5 border-t lg:hidden' />
          </div>
          <div className='flex items-center justify-end flex-1 space-x-2 sm:space-x-6'>
            <form className='flex items-center p-2 space-x-2 border rounded-md'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='flex-none w-5 h-5 text-gray-300'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
              <input
                className='w-full text-gray-500 placeholder-gray-500 outline-none appearance-none sm:w-auto'
                type='text'
                placeholder='Search'
              />
            </form>
            <ProfileDropDown class='hidden lg:block' />
            <button
              className='block text-gray-400 outline-none lg:hidden'
              onClick={() => setMenuState(!menuState)}
            >
              {menuState ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16m-7 6h7'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarTest
