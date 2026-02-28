import React from 'react';

// ── Colour swatches from the demo ─────────────────────────────────
const colorSwatches = [
    { hex: '#433D3D', label: '#433D3D' },
    { hex: '#C02801', label: '#C02801' },
    { hex: '#D3CECE', label: '#D3CECE' },
];

// ──────────────────────────────────────────────────────────────────
const TypographySection = () => (
    <section className="w-full bg-white py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-[1920px] mx-auto">

            {/* Title */}
            <h2 className="text-4xl md:text-[52px] font-extrabold text-black text-center mb-16 md:mb-20 tracking-tight">
                Typography
            </h2>

            {/* ── Top row: Aa display + description ── */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 mb-16 md:mb-20 max-w-[1000px] mx-auto">

                {/* Large Aa */}
                <div
                    className="shrink-0 leading-none select-none flex items-end"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                    {/* Outline A */}
                    <span
                        style={{
                            fontSize: 'clamp(80px, 14vw, 160px)',
                            fontWeight: 700,
                            color: 'transparent',
                            WebkitTextStroke: '2px #C02801',
                            lineHeight: 1,
                        }}
                    >
                        A
                    </span>
                    {/* Filled a */}
                    <span
                        style={{
                            fontSize: 'clamp(70px, 12vw, 140px)',
                            fontWeight: 700,
                            color: '#C02801',
                            lineHeight: 1,
                            marginLeft: '0.1em',
                        }}
                    >
                        a
                    </span>
                </div>

                {/* Description text */}
                <p
                    className="text-[14px] md:text-[15.5px] text-black leading-relaxed max-w-[420px]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                    <span className="font-extrabold text-[#C02801]">Poppins</span>
                    {' '}Is A Geometric Sans-Serif Typeface That Has Become Incredibly Popular In Web And Graphic Design.
                    Its Clean, Modern, And Friendly Appearance Makes It A Favorite For A Wide Range Of Applications,
                    From Headlines To Body Text.
                </p>
            </div>

            {/* ── Bottom row: font weights (left) + colour circles (right) ── */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 max-w-[1000px] mx-auto">

                {/* Font weight list */}
                <div style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <p className="text-[18px] font-extrabold text-[#C02801] mb-3">Poppins</p>
                    <ul className="space-y-1 text-[14px] text-black">
                        <li className="flex items-center gap-2">
                            <span className="text-[#C02801] font-bold">·</span> Regular
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-[#C02801] font-bold">·</span> Bold
                        </li>
                    </ul>
                </div>

                {/* Colour circles */}
                <div className="flex items-end gap-6">
                    {colorSwatches.map(({ hex, label }) => (
                        <div key={hex} className="flex flex-col items-center gap-2">
                            <div
                                className="rounded-full shadow-sm border border-gray-200"
                                style={{
                                    width: 56,
                                    height: 56,
                                    background: hex,
                                    flexShrink: 0,
                                }}
                            />
                            <span className="text-[11px] text-gray-600 font-medium tracking-wide">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </section>
);

export default TypographySection;
