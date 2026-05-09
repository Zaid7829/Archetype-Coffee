"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Coffee, Leaf, Zap, Sparkles, Filter } from 'lucide-react';
import { menu } from '@/lib/menu-data';

const MenuSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => ['All', ...menu.map(c => c.category)], []);

  const filteredMenu = useMemo(() => {
    let result = menu;
    
    if (activeCategory !== 'All') {
      result = result.filter(c => c.category === activeCategory);
    }

    if (searchTerm) {
      result = result.map(cat => ({
        ...cat,
        items: cat.items.filter(item => 
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
          item.description?.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(cat => cat.items.length > 0);
    }

    return result;
  }, [activeCategory, searchTerm]);

  return (
    <section id="menu" className="py-24 bg-espresso relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl text-cream mb-4 font-serif">
              The <span className="text-copper italic">Menu</span>
            </h2>
            <p className="text-cream/50 max-w-xl mx-auto">
              Explore our meticulously crafted selection of specialty coffee, ceremonial matcha, and signature alchemies.
            </p>
          </motion.div>
        </div>

        {/* Search and Filter Tabs */}
        <div className="flex flex-col space-y-8 mb-16">
          <div className="relative max-w-2xl mx-auto w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-copper/50" size={20} aria-hidden="true" />
            <input
              type="text"
              placeholder="Search our collection..."
              aria-label="Search menu items"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-espresso-light border border-copper/20 rounded-full py-4 pl-12 pr-6 text-cream focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all placeholder:text-cream/20"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4" role="tablist" aria-label="Menu categories">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                aria-label={`Show ${cat} items`}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-all border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper ${
                  activeCategory === cat
                    ? 'bg-copper border-copper text-espresso'
                    : 'bg-transparent border-copper/20 text-cream/60 hover:border-copper/50 hover:text-cream'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results Live Region */}
        <div className="sr-only" aria-live="polite">
          {searchTerm ? `Found ${filteredMenu.reduce((acc, cat) => acc + cat.items.length, 0)} results for ${searchTerm}` : ""}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((cat, catIndex) => (
              <motion.div
                key={cat.category}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: catIndex * 0.05 }}
                className="glass-card p-8 flex flex-col h-full border-t-4 border-t-copper"
              >
                <div className="flex items-center space-x-3 mb-8">
                  {cat.category.includes('Coffee') && <Coffee className="text-copper" size={24} />}
                  {cat.category.includes('Matcha') && <Leaf className="text-matcha" size={24} />}
                  {cat.category.includes('Cold Brew') && <Zap className="text-copper-gold" size={24} />}
                  {cat.category.includes('Signature') && <Sparkles className="text-raspberry" size={24} />}
                  {!['Coffee', 'Matcha', 'Cold Brew', 'Signature'].some(s => cat.category.includes(s)) && <Filter className="text-cream/30" size={24} />}
                  
                  <h3 className="text-xl font-serif font-bold text-cream uppercase tracking-wider">
                    {cat.category}
                  </h3>
                </div>

                <div className="space-y-6 flex-grow">
                  {cat.items.map((item, itemIndex) => (
                    <motion.div 
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: itemIndex * 0.05 }}
                      className="group"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-cream group-hover:text-copper transition-colors font-medium">
                          {item.name}
                        </span>
                        {item.price && (
                          <span className="text-copper font-bold ml-4 whitespace-nowrap">
                            {item.price}
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-cream/40 text-xs italic leading-relaxed">
                          {item.description}
                        </p>
                      )}
                      <div className="w-0 group-hover:w-full h-[1px] bg-copper/20 transition-all duration-500 mt-2"></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredMenu.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-cream/30 text-xl font-serif italic">No matches found for your selection.</p>
            <button
              onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
              className="mt-6 text-copper border-b border-copper/30 pb-1 uppercase text-xs tracking-widest font-bold hover:text-cream hover:border-cream transition-all"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 p-12 pointer-events-none opacity-[0.03]">
        <Coffee size={400} />
      </div>
    </section>
  );
};

export default MenuSection;
