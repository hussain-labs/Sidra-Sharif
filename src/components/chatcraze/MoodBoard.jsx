import React from 'react';

import img1 from '../../assets/images/chatcraze/img1.png';
import img2 from '../../assets/images/chatcraze/img2.png';
import img3 from '../../assets/images/chatcraze/img3.png';
import img4 from '../../assets/images/chatcraze/img4.png';
import img5 from '../../assets/images/chatcraze/img5.png';

// ╔══════════════════════════════════════════════════════════════════╗
// ║  EASY EDIT ZONE — change any value here to adjust the layout   ║
// ╚══════════════════════════════════════════════════════════════════╝

// Canvas size (all pixel values below are relative to this)
const W = 900;   // ← canvas width
const H = 750;   // ← canvas height
const R = 42;    // ← swatch circle radius

// ── Left column (3 images stacked) ────────────────────────────────
// l = left edge, t = top edge, w = width, h = height
const LEFT_W = 280;   // ← width of all left images
const IMG1 = { t: 0, h: 225 };
const IMG3 = { t: 250, h: 215 };
const IMG5 = { t: 480, h: 225 };

// ── Right column (2 taller images) ────────────────────────────────
const RIGHT_L = 580;   // ← left edge of right images
const RIGHT_W = 285;   // ← width of all right images
const IMG2 = { t: 20, h: 310 };
const IMG4 = { t: 360, h: 310 };

// ── Swatch circles ─────────────────────────────────────────────────
// cx, cy = circle centre  |  tx, ty = tip of the tail (toward image)
const SWATCHES = [
    { cx: 435, cy: 120, tx: LEFT_W, ty: 90, hex: '#576625' },
    { cx: 430, cy: 270, tx: RIGHT_L, ty: 250, hex: '#FEBD03' },
    { cx: 440, cy: 360, tx: LEFT_W, ty: 350, hex: '#C02801' },
    { cx: 432, cy: 478, tx: RIGHT_L, ty: 508, hex: '#433D3D' },
    { cx: 432, cy: 593, tx: LEFT_W, ty: 588, hex: '#B46E26' },
];

// ╔══════════════════════════════════════════════════════════════════╗
// ║  END OF EASY EDIT ZONE                                         ║
// ╚══════════════════════════════════════════════════════════════════╝

// Build full image array from config above
const IMGS = [
    { src: img1, l: 0, t: IMG1.t, w: LEFT_W, h: IMG1.h, border: '#576625', alt: 'shots' },
    { src: img3, l: 0, t: IMG3.t, w: LEFT_W, h: IMG3.h, border: '#C02801', alt: 'dahi bhalla' },
    { src: img5, l: 0, t: IMG5.t, w: LEFT_W, h: IMG5.h, border: '#B46E26', alt: 'papri chaat' },
    { src: img2, l: RIGHT_L, t: IMG2.t, w: RIGHT_W, h: IMG2.h, border: '#FEBD03', alt: 'pani puri' },
    { src: img4, l: RIGHT_L, t: IMG4.t, w: RIGHT_W, h: IMG4.h, border: '#433D3D', alt: 'chaat' },
];

// ── SVG speech-bubble (circle + pointed tail) ─────────────────────
const SpeechBubble = ({ cx, cy, tx, ty, hex }) => {
    const angle = Math.atan2(ty - cy, tx - cx);
    const perp = angle + Math.PI / 2;
    const hw = 13; // half-width of tail

    const bx = cx + Math.cos(angle) * (R - 4);
    const by = cy + Math.sin(angle) * (R - 4);
    const p1x = bx + Math.cos(perp) * hw;
    const p1y = by + Math.sin(perp) * hw;
    const p2x = bx - Math.cos(perp) * hw;
    const p2y = by - Math.sin(perp) * hw;

    return (
        <g>
            <polygon
                points={`${tx},${ty} ${p1x.toFixed(1)},${p1y.toFixed(1)} ${p2x.toFixed(1)},${p2y.toFixed(1)}`}
                fill={hex}
            />
            <circle cx={cx} cy={cy} r={R} fill={hex} />
            <text
                x={cx} y={cy}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="12"
                fontWeight="700"
                letterSpacing="0.5"
                style={{ userSelect: 'none' }}
            >
                {hex}
            </text>
        </g>
    );
};

const pct = (v, max) => `${(v / max) * 100}%`;

// ── Component ─────────────────────────────────────────────────────
const MoodBoard = () => (
    <section className="w-full bg-[#F5EEEE] py-20 md:py-28 px-4 md:px-10">

        <div className="max-w-[1920px] mx-auto">

            <h2 className="text-4xl md:text-[48px] font-extrabold text-black text-center mb-14 md:mb-20 tracking-tight">
                2 . Mood <span className="text-[#D3544E]">Board</span>
            </h2>

            {/* Fixed-aspect-ratio canvas — scales to any screen width */}
            <div
                className="relative mx-auto w-full"
                style={{ maxWidth: W, aspectRatio: `${W} / ${H}` }}
            >
                {/* Food images */}
                {IMGS.map(({ src, l, t, w, h, border, alt }) => (
                    <div
                        key={alt}
                        style={{
                            position: 'absolute',
                            left: pct(l, W),
                            top: pct(t, H),
                            width: pct(w, W),
                            height: pct(h, H),
                            border: `3px solid ${border}`,
                            borderRadius: 12,
                            overflow: 'hidden',
                            zIndex: 5,
                        }}
                    >
                        <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                ))}

                {/* Speech-bubble swatches (SVG overlay) */}
                <svg
                    viewBox={`0 0 ${W} ${H}`}
                    preserveAspectRatio="none"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 20, pointerEvents: 'none' }}
                >
                    {SWATCHES.map(s => <SpeechBubble key={s.hex} {...s} />)}
                </svg>
            </div>
        </div>
    </section>
);

export default MoodBoard;
