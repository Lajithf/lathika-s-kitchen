'use client';
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <MdLightMode className="text-yellow-500 text-2xl" />
      ) : (
        <MdDarkMode className="text-gray-700 text-2xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
