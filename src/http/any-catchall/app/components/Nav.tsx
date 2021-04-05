import React from 'react';
import { Link } from 'react-router-dom';
export default function Nav() {
  return (
    <nav className='container mx-auto flex justify-between p-0'>
      <div>
        <Link to='/'>Logo</Link>
      </div>
      <ul className='flex flex-row uppercase text-white'>
        <li className='my-0 mx-4 pr-5'>
          <Link to='/cnc'>Chief & Council</Link>
        </li>
        <li className='my-0 mx-4 pr-5'>
          <Link to='/departments'>Departments</Link>
        </li>
        <li className='my-0 mx-4 pr-5'>
          <Link to='/jobs'>Jobs</Link>
        </li>
        <li className='my-0 mx-4 pr-5'>
          <Link to='/business'>Businesses</Link>
        </li>
        <li className='my-0 mx-4 pr-5'>
          <Link to='/contact'>Contact Us</Link>
        </li>
        <li className='my-0 mx-4 pr-5'>
          <Link to='/about'>About Us</Link>
        </li>
      </ul>
    </nav>
  );
}
