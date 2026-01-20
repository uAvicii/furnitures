import React from 'react';
import { ArrowRight, ArrowLeft, PlusCircle } from 'lucide-react';

const curatedItems = [
  {
    title: "Living Room",
    subtitle: "Sofas, Lounge Chairs, & Coffee Tables",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuuACCE9nVpEHOKSuXuBRB8kuCyCII-6jd_q15aFjVBlbucoarZ7DykDOYydW7WF1oeGFqnfX4ymz4vtIlfpnx3j9wfs7QvkC2f0eo_5XXU19vuSVWaiLg7QG5L_LDwd9TLH8p-vIXeqGbjq4WSqaSsMPCXOf-R_JzXZ9OitwVC1u4KNs38Ff10yUDYoxziJVZiV2KtEo0qnksLBEeS6WCZDG6PubK_8vj7FV1LKjcjObcYj2evGqj5kczfp76vutaTVMZijIhOcQ",
    colSpan: "md:col-span-2"
  },
  {
    title: "Lighting",
    subtitle: "Pendants, Floor & Table Lamps",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjPBgjMpiqaPEttVn87nRoNQK9jsn0KuxauJS9rzA8B2wgRjq7G5UrBOeuE73AnftOrrl4aZNSwqQlM-NW7HcdR1p_6gQl0k679M9VtaMyHwqXw10Sen0OdK0twgK0-ee9saKqTPUKCZoq6KsEmopSk2QLb0_rI9QObl7yoRo5ZIf8Bq8jlofb7rZfT5aqZcZAwNOhabcRVBLbMF8ItaiLQhkzttO3I7Qh1YU9AxUIq2RxJiwbF5sSIvWFt0cMio5RDR71xNb0SOU",
    colSpan: "md:col-span-1"
  },
  {
    title: "Storage",
    subtitle: "Sideboards, Shelving & Cabinets",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD68vzGHllZTWLF26g0koyjfHB1ilp8hlmMQLN9WUB8X5xKR-B_3CDDJ6E5P1UcFB0vcHE8HXNAbGyZu09rv9Olbq0YZgKsym4tdqEMp5sKGJWqjk0WlBDJ0cMCpAyjI-jcNqcg3P_y0mGsHbm3FhVgfVDsk4WoopzeP6AtpNK7dSWErmmUW5MG8d89aAmF1tMjLOWlLd4JuXAYZFwR5VWrHVDPRLuvK89ptJNEXBj7HVHqlWKZzDBSMoKuFh42PRXisUerpbj87Yg",
    colSpan: "md:col-span-1"
  },
  {
    title: "Bedroom",
    subtitle: "Beds, Nightstands & Dressers",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaqkr-qTFU2mqSELyhyD9Yghe_LeCb4DGJmGm4RVvuRyl0XqoMbS-YRDgeGC-5NpPobhXdjUL-P-gs81t4nO9MBGlIi8R4qwdc-lPxbzf7LGk4G4wyb-cAsFaZChJu6lZGQ9VESdf6ffXRTLOFwdh4t0M5gzwWvurptcpLRuWrPQtnwaUe3PFJDEV45U9oNnePUg_sWX6ngjPFsaS_sHmuCpQuLkPqYpMvaOOMCCt2E8V6aZrtoYStipJPdOONCUOFs8eVX3OHgoM",
    colSpan: "md:col-span-2"
  }
];

const newArrivals = [
  { name: "Wishbone Chair", designer: "Hans J. Wegner", price: "$895.00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVXT_OruG9sgKmjqjkwcXYcucBnOhlH4tDOMsLQ-kfLwH3gZhJHfle0HFfZxmcEwqr6slQz_jbXXCGU_Kx418mFZdY9icZ-wKtAx3ozxL20hjkWytw7iKB2je-R6oObo9BNkxshVfkRsbvjTlVIJ7UsydWXHwQgDwg0Vb-PbH3jCknytXfi-EksSNFdZhfBnGnDbHLxmHmuP5K4-xXon69Gos0qtKhVC0ZBbF6b47lu1bW4tSg0Nq_8C0yFhSSeTD4iY8D8KS3zQo", tag: "New", tagColor: "bg-white text-black" },
  { name: "The Egg Chair", designer: "Arne Jacobsen", price: "$7,200.00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCO16xzp0giz2pAygwMmRrkYtHW0VPam4BXfCeDkSHTJ_yiX2bcvCgcpU4Fzk5n1KDMuxP7b82ks05lA-jQ-xP1N9Rn4I5153EcZLUNeptnh0SvMViUjgf_HxfLzXgPeW9at4_s24438CXV0slck_kBYMCFS0KvsZXJZtf2lZxrj_ZF8TK3k3c8Sz-y7XmtESEfa7ETO-84uLADZcdZuWqxVTQBMxRx_T_90_0DWaLy7CnajvCWdMFGoga3vZLhE_2vnYPBbQ30TnU" },
  { name: "Noguchi Table", designer: "Isamu Noguchi", price: "$2,150.00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxChUplPXwLPYEyf4JurnTt0XrH7ta0Asl144Epl3OQpgHlIqbra4KUvxv37V226jHXWZiI-gJOtEj7pV2g6DRn77IoGTV5W-RyNmJqxeMERatEXQfqX30MtdXiz8tTax9b9p1FaIi9B8hESJAgHdNYkCmva8uzZCW34dS8Mv_UnCAEdjOuL-5qgVWNHqzLn-CSlsicMPzl0OdX7eMjxBpVqh-d2LgkghIUDu_ahl6kLWFi3RWwHpz_7bjohv0jefYXjFt0gScB1c" },
  { name: "Arco Floor Lamp", designer: "Castiglioni Brothers", price: "$2,850.00", oldPrice: "$3,200.00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5VNKglvgalsngrQEjKKYbQ408xzQtENiQaeULt7L90pSl4T2x-aM4PFxkQpHM7TIU0euIdJOUTJHmP7BvT1-4bsimeb-V3wsgVmgEpoqmskcUHnX-_9EGoe3MSFeZfOlku3U8h8VjjP7TuDhJEgiQnk9ISlHxPsw4at8XaAOaEa09-J30w6quBgQAzUV8I11KjtZCBFQmjV5AYuRs-S40_63KoImocqeJji5ob4Yp3rwET0HcVJdqgzOh4iFJ8jGKqFomHZ_jIfE", tag: "Sale", tagColor: "bg-red-500 text-white" },
];

