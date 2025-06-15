"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export const SmoothScroll = ({ children }: { children: any }) => {
    useEffect(() => {
        const lenis = new Lenis()
        const raf = (time: any) => {
            lenis.raf(time)
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);
    }, []);

    return <div>
        {children}
    </div>
};

export default SmoothScroll;
