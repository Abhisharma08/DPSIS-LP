import React from 'react';
import { Building2 } from 'lucide-react';

const OurCampuses = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-center text-4xl md:text-[44px] font-extrabold text-black mb-12">
          Our Campuses
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* Kovan Campus */}
          <div className="flex flex-col group">
            <div className="rounded-[28px] overflow-hidden aspect-[1.4] mb-8 relative bg-gray-100">
              <img 
                src="https://res.cloudinary.com/ddqqlfsjp/image/upload/v1790075326/dpsis-kovan-campus-1_vc19qn.jpg" 
                alt="Kovan Campus" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="flex items-start gap-5 px-2">
              <Building2 className="w-9 h-9 text-black shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <h3 className="text-[22px] font-bold text-black mb-2.5">Kovan Campus</h3>
                <p className="text-black text-lg leading-relaxed">
                  36, Aroozoo Avenue<br/>
                  Singapore 539842
                </p>
              </div>
            </div>
          </div>

          {/* Alexandra Campus */}
          <div className="flex flex-col group">
            <div className="rounded-[28px] overflow-hidden aspect-[1.4] mb-8 relative bg-gray-100">
              <img 
                src="https://res.cloudinary.com/ddqqlfsjp/image/upload/v1790075326/DPSIS-Alexandra-Campus-Building_zpn4vs.jpg" 
                alt="Alexandra Campus" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-6 right-6">
                <a href="#" className="inline-block bg-[#16c646] hover:bg-[#15b23f] text-white font-medium text-lg px-7 py-3 rounded-full shadow-lg transition-colors duration-300">
                  Click here
                </a>
              </div>
            </div>
            <div className="flex items-start gap-5 px-2">
              <Building2 className="w-9 h-9 text-black shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <h3 className="text-[22px] font-bold text-black mb-2.5">Alexandra Campus</h3>
                <p className="text-black text-lg leading-relaxed">
                  456 Alexandra Road, Level 11<br/>
                  Singapore 119962
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCampuses;
