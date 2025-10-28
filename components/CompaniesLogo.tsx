'use client';

export default function CompaniesLogo() {
  const companiesLogo = [
    { name: "Framer", logo: "https://saasly.prebuiltui.com/assets/companies-logo/framer.svg" },
    { name: "Huawei", logo: "https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg" },
    { name: "Instagram", logo: "https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg" },
    { name: "Microsoft", logo: "https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg" },
    { name: "Walmart", logo: "https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg" }
  ];

  return (
    <>
      <style>{`
        .marquee-inner {
          animation: marqueeScroll 15s linear infinite;
        }

        .marquee-inner-testimonials {
          animation: marqueeScroll 35s linear infinite;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
      
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#060010' }}>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h3 className="text-base text-center text-slate-300 pb-14 font-medium">
            Co - Powered by:
          </h3>
          
          <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none">
            <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-[#060010] to-transparent" />
            
            <div className="flex marquee-inner will-change-transform max-w-5xl mx-auto">
              {[...companiesLogo, ...companiesLogo].map((company, index) => (
                <div key={index} className="mx-11 flex items-center justify-center">
                  <img 
                    className="h-8 md:h-10 lg:h-12 w-auto max-w-20 md:max-w-24 lg:max-w-28 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter brightness-110" 
                    src={company.logo} 
                    alt={company.name} 
                  />
                </div>
              ))}
            </div>
            
            <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-linear-to-l from-[#060010] to-transparent" />
          </div>
        </div>
        
        {/* Subtle background overlay for depth */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none" />
      </section>
    </>
  );
}
