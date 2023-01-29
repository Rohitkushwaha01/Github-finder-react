import React from 'react'
import {FaGithub} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Navbar() {

  const title = "Github FinderApp"

  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral test-neutral-content text-white min-h-[6rem] sm:min-h-[4rem] '>
      <div className="container ms-auto flex-wrap justify-center">
        <div className="flex-none px-2 mx-2 my-2 ">
          <FaGithub className="inline pr-2 text-3xl text-amber-300" />
          <Link to="/" className='text-lg font-bold align-middle text-amber-300'>
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex sm:justify-end justify-center">
            <Link to="/" className='btn btn-ghost btn-sm rounded-btn hover:text-amber-300'>
              Home
            </Link>
            <Link to="/about" className='btn btn-ghost btn-sm rounded-btn hover:text-amber-300'>
              About
            </Link>
            <Link to="/contact" className='btn btn-ghost btn-sm rounded-btn hover:text-amber-300'>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}


Navbar.defaultProps = {
  title: "Github Finder",
}

Navbar.propTypes = {
  title: PropTypes.string,
}