import React from 'react';

// ─── SVG Icons ────────────────────────────────────────────────────────────────
export const IdeationIcon = () => (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="21" cy="17" r="10" stroke="#222" strokeWidth="1.8" />
        <line x1="21" y1="27" x2="21" y2="33" stroke="#222" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="16" y1="35" x2="26" y2="35" stroke="#222" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="21" y1="8" x2="21" y2="10" stroke="#222" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="12" y1="11" x2="13.5" y2="12.5" stroke="#222" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="30" y1="11" x2="28.5" y2="12.5" stroke="#222" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M18 20 L21 17 L24 20" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const MoodBoardIcon = () => (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="15" height="15" rx="2" stroke="#222" strokeWidth="1.8" />
        <rect x="23" y="4" width="15" height="15" rx="2" stroke="#222" strokeWidth="1.8" />
        <rect x="4" y="23" width="15" height="15" rx="2" stroke="#222" strokeWidth="1.8" />
        <rect x="23" y="23" width="15" height="15" rx="2" stroke="#222" strokeWidth="1.8" />
        <line x1="30" y1="27" x2="30" y2="33" stroke="#222" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="27" y1="30" x2="33" y2="30" stroke="#222" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);

export const UserFlowIcon = () => (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 21 C8 21 14 8 21 8 C28 8 34 21 34 21 C34 21 28 34 21 34 C14 34 8 21 8 21Z" stroke="#222" strokeWidth="1.8" />
        <circle cx="21" cy="21" r="5" stroke="#222" strokeWidth="1.8" />
    </svg>
);

export const WireframeIcon = () => (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 36 L14 10 L24 28 L31 18 L38 36" stroke="#222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14" cy="10" r="2.5" stroke="#222" strokeWidth="1.5" />
        <circle cx="31" cy="18" r="2.5" stroke="#222" strokeWidth="1.5" />
    </svg>
);

export const PrototypingIcon = () => (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="21" r="5" stroke="#222" strokeWidth="1.8" />
        <circle cx="32" cy="10" r="5" stroke="#222" strokeWidth="1.8" />
        <circle cx="32" cy="32" r="5" stroke="#222" strokeWidth="1.8" />
        <line x1="15" y1="19" x2="27" y2="12" stroke="#222" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="15" y1="23" x2="27" y2="30" stroke="#222" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);
// ──────────────────────────────────────────────────────────────────────────────

export const designSteps = [
    {
        id: '01',
        Icon: IdeationIcon,
        title: 'Ideation',
        description:
            'I began by identifying a personal pain point—the challenge of finding and accessing street food. This led to the central idea of an app that solves this problem with a clear, user-focused solution: a delivery service for street food vendors.',
        raised: false,
    },
    {
        id: '02',
        Icon: MoodBoardIcon,
        title: 'Mood Board',
        description:
            "I created a mood board to capture the energetic and authentic feel of street food culture. The color palette and typography were directly inspired by the rich spices and lively atmosphere of the stalls, ensuring the app's visual identity felt genuine and welcoming.",
        raised: true,
    },
    {
        id: '03',
        Icon: UserFlowIcon,
        title: 'User Flow',
        description:
            'I mapped out the entire user journey, from opening the app to placing an order, to ensure a smooth and logical experience. This sitemap helped me visualize every screen and interaction, making sure the path to the end goal was as direct as possible.',
        raised: false,
    },
    {
        id: '04',
        Icon: WireframeIcon,
        title: 'Wireframing & Testing',
        description:
            'Starting with quick paper sketches, I moved to low-fidelity digital wireframes to establish the basic layout of each screen. I conducted self-testing and gathered informal feedback to validate the design and refine the placement of key elements, like buttons and text.',
        raised: true,
    },
    {
        id: '05',
        Icon: PrototypingIcon,
        title: 'Prototyping',
        description:
            "The final step was converting the low-fidelity wireframes into high-fidelity mockups, complete with the final colors and fonts. I then linked these screens to create an interactive prototype, which allowed me to simulate the full user experience and demonstrate the app's functionality.",
        raised: false,
    },
];
