import React from 'react';
import Dashboard from './dashboard/page';
import { NavLinks } from './ui/nav-links';
import './styles.css';
import ThemeToggle from './dashboard/components/ThemeToggle';
import { Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      <div className="header">
        <div className="brand flex items-baseline">
          <img src="./images/our.png" alt="Logo" />
          <Typography variant="h2">OUR KiTCHEN</Typography>by LATHIKA
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
