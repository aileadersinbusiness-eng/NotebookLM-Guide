'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div
            className="text-xl md:text-2xl font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
          >
            NotebookLM
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#guide"
              className="text-slate-300 hover:text-slate-50 transition-colors text-sm"
            >
              Guide
            </a>
            <a
              href="#use-cases"
              className="text-slate-300 hover:text-slate-50 transition-colors text-sm"
            >
              Use Cases
            </a>
            <a
              href="#calculator"
              className="text-slate-300 hover:text-slate-50 transition-colors text-sm"
            >
              ROI
            </a>
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/80 backdrop-blur-lg border-t border-slate-700/30 py-4 space-y-4"
          >
            <a href="#guide" className="block text-slate-300 hover:text-slate-50 px-4 py-2">
              Guide
            </a>
            <a href="#use-cases" className="block text-slate-300 hover:text-slate-50 px-4 py-2">
              Use Cases
            </a>
            <a href="#calculator" className="block text-slate-300 hover:text-slate-50 px-4 py-2">
              ROI
            </a>
            <div className="px-4">
              <Button variant="default" className="w-full">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