export default function EditorialView() {
  return (
    <div className="w-full">
      
      {/* Editorial Hero */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1 h-[400px] lg:h-[600px] w-full rounded-xl overflow-hidden shadow-xl group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBI-ObMtcqIlcpiH0Zx0ArtqXQ-Zwrcw55YnslbowX-i9xtRi8dG2wL-XTVqmUuIoP4EZIatyp1RhGnrb2ZBut1WHbSf_b5hfyvdaXdQzAyMyKB39jTm9ppvTymk250UOUoQJ8jm87goD6w7RVFEpFtLYmed39K3mvUcUZbiJMMMhEimArWmPEJTSAFAJiT0fHS-We6So8A0HQ_MhCIOr3GCdls3amwxHxB8kzww5nW6Ov8bjvH0ZO25ZC7sT0qFj5unzohkH9iNGY')` }}
            ></div>
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
          <div className="flex flex-col gap-8 order-1 lg:order-2 lg:pl-10">
            <div className="flex flex-col gap-4">
              <span className="text-primary font-bold uppercase tracking-wider text-xs">Spotlight</span>
              <h1 className="font-serif text-5xl lg:text-7xl font-medium leading-[1.1] text-text-main">
                Finn Juhl: The Organic Curve
              </h1>
              <p className="text-lg text-gray-600 max-w-md leading-relaxed">
                A journey into the mind of the father of Danish Design. Discover how he revolutionized seating by separating the load-bearing elements from the carried.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold transition-colors">
                Explore Collection
              </button>
              <button className="group flex items-center gap-2 px-6 py-4 font-semibold text-text-main hover:text-primary transition-colors">
                Read Story
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Spaces Grid */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <div className="flex justify-between items-end mb-10 px-2">
          <h2 className="font-serif text-3xl md:text-4xl text-text-main">Curated Spaces</h2>
          <a href="#" className="hidden sm:block text-sm font-bold text-primary hover:text-blue-700 transition-colors">View All Categories</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {curatedItems.map((item, idx) => (
            <div key={idx} className={`${item.colSpan} relative group overflow-hidden rounded-xl cursor-pointer`}>
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: `url('${item.img}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="font-serif text-3xl text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm font-medium">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fresh In Scroll */}
      <section className="w-full bg-white py-20 border-y border-[#f0f2f4]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-between items-center mb-10">
            <div>
              <span className="text-primary font-bold uppercase tracking-wider text-xs block mb-2">Fresh In</span>
              <h2 className="font-serif text-3xl md:text-4xl text-text-main">Just Arrived</h2>
            </div>
            <div className="flex gap-2">
              <button className="size-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button className="size-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide snap-x snap-mandatory">
            {newArrivals.map((item, idx) => (
              <div key={idx} className="min-w-[280px] md:min-w-[320px] snap-start group cursor-pointer">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-100 relative mb-4">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${item.img}')` }}
                  ></div>
                  {item.tag && (
                    <div className={`absolute top-3 right-3 ${item.tagColor} px-2 py-1 text-xs font-bold rounded uppercase tracking-wide`}>
                      {item.tag}
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-text-main group-hover:text-primary transition-colors">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{item.designer}</p>
                <p className="text-base font-semibold text-text-main">
                  {item.oldPrice && <span className="line-through text-gray-400 mr-2">{item.oldPrice}</span>}
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop the Room */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-24">
        <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm">
          <div className="flex flex-col lg:flex-row h-full">
            <div className="w-full lg:w-2/3 relative min-h-[400px] lg:min-h-[600px]">
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC0eG5DOOkImnf4dKlN9o38jMigOHrrBNgr8KwBM42rw3VeFSzg7Rbz9Fs7rsMKKjYNpznLN0UiN39x0-w1PXPtFFwZ352XJ4qpSGul02D-lwinpeyjNFHbwL-v2QsSWpNaK2zUQh_0HM6iL6VlP5e436RDGkIiH6XvF-Z4jwc7hS7DFZkPG3y2wnfrLG6uo6CSjPju9VjeCt-fTpL9aZy4aMpnxYyIM_HTz3UCuTf01N7a-HYp9ngtrpdRwRcUvkqCkHx1tkxcIK0')` }}
              ></div>
              {/* Interactive Dots */}
              <div className="absolute top-[60%] left-[30%] group cursor-pointer">
                <div className="size-4 bg-white rounded-full shadow-lg relative z-10 animate-pulse group-hover:animate-none group-hover:scale-125 transition-transform"></div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white px-3 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs font-bold pointer-events-none">
                  The Spanish Chair
                </div>
              </div>
              <div className="absolute top-[45%] right-[25%] group cursor-pointer">
                <div className="size-4 bg-white rounded-full shadow-lg relative z-10 animate-pulse group-hover:animate-none group-hover:scale-125 transition-transform"></div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white px-3 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs font-bold pointer-events-none">
                   PH 5 Pendant
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 p-8 lg:p-12 flex flex-col justify-center bg-white lg:bg-transparent">
              <h2 className="font-serif text-3xl font-medium text-text-main mb-6">Shop the Look: <br/>The Copenhagen Loft</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                 Warm woods meet cool metals in this curated living space. Recreate the airy, functional elegance of a classic Danish apartment.
              </p>
              <div className="flex flex-col gap-6">
                {[
                  { name: "Kastrup Sofa", price: "$2,499.00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6xu-rCfh9kltdkD041RArVKMfvmy1da86FK2xTil7ierLegdYc6xnUclKJ5PkbW0SpF_YOnggbDaS_qva6T-3MdJb6APk6S1dZit5cbPQCFd6eyVN_oORUyIyQYvJttWrr0-NWcJjLqB4mu58rilBNGZ88mR-zGOHEV5k6HNVjHgGWlHEphklVSbRYmGcFdL5CSpjSyz88dmpCNVVFlVQCkYQnlAVgLvpmEOGJjG4GPNb3SoA-wEB6DB8ZGfGQm-gjC1SXrbZnDg" },
                  { name: "Aarhus Table", price: "$850.00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9bg6-zEA0jW2Fh7DnwkdLQcb6dPlo0B53IUyh4j3nAoBVh05hOLViG8oQmX-LcFJ9Nal8VCyby3IAxYtOO5uspmKuPP3MCmFG6mkpUZDP5i7xXorAz3oWHfRGz0iP-aPx4_2Op-ZQ-vU9CnsLl9RzS9ZZqeKJFfTZm4gZBGnZ6DlAHIHhHxqyNjP2xL-V3IM5wKocSyVrlJSB1Ml-33ODlHHD_04F7tldxrvpwzBuSpPanIh-yTztuhOWWgeCy5oA7fFhszd4_WQ" },
                  { name: "Textured Wool Rug", price: "$450.00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiPqUlxgP5aDJaBQUet_7TVBMwULUQxX7LNHFWp-kHi0ouyaut2oKzSiA7ixgAV8SQgWTLQN9caCqdVCWg-YQTb9TetXk4hikGEVPbSW_Qp3xUjfXv5eCb8DhiP_NsbsIwAqHXuqdTsh8ufnCV0443rSXpKELWBS_8vaaYZzZHArnpcm9IrlRfGpIi4IpEuDtJgYdnpSM6uAtlq8TtuOBRZYA78M3M7JePEJe8yTRzlbOtkgeQIEJzft_VxaPzW46EUDuhZwzo2XM" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-pointer">
                    <div className="size-16 rounded-lg bg-gray-100 bg-cover bg-center" style={{ backgroundImage: `url('${item.img}')` }}></div>
                    <div>
                      <h4 className="font-bold text-sm text-text-main group-hover:text-primary">{item.name}</h4>
                      <p className="text-xs text-gray-500">{item.price}</p>
                    </div>
                    <button className="ml-auto text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlusCircle className="w-6 h-6" />
                    </button>
                  </div>
                ))}
              </div>
              <button className="mt-8 w-full py-3 border border-gray-300 rounded-lg font-bold text-sm hover:border-primary hover:text-primary transition-colors">
                View All Items
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Simplified from Screenshot) */}
      <footer className="bg-gray-50 border-t border-[#f0f2f4] py-12 px-10">
          <div className="max-w-[1280px] mx-auto text-center">
              <h2 className="font-serif text-2xl mb-4">Join the Circle</h2>
              <div className="flex justify-center gap-2 max-w-md mx-auto">
                  <input type="email" placeholder="Email address" className="flex-1 rounded-lg border-gray-200" />
                  <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-primary">Subscribe</button>
              </div>
              <p className="mt-8 text-sm text-gray-500">© 2024 Dane Design. All rights reserved.</p>
          </div>
      </footer>
    </div>
  );
}