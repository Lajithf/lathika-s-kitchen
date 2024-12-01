import React from 'react';
import Dashboard from './dashboard/page';
import { NavLinks } from './ui/nav-links';
import './styles.css';
import ThemeToggle from './dashboard/components/ThemeToggle';
import { Typography } from '@mui/material';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'], // Load Latin subset (customize as needed)
  weight: ['400', '700'], // Specify font weights
});
export default function Home() {
  return (
    <>
      <div className="header top-0 left-0 fixed z-10 w-full">
        <div className="brand flex items-baseline">
          <img src="./images/our.png" alt="Logo" />
          <Typography
            variant="h2"
            className={'hidden sm:block'}
            style={montserrat.style}
          >
            OUR KiTCHEN
          </Typography>
          by LATHIKA
        </div>
        <div className="flex">
          <NavLinks />
          <ThemeToggle />
        </div>
      </div>

      <Dashboard />
    </>
  );
}
