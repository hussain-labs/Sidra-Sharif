import React from 'react';
import order1 from '../../assets/images/chatcraze/order1.png';
import order2 from '../../assets/images/chatcraze/order2.png';
import order3 from '../../assets/images/chatcraze/order3.png';

// Canvas design
const W = 680;
const H = 1400;
const pct = (v, max) => `${(v / max) * 100}%`;

const OrderProcessSection = () => (
    <section className="w-full bg-[#F0F0F0] py-20 md:py-28 px-4 md:px-10">
        <div className="max-w-[1920px] mx-auto flex flex-col items-center">

            {/* Pill label */}
            <div className="bg-white rounded-2xl shadow-lg shadow-red-100 px-8 md:px-12 py-4 mb-12 md:mb-16 flex items-center gap-3">
                <span className="text-2xl md:text-3xl">📦</span>
                <span className="text-2xl md:text-4xl font-extrabold text-black tracking-tight">
                    Order Process
                </span>
            </div>

            {/* Responsive canvas */}
            <div
                className="relative w-full mx-auto overflow-visible"
                style={{ maxWidth: W, aspectRatio: `${W} / ${H}` }}
            >
                {/* ── SVG connector lines ── */}
                <svg
                    viewBox={`0 0 ${W} ${H}`}
                    preserveAspectRatio="none"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 5, pointerEvents: 'none' }}
                >
                    {/* ── Connector 1: order1 → RIGHT → DOWN → ↓ → order2 ── */}
                    {/* Horizontal segment */}
                    <line x1="188" y1="345" x2="480" y2="345"
                        stroke="#555" strokeWidth="2" strokeDasharray="9,7" />
                    {/* Vertical segment */}
                    <line x1="480" y1="345" x2="480" y2="430"
                        stroke="#555" strokeWidth="2" strokeDasharray="9,7" />
                    {/* ↓ circle terminal */}
                    <circle cx="480" cy="446" r="14" fill="none" stroke="#555" strokeWidth="2" />
                    <polyline points="474,440 480,450 486,440"
                        fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                    {/* ── Connector 2: order2 → LEFT → DOWN → ↓ → order3 ── */}
                    {/* Horizontal segment */}
                    <line x1="400" y1="710" x2="165" y2="710"
                        stroke="#555" strokeWidth="2" strokeDasharray="9,7" />
                    {/* Vertical segment */}
                    <line x1="165" y1="710" x2="165" y2="860"
                        stroke="#555" strokeWidth="2" strokeDasharray="9,7" />
                    {/* ↓ circle terminal */}
                    <circle cx="165" cy="876" r="14" fill="none" stroke="#555" strokeWidth="2" />
                    <polyline points="159,870 165,880 171,870"
                        fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                {/* order1 — top-left */}
                <div style={{ position: 'absolute', left: pct(0, W), top: pct(20, H), width: pct(285, W), zIndex: 10 }}>
                    <img src={order1} alt="Vendor list" className="w-full h-auto object-contain drop-shadow-xl" />
                </div>

                {/* order2 — right */}
                <div style={{ position: 'absolute', left: pct(390, W), top: pct(460, H), width: pct(290, W), zIndex: 10 }}>
                    <img src={order2} alt="Vendor detail" className="w-full h-auto object-contain drop-shadow-xl" />
                </div>

                {/* order3 — bottom-left (starts just below the ↓ icon at y=573) */}
                <div style={{ position: 'absolute', left: pct(0, W), top: pct(890, H), width: pct(285, W), zIndex: 10 }}>
                    <img src={order3} alt="Checkout" className="w-full h-auto object-contain drop-shadow-xl" />
                </div>
            </div>

        </div>
    </section>
);

export default OrderProcessSection;
