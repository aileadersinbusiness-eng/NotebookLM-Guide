'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/lib/animations';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-700/30">
      <div className="container-custom py-16 md:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">NotebookLM Guide</h3>
            <p className="text-sm text-slate-400">
              Transform your business documents into actionable insights with NotebookLM.
            </p>
          </motion.div>

          {/* Product */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-semibold text-slate-50">Product</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="https://notebooklm.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-200 transition">
                  NotebookLM
                </a>
              </li>
              <li>
                <a href="#use-cases" className="hover:text-slate-200 transition">
                  Use Cases
                </a>
              </li>
              <li>
                <a href="#scanner" className="hover:text-slate-200 transition">
                  Get Started
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-semibold text-slate-50">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-slate-200 transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-200 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-200 transition">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-semibold text-slate-50">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-slate-200 transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-200 transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-200 transition">
                  Cookies
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="border-t border-slate-700/30 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>&copy; {currentYear} AI Leaders in Business. All rights reserved.</p>
            <p className="text-xs">Built with Next.js, Tailwind CSS, and Framer Motion</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
