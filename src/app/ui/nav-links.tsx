'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './styles.css';
import { useEffect, useState } from 'react';

export function NavLinks() {
  const [activeSection, setActiveSection] = useState<string>(''); // Track the currently active section

  useEffect(() => {
    // Initialize the IntersectionObserver to detect which section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Set active section when it enters the viewport
          }
        });
      },
      { threshold: 0.5 }
    ); // Trigger when at least 50% of the section is in view

    // Observe each section
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup the observer on unmount
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Helper function to determine the active class for each link
  const getLinkClass = (sectionId: string) => {
    console.log({ activeSection });
    return activeSection === sectionId ? 'link active' : 'link';
  };

  // Scroll to top when the "Home" link is clicked
  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default anchor link behavior
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
  };

  return (
    <nav className="nav-links">
      <Link className={getLinkClass('home')} href="/" onClick={handleHomeClick}>
        Home
      </Link>

      <Link className={getLinkClass('about')} href="/#about">
        About Us
      </Link>
      <Link className={getLinkClass('menu')} href="/#menu">
        Menu
      </Link>
      <Link className={getLinkClass('contact-us')} href="/#contact-us">
        Contact Us
      </Link>
    </nav>
  );
}
