import img1 from "../../assets/images/gallery/1.png";
import img2 from "../../assets/images/gallery/2.png";
import img3 from "../../assets/images/gallery/3.png";
import img4 from "../../assets/images/gallery/4.png";
import img5 from "../../assets/images/gallery/5.png";
import img6 from "../../assets/images/gallery/6.png";
import img7 from "../../assets/images/gallery/7.png";
import img8 from "../../assets/images/gallery/8.png";
import img9 from "../../assets/images/gallery/9.png";
import img10 from "../../assets/images/gallery/10.png";
import img11 from "../../assets/images/gallery/11.png";
import img12 from "../../assets/images/gallery/12.png";
import img13 from "../../assets/images/gallery/13.png";
import img14 from "../../assets/images/gallery/14.png";
import img15 from "../../assets/images/gallery/15.png";
import img16 from "../../assets/images/gallery/16.png";
const CreativePlayground = () => {
  // 16 curated artworks matching the reference image themes
  const columns = [
    // Column 1 - Leftmost
    [
      { id: 1, src: img1, alt: "Handmade DIY box" },
      { id: 2, src: img2, alt: "Digital leaf art" },
      { id: 3, src: img3, alt: "Artistic donut" }
    ],
    // Column 2
    [
      { id: 4, src: img4, alt: "Blue forest sketch" },
      { id: 5, src: img5, alt: "Starry silhouettes" },
      { id: 6, src: img6, alt: "Broom art mockup" }
    ],
    // Column 3 - Center
    [
      { id: 7, src: img7, alt: "London bridge sketch" },
      { id: 8, src: img8, alt: "Campfire illustration" },
      { id: 9, src: img9, alt: "Sunset lamp post" },
      { id: 10, src: img10, alt: "Mountain reflection" }
    ],
    // Column 4
    [
      { id: 11, src: img11, alt: "Butterflies in jar" },
      { id: 12, src: img12, alt: "Forest path" },
      { id: 13, src: img13, alt: "Pink tree silhouettes" }
    ],
    // Column 5 - Rightmost
    [
      { id: 14, src: img14, alt: "Seasons tree" },
      { id: 15, src: img15, alt: "Pen holder photograph" },
      { id: 16, src: img16, alt: "Geometric patterns" }
    ]
  ];

  return (
    <section className="bg-void-black py-24 px-4 overflow-hidden relative">
      {/* Professional Background Glows matching the reference */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-sky-blue/10 blur-[180px] rounded-full"></div>
        {/* Specific prominent Cyan Glow on the bottom-right identified by user */}
        <div className="absolute bottom-[0%] right-[-5%] w-[45%] h-[70%] bg-electric-cyan/25 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-[1420px] mx-auto relative z-10">
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
        <div className="flex justify-center items-start sm:gap-4 gap-2">
          {columns.map((col, colIndex) => {
            // Apply vertical offsets to create the "cloud" cluster shape
            let mtClass = "";
            if (colIndex === 0 || colIndex === 4) mtClass = "md:mt-[160px] sm:mt-[100px] mt-[60px]";
            else if (colIndex === 1 || colIndex === 3) mtClass = "md:mt-[80px] sm:mt-[60px] mt-7";

            return (
              <div key={colIndex} className={`flex flex-col sm:gap-4 gap-2 ${mtClass}`}>
                {col.map((item) => (
                  <div
                    key={item.id}
                    className="w-full sm:rounded-[15px] rounded-[10px] border-[2px] border-white overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.6)] transform transition-transform duration-500 hover:scale-[1.05] hover:z-20"
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
        {/* <div className="md:hidden grid grid-cols-2 gap-4">
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
        </div> */}
      </div>
    </section>
  );
};

export default CreativePlayground;
