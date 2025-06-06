import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLinks = () => {
  const links = [
    { name: 'Find Job', url: 'find-job' },
    { name: 'Find Talent', url: 'find-talent' },
    { name: 'Post Job', url: 'post-job/0' },
    { name: 'Posted Job', url: 'posted-job/0'}, 
    { name: 'Job History', url: 'job-history'},
    { name: 'About us', url: 'about-us' },
  ];
  const location = useLocation();
  return (
    <div className='flex gap-5 llg-mx:hidden items-center h-full text-mine-shaft-400'>
      {links.map((link, index) => (
        <div
          key={index}
          className={`${
            location.pathname === '/' + link.url
              ? 'border-bright-sun-400 text-bright-sun-400'
              : 'border-transparent '
          } border-t-[3px] h-full flex items-center px-2`}
        >
          <Link to={link.url}>{link.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;