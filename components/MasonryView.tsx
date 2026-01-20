import React from 'react';
import { Search, SlidersHorizontal, ChevronDown, Heart } from 'lucide-react';

const masonryItems = [
  {
    id: 1,
    title: "Gräshoppa Floor Lamp",
    category: "Lighting",
    aspect: "aspect-auto",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDg2_eecfehcTZjpdsTCo0LRERL7lENI58fnDoUC1_ct5uzRFnStW9eVyW_SEr8CZkqMA5A60psrHHFe2JhpIhXWYz7Mgvr82YM71apQbwb19Kq-I0fEwTTfh9IB1RVyaVwvb2ElCxNZqmK6wmKF2wcY_YF1_Px7DFvuiR2kdyQi1k6KG8M5udO_T2rgJzh7k8LxnAhJskGdr1Yh2oKl567XYs0pByd3ukgXSQbIngELSXpS8PgmYeMhGFC3SQsuzOYIf9sOYGQgGw",
    heightClass: "h-auto"
  },
  {
    id: 2,
    title: "Poet Sofa",
    category: "Seating",
    aspect: "aspect-square",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOPGnhxRpHYBeB8-5ajm809xT_XN8gAZgmcmHXVh-H2IEFaMVkLVao8itDHCzi8XC2u_6WJyd_ODPckaSLerixxuKnUgtHlin9ffS7ktDP93uBTwBjceZvVFuH4qXNJI-o6wdldqz_rrUg9JFVtQ-GXfQwYqSEhxrOPx6aPwGaMkh_2lrsuRIfpEDwbij_8zmGABtX6_8RPJWti09H3WhvmGJXf1zc2ATU_G-qKMrrx5ke_miH5-72q6VVzi6yXGd8z5iWOZUbgmw",
    heightClass: "aspect-square"
  },
  {
    id: 3,
    title: "Wishbone Chair",
    category: "Chairs",
    aspect: "aspect-[3/4]",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqFNiQZhC5H36y5258NSyziMeeNvkQS9_mExO7gjp1yflzgQmhT3oV5hn_zdTyD0cmby5LvOmzQblcwkKhgHaXs9MC69fcntDt2P3hDO8Ue7ZprZidis45Y2tohKN6ttaSAOOFxR-p1hhwy6EC1p_48K8gc0JHG2gMbUqEU7F0HeVbrZWo-SyCTId4QlpyttVdo4f14k8edLLkXsNg_X0ltxUuG8n-Gzorlk8egpzpkPHwcsbeQ7hiCMDahieSUFQnfxgRMjz-La0",
    heightClass: "h-[400px]"
  },
  {
    id: 4,
    title: "Model 29 Sideboard",
    category: "Storage",
    aspect: "aspect-[4/3]",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAs-vTGvAjnSzZbB5akd_cECoSLTNM5E6B7_WYphmRPzJXHPqK57TEaOPK8dd4pHvDFMGeI019TiBaN5X2oBYb0EJQmH4TMV1Dp3M39x4vJRido74MI1nGwBCJK_9TirAo3UEnODWLixAgl8hSFzo8B-GTYLeOqmefphkpBEAxYKVKH_ioWL36-2f6muJOLSLmLi--pveuHJ-rIZclw5yaLvnRwV12nb525LUbwslSlOiRpVI7P2fR0O-GZgdl41D7Qf9EsWii7nA",
    heightClass: "aspect-[4/3]"
  },
  {
    id: 5,
    title: "Oak Bed Frame",
    category: "Bedroom",
    aspect: "aspect-[3/5]",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8HRmqnbksv45Tsv8ieezj4b_hnhYrccidEp2QTyhYIdiisFiQzE3QgtXMFWjXN-VMFsCT0ys8P9qhFYNAAUZFV831qD_8_UUllwcflrlhS3DWpxg3zLt_NlZGrBCtBi36MUmDjW4vEU-ao1Uj90HgvrTDlo8UpUQdMDCz7FQQDSYiVYemRZgA9oF9AlBRihIq36D2ssceUYZwtNE3NKgaElECM4SSfRr8ZdreOZuGQaK8ETIx3nWOLz9a1NCAIEk4fRK7fJgxpCk",
    heightClass: "h-[500px]"
  },
  {
    id: 6,
    title: "Stoneware Vase",
    category: "Accessories",
    aspect: "aspect-square",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCz51ddQLhSq_-omW4lln03gCJ68BKgoWSgPLIUoCKiJl5S7o0HLmQwB44GR5Ezf4Xzn4SfoNR0_BYSA3tLyfG4u4uKZ82U1buZbWVgvSuBDLnKqTG1_EchjiDShCHTiSAOV0aZFSCKn95ypmFznBYPGXOa-aSS8Q65hT1Lan0SKTzLCpB9Q1PKyeMVktr9OLGjTdfEDQHQW0sFW29BdxgTamMEMiGtJY5gW_Pail2k9Fiypf0OPLu_SdDRkvChZnMiejT9p1Sqf2U",
    heightClass: "aspect-square"
  },
  {
    id: 7,
    title: "Tulip Table Set",
    category: "Dining",
    aspect: "aspect-[3/4]",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSEX7a4L9YAjS-DMofLqmXaPiqiYeC6N1bnekGoC1D08SH6VKwmquyNAxEb-6SpB_fnBiDJulc0sXxLBEmzjMJ2_7eXfRB0fwm8UGerPymbpHu_-0B0dG38p7uT0EV3lQrc79PlxSbSJ5XoGXjes9jexwmPRaZg30z2BHJ6Th4I_q0DLnXb6VYCoxXXYdBf1GvFsCVUqEok3qIBSOR045OLZXgn9VCVjJe680iPIT23iCoz19eg6KxY1-ciqXYcZEA76tZnP5Inx4",
    heightClass: "h-[450px]"
  },
  {
    id: 8,
    title: "PH 5 Pendant",
    category: "Lighting",
    aspect: "aspect-[4/3]",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDy8DjbsvargzHeFmP0cHq-wfVpAdRU3ArojRrA2kn47l_HBLSafoqkK71xQnvNOlBBaeVU4jXCNhDhf2zG4n-t8-3kb214IKM57FWE9JkkA8F-vRWoNrjnMBFzDSeToebZhvwV4GoXjM1r5tmiJQMhfmxs3aNtIfZ8upihxOlMqFCaC_OI8QSvfb5eqI9sBaLZfECfytYNwmkSek6nKp9kgvWkTJJqU-oarLFVsx7MgXw60sF66fUGdC93QWvUIcLnoXZgViWC6iM",
    heightClass: "aspect-[4/3]"
  },
];

