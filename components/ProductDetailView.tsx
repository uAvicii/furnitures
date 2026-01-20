import React, { useState } from 'react';
import { Star, Truck, ShieldCheck, ChevronDown, ShoppingCart, Store } from 'lucide-react';

const thumbnails = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBs8CGxxqZDHR13Hpla0M1-4fV1m0Z5t5x6tabLCQD1_RxsE68prbAlO_QMCTiGSODFdQ_Er1X3gvcoAsbcIgJUbPT_LJKFA7sURd_RrLuRcjVjJNNUacNMkX55xzzfgIZBjtY0yeI5rpk2AK3HyaHOVoxVP3QNSi8ZGHZX0vzyz-FIJP6KmEDs0YRLXIUWf9i3ZSY77obS--OooKXfw4qYJH8YdvuWjvpJ8gdNTOv4K_NCCjJ3Vp6uAgwlCHzkSl3zesj9vBt5u2A",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBrpysMXRt-sXhRnLAUghlvrwOqLWgoDLCLZg_TOh54WlzzOOm8wLL7RGeCjFgm88dqP58aTBIogF3WpXZb_wrortQMVghykGlp2e15nf5pWZ8tFDz6rBnNTzTMH2SklnTChe6hiiyhlku_iX_bConQg21p9z0H_MKjy1SMna4dg-EP2AD6WQDpWIxkmeDRr1jm4wbNd75uEzfkvI8sWQx-O5_s7MVcgquWLtamFcVWlB4JJ2FQ7dmvZvFGR3i_4IN-olklnHaguQc",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAzrSvBN9g7TW8pcB1NyBitexLGbeLUVt56m4SOOu2L6eju-6kVnzNScvXVaNH8ap7D-FI1WI8VzQkm9ktDkqjh_wrBaxW7CD326G_AhGOPlnpWl0BXfnuwDPKEOB4e-24e-s-uPwwYLjonpTUm0wG6KltQKhu5o62LaA1teNvFR8j0CFnOTD0P2_pQsbtnD9wEDTnmEtcBI_Il9B71qZu8PWKIjytCVolRjxHI-_RvDzS_-mpDPr_iUAcQW-arbSYhDyKI0P8azLM",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAJkCipDy4BlrADpNNW67GjfhpQDCrxtUb_2ii2XQMP5SqCH7asPg3Uc3Q9blKczIWWcb8CsEtC1L2V5FkEunNcZFtu0Y5xIQgSsvKxcz8Pn9mow_1fAaesBX0J2pAGGXnqeRWk2A0XUS8Liha1TAiqoBM1K7U0MuR0dz3-pTDF-xfD5aU1jyuUI8RymeoZ-YmEaZ05YHKV8ZnoaojggbYAhjvVYDWou1yfd2aouNde_GA8tsWCe5_J0tVp5WpEIrfhOc19r6cA5Xk"
];

