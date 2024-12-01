'use client';

import { useEffect } from 'react';

export function Particles() {

    useEffect(() => {
        // Run this effect only on the client side
        require("particles.js");
        if (typeof window !== 'undefined' && window.particlesJS) {
            window.particlesJS.load('particles-js', 'particles.json', function() {
                console.log('particles.js loaded');
            });
        }
    }, []); // Empty dependency array means this runs only once after initial mount

    return (
        <div id="particles-js"></div>
    );
}
