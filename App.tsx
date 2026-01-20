import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import MasonryView from './components/MasonryView';
import EditorialView from './components/EditorialView';
import ShopGridView from './components/ShopGridView';
import ProductDetailView from './components/ProductDetailView';

// View types for the demo navigation
type ViewType = 'masonry' | 'editorial' | 'shop' | 'product';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('masonry');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // The Header is shared but slightly adapted per view style in real apps. 
  // For this demo, we'll use a master header that controls the view state.
  
  const isProductView = currentView === 'product';
  
  return (
    <div className={`min-h-screen flex flex-col ${isProductView ? 'font-display' : 'font-sans'}`}>
      
      {/* Top Navigation */}
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        isProductView 
          ? 'bg-background-light/80 border-slate-200' 
          : 'bg-white/90 border-[#f0f2f4]'
      }`}>
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentView('masonry')}>
            {!isProductView && (
              <div className={`size-8 flex items-center justify-center rounded-lg text-white ${isProductView ? 'bg-primary-green' : 'bg-primary'}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 21V8.5L12 3.5L19 8.5V21H5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 21V12H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
            <h2 className={`text-xl font-bold tracking-tight ${isProductView ? 'font-display text-2xl' : 'font-sans'}`}>
              Dane Design{isProductView ? '.' : ''}
            </h2>
          </div>

          {/* Desktop Nav - Acts as View Switcher for Demo */}
          <div className="hidden md:flex flex-1 justify-center gap-8">
            <button 
              onClick={() => setCurrentView('shop')}
              className={`text-sm font-medium transition-colors hover:text-primary ${currentView === 'shop' ? 'text-primary font-bold' : ''}`}
            >
              Shop
            </button>
            <button 
              onClick={() => setCurrentView('masonry')}
              className={`text-sm font-medium transition-colors hover:text-primary ${currentView === 'masonry' ? 'text-primary font-bold' : ''}`}
            >
              Explore
            </button>
            <button 
              onClick={() => setCurrentView('editorial')}
              className={`text-sm font-medium transition-colors hover:text-primary ${currentView === 'editorial' ? 'text-primary font-bold' : ''}`}
            >
              Stories
            </button>
             <button 
              onClick={() => setCurrentView('product')}
              className={`text-sm font-medium transition-colors hover:text-primary ${currentView === 'product' ? 'text-primary-green font-bold' : ''}`}
            >
              Product Demo
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className={`absolute top-1 right-1 size-2 rounded-full ${isProductView ? 'bg-primary-green' : 'bg-primary'}`}></span>
            </button>
            <button className="hidden sm:flex p-2 rounded-full hover:bg-gray-100 transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button 
              className="md:hidden p-2 rounded-full hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white p-4 flex flex-col gap-4">
             <button onClick={() => { setCurrentView('shop'); setMobileMenuOpen(false); }} className="text-left font-medium p-2 hover:bg-gray-50 rounded">Shop</button>
             <button onClick={() => { setCurrentView('masonry'); setMobileMenuOpen(false); }} className="text-left font-medium p-2 hover:bg-gray-50 rounded">Explore</button>
             <button onClick={() => { setCurrentView('editorial'); setMobileMenuOpen(false); }} className="text-left font-medium p-2 hover:bg-gray-50 rounded">Stories</button>
             <button onClick={() => { setCurrentView('product'); setMobileMenuOpen(false); }} className="text-left font-medium p-2 hover:bg-gray-50 rounded">Product Demo</button>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow w-full">
        {currentView === 'masonry' && <MasonryView />}
        {currentView === 'editorial' && <EditorialView />}
        {currentView === 'shop' && <ShopGridView />}
        {currentView === 'product' && <ProductDetailView />}
      </main>

    </div>
  );
}