const FilterChip = ({ label, active = false }: { label: React.ReactNode, active?: boolean }) => (
  <button className={`flex h-10 items-center gap-2 rounded-full px-4 text-sm font-medium transition-all shadow-sm
    ${active 
      ? 'bg-primary/10 border border-primary/20 text-primary font-bold hover:bg-primary/20' 
      : 'bg-white border border-gray-200 text-text-main hover:border-primary hover:text-primary'
    }`}>
    <span>{label}</span>
    {!active && <ChevronDown className="w-4 h-4" />}
  </button>
);

export default function MasonryView() {
  return (
    <div className="flex flex-col items-center w-full pb-20">
      
      {/* Hero & Filter Section */}
      <section className="w-full max-w-[960px] px-4 pt-12 pb-8 flex flex-col gap-8 items-center text-center">
        <div className="space-y-3">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-text-main">
            Explore the Collection
          </h1>
          <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto">
            Curated mid-century modern furniture, lighting, and decor from the finest Scandinavian designers.
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-[600px] relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
            <Search className="w-5 h-5" />
          </div>
          <input 
            type="text" 
            placeholder="Search for 'Teak Sideboard', 'Lounge Chair'..." 
            className="w-full h-14 pl-12 pr-28 rounded-full bg-white border-none shadow-sm ring-1 ring-gray-200 focus:ring-2 focus:ring-primary text-base placeholder:text-gray-400 transition-all"
          />
          <div className="absolute inset-y-0 right-2 flex items-center">
            <button className="bg-primary hover:bg-blue-600 text-white rounded-full px-5 h-10 text-sm font-bold transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 w-full">
          <FilterChip 
            active={true}
            label={
              <span className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4" /> All Filters
              </span>
            } 
          />
          <div className="h-8 w-px bg-gray-300 self-center mx-1"></div>
          <FilterChip label="Category" />
          <FilterChip label="Material" />
          <FilterChip label="Era" />
          <FilterChip label="Designer" />
          <FilterChip label="Price" />
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="w-full max-w-[1400px] px-4 md:px-8">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {masonryItems.map((item) => (
            <div key={item.id} className="relative group cursor-pointer break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
              <img 
                src={item.src} 
                alt={item.title} 
                className={`w-full object-cover ${item.heightClass}`}
                loading="lazy"
              />
              
              {/* Overlay Favorite Button */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full text-text-main hover:text-primary hover:scale-110 transition-all shadow-md">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Gradient & Text Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <p className="text-white text-xs font-bold uppercase tracking-wider mb-1">{item.category}</p>
                <h3 className="text-white text-lg font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Load More */}
      <section className="w-full flex justify-center py-12">
        <button className="flex items-center justify-center gap-2 px-8 h-12 rounded-full bg-white text-text-main font-bold text-base shadow-sm ring-1 ring-gray-200 hover:ring-primary hover:text-primary transition-all">
          <span>Load More</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </section>

    </div>
  );
}