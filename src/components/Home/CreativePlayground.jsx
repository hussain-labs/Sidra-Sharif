import React from 'react';

const CreativePlayground = () => {
  // 16 curated artworks matching the reference image themes
  const columns = [
    // Column 1 - Leftmost
    [
      { id: 1, src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop", alt: "Handmade DIY box" },
      { id: 2, src: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=600&auto=format&fit=crop", alt: "Digital leaf art" },
      { id: 3, src: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?q=80&w=600&auto=format&fit=crop", alt: "Artistic donut" }
    ],
    // Column 2
    [
      { id: 4, src: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=600&auto=format&fit=crop", alt: "Blue forest sketch" },
      { id: 5, src: "https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?q=80&w=600&auto=format&fit=crop", alt: "Starry silhouettes" },
      { id: 6, src: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=600&auto=format&fit=crop", alt: "Broom art mockup" }
    ],
    // Column 3 - Center
    [
      { id: 7, src: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=600&auto=format&fit=crop", alt: "London bridge sketch" },
      { id: 8, src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop", alt: "Campfire illustration" },
      { id: 9, src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", alt: "Sunset lamp post" },
      { id: 10, src: "https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?q=80&w=600&auto=format&fit=crop", alt: "Mountain reflection" }
    ],
    // Column 4
    [
      { id: 11, src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop", alt: "Butterflies in jar" },
      { id: 12, src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600&auto=format&fit=crop", alt: "Forest path" },
      { id: 13, src: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=600&auto=format&fit=crop", alt: "Pink tree silhouettes" }
    ],
    // Column 5 - Rightmost
    [
      { id: 14, src: "https://images.unsplash.com/photo-1460661419201-fd4cecdc8a8b?q=80&w=600&auto=format&fit=crop", alt: "Seasons tree" },
      { id: 15, src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop", alt: "Pen holder photograph" },
      { id: 16, src: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?q=80&w=600&auto=format&fit=crop", alt: "Geometric patterns" }
    ]
  ];

  return (
    <section className="bg-void-black py-24 px-4 overflow-hidden relative min-h-[1200px]">
      {/* Professional Background Glows matching the reference */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-sky-blue/10 blur-[180px] rounded-full"></div>
        {/* Specific prominent Cyan Glow on the bottom-right identified by user */}
        <div className="absolute bottom-[0%] right-[-5%] w-[45%] h-[70%] bg-electric-cyan/25 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-6 text-white leading-tight">
            The Creative <span className="text-sky-blue">Playground</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed px-4">
            A gallery of personal sketches, illustrations, and tactile experiments.
          </p>
        </div>

        {/* Desktop: 5-column Flex Cluster (No overlaps) */}
        <div className="hidden md:flex justify-center items-start gap-4">
          {columns.map((col, colIndex) => {
            // Apply vertical offsets to create the "cloud" cluster shape
            let mtClass = "";
            if (colIndex === 0 || colIndex === 4) mtClass = "mt-[160px]";
            else if (colIndex === 1 || colIndex === 3) mtClass = "mt-[80px]";

            return (
              <div key={colIndex} className={`flex flex-col gap-4 w-[220px] ${mtClass}`}>
                {col.map((item) => (
                  <div
                    key={item.id}
                    className="w-full rounded-[15px] border-[3px] border-white overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.6)] transform transition-transform duration-500 hover:scale-[1.05] hover:z-20"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {/* Mobile: 2-column Staggered Grid */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            {columns.flatMap(c => c).filter((_, i) => i % 2 === 0).map((item) => (
              <div key={item.id} className="w-full rounded-[24px] border-[3px] border-white overflow-hidden shadow-2xl">
                <img src={item.src} alt={item.alt} className="w-full h-auto object-cover" />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 mt-12">
            {columns.flatMap(c => c).filter((_, i) => i % 2 !== 0).map((item) => (
              <div key={item.id} className="w-full rounded-[24px] border-[3px] border-white overflow-hidden shadow-2xl">
                <img src={item.src} alt={item.alt} className="w-full h-auto object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativePlayground;