const communityImages = [
  { user: "@nordic_simplicity", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIV3aEaeow4nKEr9NB_SRIcQk7pZu9ut4PGbnAr2u8jX_6CSMa5fzE90mP32uYR4N28WWaqVQLn8ICqTFXvLTHL8KVgB6_1MbKXCtZwpD0M9aNO9stdpmGnZKBYsW57ifv53d-CvREkXUN-1l2CM9CSjmRP3AI_cMnNLjZX8eYjWU3N7NxHd_v2VXCrsWxAO8nbpHyl4TL0OwAfwhyMGY_a0Xh8DFs7xqDE0jpUixa7gmuVfypEc6igLRejsXquRKOfUPPfj2hpN8" },
  { user: "@urban_loft_living", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYVjUiqw8XdjUHkS872eVco71cHbFH8kCVrtRD6s8vpKe2eHtlk857F6Cw-uAaaH0ex_5148eA5X5V-pVQccVSE58iIPsTp2ILTyo_BYDhEB14duRKRGGrGiQGf20JLFZeNrAo12hP4jYaxxwvV93B_LEnH6QC97g2k8hf4hGLtxWkCqQTZ1L9pe7nVLJZ4jfabBSuDzyKjEZtuC3no20tIa9dN0qIPFGAOtj78kt030tOKbTQVYU5Jb4xqsZci6WSLfZLWhhdZnE" },
  { user: "@design_daily", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDff4Gd19l19JOZInTvBgTC4T4ZKNmclZcoEOx4PLDpR3m5o-iZabGg7SgbM9EFXK4q2ZZvWUtIlRjsCzjdayyMKgYQuF-lDJBvC3sInPcGI9mBd1nUoqj10vUkoFOCZl-j6k3FHG1wM7IW8GplOdvuQYpQ9O4FnYFlY2ASND-fr9nKPBvW-490LrJisDKZB1L7n89W0LGwUQH46xvbgVemeMFoIUUkQI4kZEwmOQ0wdhPEkdQlHcv0IjoacIUlTn0NJ9vlWoE3ug" }
];

export default function ProductDetailView() {
  const [selectedWood, setSelectedWood] = useState('teak');
  const [selectedFabric, setSelectedFabric] = useState('wool');

  return (
    <div className="font-display text-slate-800 antialiased">
      <main className="pt-8 pb-16 lg:pt-12 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
            
            {/* Left Column: Image Gallery */}
            <div className="product-gallery flex flex-col gap-4">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 relative group">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyRS7Q3aPXZvjjoNxEAslf-WT1aAy04LbmvvQOlzCp-JrekoloLB2jSA5W7K37_NJ6NUFksiDK1kFQshCVWn4Q2c67NFzfbLdeb8GdB0wOZKlkRJ1MJHJ7dUhN8CRy4PmBYbPxBg0x2yvjjvXe9CLc30-v_n98eSy2V2kryHzrov8wwvbQjOz5ovWxJN-uGGCG3om8ObxSMULZXoFblAucLqpnNuP0CFvJlFZHsqlpCILwitPKgr3bN09W9stVdljOqWYKuAAqRIs" 
                  alt="Main Chair" 
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-primary-green backdrop-blur-sm border border-primary-green/20">
                    Best Seller
                  </span>
                </div>
              </div>
              
              <div className="flex space-x-4 overflow-x-auto scrollbar-hide py-2">
                {thumbnails.map((src, i) => (
                  <button key={i} className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg hover:ring-2 hover:ring-primary-green hover:ring-offset-2 transition-all">
                    <img src={src} alt={`Thumbnail ${i}`} className="h-full w-full object-cover object-center" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Product Info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 lg:sticky lg:top-24 h-fit">
              <div className="mb-6">
                <h1 className="text-4xl font-normal tracking-tight text-slate-900 sm:text-5xl mb-2 font-display">
                  The Hans Wegner Style Lounge Chair
                </h1>
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-light text-slate-900 font-sans">$1,250</p>
                  <div className="flex items-center">
                    <div className="flex items-center text-primary-green">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="ml-2 text-sm text-slate-500 font-sans">4.8 (124 reviews)</p>
                  </div>
                </div>
              </div>

              <div className="prose mb-8 text-lg leading-relaxed text-slate-600 font-sans">
                <p>
                  First designed in 1952, this iconic piece represents the pinnacle of Danish Modern design. Its wide, wing-like seat and curved backrest offer unparalleled comfort while maintaining a sculptural silhouette that anchors any room.
                </p>
              </div>

              {/* Config Form */}
              <div className="space-y-8 border-t border-slate-200 pt-8 font-sans">
                {/* Wood */}
                <div>
                  <h3 className="text-lg font-medium text-slate-900 mb-4">Wood Finish</h3>
                  <div className="flex items-center space-x-4">
                    {[
                      { id: 'oak', color: '#dccbb6', name: 'Oak' },
                      { id: 'teak', color: '#a87b51', name: 'Teak' },
                      { id: 'walnut', color: '#5d4037', name: 'Walnut' }
                    ].map((wood) => (
                      <label key={wood.id} className="group relative flex cursor-pointer flex-col items-center">
                        <input 
                          type="radio" 
                          name="wood" 
                          value={wood.id} 
                          checked={selectedWood === wood.id}
                          onChange={() => setSelectedWood(wood.id)}
                          className="sr-only"
                        />
                        <span 
                          className={`h-12 w-12 rounded-full border-2 transition-all ${selectedWood === wood.id ? 'border-primary-green ring-2 ring-primary-green ring-offset-2' : 'border-transparent'}`} 
                          style={{ backgroundColor: wood.color }}
                        ></span>
                        <span className={`mt-2 text-sm font-medium ${selectedWood === wood.id ? 'text-primary-green' : 'text-slate-500'}`}>{wood.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Fabric */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-slate-900">Upholstery</h3>
                    <a href="#" className="text-sm text-primary-green hover:underline underline-offset-4">Order swatches</a>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {['Wool Blend', 'Velvet', 'Aniline Leather'].map((fab) => {
                       const id = fab.toLowerCase().split(' ')[0];
                       return (
                        <label key={fab} className="cursor-pointer">
                          <input 
                            type="radio" 
                            name="fabric" 
                            value={id}
                            checked={selectedFabric === id}
                            onChange={() => setSelectedFabric(id)}
                            className="sr-only" 
                          />
                          <div className={`rounded-lg border p-3 text-center transition-all ${selectedFabric === id ? 'border-primary-green bg-primary-green/5 text-primary-green ring-1 ring-primary-green' : 'border-slate-200 hover:bg-slate-50'}`}>
                            <span className="block text-sm font-medium">{fab}</span>
                          </div>
                        </label>
                       )
                    })}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="flex-1 bg-primary-green text-white hover:bg-green-600 px-8 py-4 text-lg rounded-lg font-medium shadow-sm flex justify-center items-center gap-2 transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                  <button className="flex-1 bg-transparent border border-slate-300 text-slate-900 hover:bg-slate-50 px-8 py-4 text-lg rounded-lg font-medium flex justify-center items-center gap-2 transition-colors">
                    <Store className="w-5 h-5" />
                    Book Viewing
                  </button>
                </div>

                <div className="flex items-center justify-center gap-6 text-sm text-slate-500 pt-2">
                  <div className="flex items-center gap-1">
                    <Truck className="w-4 h-4 text-primary-green" />
                    <span>Free shipping</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-primary-green" />
                    <span>5-year warranty</span>
                  </div>
                </div>
              </div>

              {/* Accordions */}
              <div className="mt-12 space-y-4 font-sans border-t border-slate-200 pt-4">
                <details className="group border-b border-slate-200 pb-4">
                  <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-slate-900">
                    Dimensions
                    <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="mt-4 text-slate-500 grid grid-cols-2 gap-4 text-base">
                     <div><span className="block text-slate-900 font-medium">Height</span>74 cm / 29.1 in</div>
                     <div><span className="block text-slate-900 font-medium">Width</span>71 cm / 28.0 in</div>
                     <div><span className="block text-slate-900 font-medium">Depth</span>73 cm / 28.7 in</div>
                     <div><span className="block text-slate-900 font-medium">Seat Height</span>39 cm / 15.4 in</div>
                  </div>
                </details>
                <details className="group border-b border-slate-200 pb-4">
                  <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-slate-900">
                    Materials & Care
                    <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="mt-4 text-slate-500 text-base leading-relaxed">
                    Frame crafted from solid FSC-certified wood. Upholstered in premium fabric with high-resilience foam cushioning. Dust regularly.
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Styled by Community */}
      <section className="bg-white py-16 lg:py-24 border-t border-slate-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-slate-900 mb-4 font-display">Styled by Our Community</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">See how others have integrated the Lounge Chair into their homes. Tag us @DaneDesign to be featured.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityImages.map((item, i) => (
              <div key={i} className={`group relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-100 ${i === 2 ? 'hidden lg:block' : ''}`}>
                <img src={item.img} alt={`Community style ${i}`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <p className="font-medium">{item.user}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-transparent px-8 py-3 text-base font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition-colors">
              Load More Inspiration
            </button>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-background-light border-t border-slate-200 py-12 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">© 2024 Dane Design. All rights reserved.</p>
          <div className="flex space-x-6 text-sm text-slate-400">
            <a href="#" className="hover:text-primary-green">Terms</a>
            <a href="#" className="hover:text-primary-green">Privacy</a>
            <a href="#" className="hover:text-primary-green">Shipping</a>
          </div>
        </div>
      </footer>
    </div>
  );
}