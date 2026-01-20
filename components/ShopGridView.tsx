import React from 'react';
import { ChevronDown, ChevronRight, Check } from 'lucide-react';

const categories = [
  { name: "Living", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2lKI6iscHiE1ygSU3ljOGCGmb-nPu18iMjojMa1g3zUfQQq8jayI7krSpzM_VGe7Nmi44UpN-4CAgKD19SKa6XyaDskY2Tv1xLLSeC_OTqL1icpJYVHpP09sFU3tdK9QbcC0lOCSCo24bTbUNJmXYB8_JXzHUVd-itRGtnYTw3R67srLmJvas5P_1my3NRmEysm6svDpSV-6wKF_eB_y-67k2Ybc-t_3jyOzGJ1pOJE6UoCtCVmOFzbUVIemhapnbxy5oDvkt-iI" },
  { name: "Dining", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxBOJk8KuC6QOjCo4p1-IXmIkU_FTyb5vnOvpfVmvUou4wljL6AigWqsdsUqWwaOS1Y49dIY8YJFLXGWUtlGLYtFVxlXztLO3867qq42JMi75PkgTHjKO-bI_XecjM6FKIG3LVTX0IxhbZV-XYox7gnmqcs-_xAN5tCDwhnihUTebV8HyK2um2SHRjkYwQoQ_45Ic0jhgSSdq79CLDmgLD31eSNK_5fQ7dMDf6G5QSW71n2ZiBKx_NN07KQUXBzqJtmhzZDQG_m9s" },
  { name: "Bedroom", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDeSDyLUCm9NI2NNyE3E7VLJRPBAClDVnRykz7ceWew0VRPVtROryjMOyWsN-GoUeIEPrV2HXwMCW24KquaHQQ8PR2BZB73TfLivIx_O_RvxTRvrkBTyr7d5J9wX8x0EWF9rOY_RtVyW84aBCN_s40cYk_cX2XMT3Ax94UqLwOcpk37Uwqe-JqvKHKTH0QAoao1-ncnkJx7M02A62q4G3MmOZhCJz4xq97kCK41oDWpiNzXA8Wfu14br24mfR682w0z0g3-M30780" },
  { name: "Office", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7UdDxrOAGqcXFAItg8jb1zE75t7FR1yTyMic7MbNrX8EMCKXsVu1_K8K-RZ_kjfP2PXJRDUngYk_QKh-oxgi7gRS9LuXbHxjiL_INsdT1M_41jzvUQNB8txTt8bASPGjk7QARakHwjTrjOgqa_y_3TsBsqmEZVld0yA9bSSI1RlL-o_yj-TN9dSqfYLdzehUY7CAfbu3ecYGWsADyd33emtN0LJmldJPaCQYIKcphyEgVjUWwSXpnjWH1J4xaNlhqdqBg5d6TOoM" },
  { name: "Outdoor", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjbtyPRGPkjUsKtf7whMBfRI9QD2eR1rOfqJOIUSE8uvFVJwIlLKilCMyz2y6R0QpvdPfGnBspYInG5yoA0fel2qLMhyUXuJiU9AfG6QHS4IL25hMR98_RevzCi0jHqMC6grfGzFEV6tItCZrnkF4Z6SePj1RDPY2aREWrl95RfjRtEOMthFUiZizUMr1G2OnomoqJNB4gyCT00KPAK1ah7DyKQeNw67jWbRjm6zmLGihlkmvMhg3O_BdLeyY_MbV8Ofll88RIpn4" },
  { name: "Decor", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxVtudbtq_2d128jOImW-ngW5qC_nAwSxRW_Ko9YM8rmPI-Y677ubQPtAdTxLr-oHWNiKmuqcuU0w2Ril67S088IuEU07lPh5yEOFRwQwzf7nmryC1XngROE3KqjBs0XmtW_-88_JqHhNJdqqtCwLo-Ji_tLY5fAdyLZ6qkfvvnONv2rH4qwDCoxNpt5HrNjKH8qhGFUSd49ZCb5l-DI_8kv2RYOYvd1CBat6vEyzbsIK-xa7p7t0qtoepA4Otq7m4iLfCPbhlJSE" },
];

const products = [
  { id: 1, name: "The Shell Chair", desc: "Walnut & Leather", price: "$2,450", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDq7xGMOYoU3q4sgnO8PIyJYGX2klSEfhujt8sfVmFiggZk-8qkOgEpJeddS6slbljkp8b4StLVQ6XDwXsY3DKu5afUUQedKXt51WAY5uzDyYnMU5F3FvpwRYMCf4dxpAZySaoqX9MqOkR8YfjR6b-yGgefX1x6BmnkVhIP11RuuEstt02YZ_fcGGywgEV7tWQTjua9Hg6m-FLVlUGiRLKCqBXhqhbuuq_XUjEFv4trultboqNgQhQ3mp_Q5fw9D7822q8vyTC-Lik", badge: "New", badgeColor: "bg-white/90 text-black" },
  { id: 2, name: "Nordic Sofa", desc: "Light Grey Wool", price: "$1,895", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuALck4roPBAOG-nHAQ7ThZ4HJiTK_NvQDKqhQT7ip75MggTBqZCT4ESQiuDezmeN0RNBp44XgWMVU3ImVyBuyqLDZyJ8Yas-EzT-iNHPexHMftFtEy1_MtHhyf0GueMN5KknMUcIUiBikXVEnCGYfEvl-x_uNZ46qn5aaLTLKWrykmGzSoB3hjJpiN503vO3SF1vJl4JQhuNCfo9hhZazmP9M6fpt7DTfm80bW52Usg1RZ_CK9VYzR6u0p_jeZqlPtVSo_JFB2PKeg" },
  { id: 3, name: "Study Lamp", desc: "Matte Black", price: "$185", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDs-ha3Tfk-m_0ToP_ujB2ikOj_AwTUR6vgkynzF6LaJTGWo6_HvcZlzfOz50rHcg0P-Moz0hA7qLE1f7MuDXQV2e5Je3AD2Nd0Y-S3nfOkF3a5NReEyKSfknWg8CH27hQgPDL6VMbRoO0xuDVrEwOHuU_3rqnGDpcJUuPqSCb9M-JIyKm8_d_oWiuKt2AlonNn6z24jiR0pYmqr3BTozBPiLt0h2NRKp10BrpyAr4op7drrRGPGHJVr1BuwmWbd3vtkiq_ZCdt4Ew" },
  { id: 4, name: "Circo Table", desc: "Solid Oak", price: "$350", oldPrice: "$450", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1UIw70bT6jmInzJpTG-1nmo77jtb-XsH0R2xYXVGM5OnSxIxmju2_j-WE-uNa1kT3Wzavtvzt8cznamsq-4egmvNHHBHLpVL7U6wfyyti48RRkIUCXs7bAteI8rOCDHCYY8jefBjP3Fu4Z09esJ9allxPLk5zaTPmdI0-oIK27hHJ0qIGI-2JjgbcH-o3U_yY15n_ky2BVTEbsqYsfYOycULfPwd9OIOATsIBpcABffF-cx3fFb99vPg79vOBvMzYrfMYeHOh_hk", badge: "Sale", badgeColor: "bg-red-500 text-white" },
  { id: 5, name: "Wishbone Chair", desc: "Natural Oak", price: "$695", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBSjWOUGgLeAnnUkcePDch0MUI2ugwtDFLhS1z-GA63owOmURgFiXMPBNaqrjwIT7cd8ZEF736rpm9ku2lXxtvtfqB1ohQvUlQnd9sI8I0dSmbyJ1qla8n41lH4O-bLj8R8fCAd5UEOrWm2TZZLvLi-tp0B1k4IBeJ01Q1KTTSLlKFUs6RRncebtWLtfEayeBUvF-HPIwoAV99MHbaYOUiF6a5LnAGaBSOF6SMo9iK2n_IPskWPMV2mYQWEjUuMAE8OYi-0QFaXq4" },
  { id: 6, name: "Retro Sideboard", desc: "Teak Finish", price: "$1,250", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB43P4l0eAFoEHkkiACbSb0nkaELVj2L3W0m3hFQdVGRqaYAvIvVH73mqhTOpJqVHSkkbfTQ4djz3vHVlm-YDJiYZ8pIQIQKnlvcTVuSVSHs1FaHzJSZGphhTm5LrLRe7OHyuiXnRcSuE7CAFkfkkyrPaX6BmqjOIGL4TxbOD3nrXi4WxwVkdPuAjYVWdBeWwH4inLAZkqGIK68bceoy3lzA2LDEiAeGtn404niHn0P8CjCUIXJCaB70NPGduiBOYDGRYC_PI5TGaU" },
  { id: 7, name: "Globe Pendant", desc: "Brass & Glass", price: "$420", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnU8L32V3Grkv7qu19YNJZxmPkGPCrk2DIdGF-hFHkGyTWLlsWFLLbMgU9upmYc1S_aMd0YPv6s41EOcxAwkWYD3k9QFJ9CxYw9sBRy8Ewjtnlf1cn_k9zNQ2nZwDAUMlToZrsz9m-GrDDzEr0nCpctX8xfguu61yXVnUwQE4aTxoBVTXaqR0XOv-KkL3u6CU8PAdgpKEnnkN_Ph8nI2nVo8ltNO3Pmrv6uMa19K1ZkJaGos2qW7Cgus3cAa-6o8W63vLxIBJKgsk" },
  { id: 8, name: "Ladder Shelf", desc: "White Oak", price: "$395", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJl1fzG3K8JGKjGKaprtnx6k6yEiqesYCWsic5J5AWO-LYaDA2G1R_eAg6sLStdyvoLIXsJ3ati7890uEYv-fYokOfbvlb9cgEEVR40HI7iTLgF0rocufgGg4yfI04ypxKKgfaM3LhN94JYbgQTf4W-Y0RGsb6S3lYggB42TGZPdQAEgU2pxru43eJKWDRBdJvW0Wn80sZeDmMJ6_OqXW08pLnaQkFrA_Ak5iXoD0h446Kyj7uSqQ_tgUz6jaq4gWipNR8zaR1R3k" },
];

export default function ShopGridView() {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Header Info */}
      <div className="flex flex-col gap-8 mb-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-text-main">Explore our Collection</h1>
          <p className="text-gray-500 text-base md:text-lg">Mid-century modern furniture for your home</p>
        </div>

        {/* Categories Horizontal Scroll */}
        <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex flex-row items-start gap-6 min-w-min">
            {categories.map((cat, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 w-20 group cursor-pointer">
                <div 
                  className="w-20 h-20 bg-center bg-no-repeat bg-cover rounded-full ring-2 ring-transparent group-hover:ring-primary/50 transition-all shadow-sm"
                  style={{ backgroundImage: `url('${cat.img}')` }}
                ></div>
                <p className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">{cat.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 lg:shrink-0 lg:sticky lg:top-24 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-gray-200 lg:hidden">
            <span className="font-bold text-lg">Filters</span>
            <button className="text-primary text-sm font-semibold">Reset All</button>
          </div>

          {/* Price Range */}
          <details className="group bg-white rounded-xl border border-gray-200 shadow-sm" open>
            <summary className="flex cursor-pointer items-center justify-between p-4 list-none">
              <span className="font-bold text-sm">Price Range</span>
              <ChevronDown className="w-4 h-4 text-gray-500 transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-4 pb-6 pt-2">
              <div className="flex flex-col gap-4">
                <div className="relative h-1.5 w-full rounded-full bg-slate-200">
                  <div className="absolute left-[20%] right-[30%] top-0 bottom-0 rounded-full bg-primary"></div>
                  <div className="absolute left-[20%] top-1/2 -mt-2 -ml-2 h-4 w-4 rounded-full border-2 border-primary bg-white shadow-sm cursor-pointer hover:scale-110 transition-transform"></div>
                  <div className="absolute right-[30%] top-1/2 -mt-2 -mr-2 h-4 w-4 rounded-full border-2 border-primary bg-white shadow-sm cursor-pointer hover:scale-110 transition-transform"></div>
                </div>
                <div className="flex justify-between text-xs font-medium text-gray-500">
                  <span>$200</span>
                  <span>$1,400</span>
                </div>
              </div>
            </div>
          </details>

          {/* Color */}
          <details className="group bg-white rounded-xl border border-gray-200 shadow-sm" open>
            <summary className="flex cursor-pointer items-center justify-between p-4 list-none">
              <span className="font-bold text-sm">Color</span>
              <ChevronDown className="w-4 h-4 text-gray-500 transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-4 pb-4 pt-0">
               <div className="flex flex-wrap gap-3">
                 {['#8B5A2B', '#D2B48C', '#000000', '#FFFFFF', '#556B2F'].map((color, i) => (
                   <button key={i} className={`size-8 rounded-full ring-2 ring-offset-2 ring-transparent hover:ring-primary focus:ring-primary ring-offset-white border ${color === '#FFFFFF' ? 'border-gray-200' : 'border-transparent'}`} style={{ backgroundColor: color }}></button>
                 ))}
               </div>
            </div>
          </details>

          {/* Availability */}
           <details className="group bg-white rounded-xl border border-gray-200 shadow-sm">
            <summary className="flex cursor-pointer items-center justify-between p-4 list-none">
              <span className="font-bold text-sm">Availability</span>
              <ChevronDown className="w-4 h-4 text-gray-500 transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-4 pb-4 pt-0 flex flex-col gap-2">
               <label className="flex items-center gap-3 cursor-pointer">
                  <div className="size-4 rounded border border-gray-300 flex items-center justify-center text-primary"><Check className="w-3 h-3" /></div>
                  <span className="text-sm text-gray-600">In Stock (124)</span>
               </label>
               <label className="flex items-center gap-3 cursor-pointer">
                  <div className="size-4 rounded border border-gray-300"></div>
                  <span className="text-sm text-gray-600">Pre-order (12)</span>
               </label>
            </div>
          </details>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
              <div key={product.id} className="group relative flex flex-col bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                  <div 
                    className="w-full h-full bg-center bg-no-repeat bg-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${product.img}')` }}
                  ></div>
                  {product.badge && (
                    <div className="absolute top-3 left-3">
                      <span className={`${product.badgeColor} backdrop-blur text-xs font-bold px-2 py-1 rounded`}>{product.badge}</span>
                    </div>
                  )}
                  <button className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-primary text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-lg whitespace-nowrap hover:bg-primary/90">
                    Quick View
                  </button>
                </div>
                <div className="p-4 flex flex-col gap-1">
                  <h3 className="text-base font-semibold text-gray-900 leading-tight">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.desc}</p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <p className={`text-sm font-bold ${product.oldPrice ? 'text-red-500' : 'text-gray-900'}`}>{product.price}</p>
                    {product.oldPrice && <p className="text-xs text-gray-400 line-through">{product.oldPrice}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-2">
              <button className="flex items-center justify-center size-10 rounded-lg border border-slate-200 bg-white text-gray-400 hover:bg-gray-50"><ChevronDown className="w-4 h-4 rotate-90" /></button>
              <button className="flex items-center justify-center size-10 rounded-lg bg-primary text-white font-bold text-sm">1</button>
              <button className="flex items-center justify-center size-10 rounded-lg border border-slate-200 bg-white text-gray-700 hover:bg-gray-50 font-medium text-sm">2</button>
              <button className="flex items-center justify-center size-10 rounded-lg border border-slate-200 bg-white text-gray-700 hover:bg-gray-50 font-medium text-sm">3</button>
              <span className="flex items-center justify-center size-10 text-gray-400">...</span>
              <button className="flex items-center justify-center size-10 rounded-lg border border-slate-200 bg-white text-gray-500 hover:bg-gray-50"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}