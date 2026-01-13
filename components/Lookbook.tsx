"use client";

import {
    motion,
    useInView,
    useMotionValue,
    useScroll,
    useTransform,
} from "framer-motion";
import ReactLenis from "lenis/react";
import { useEffect, useRef, useState } from "react";

const images = [
    "/images/img-1.jpg",
    "/images/img-2.jpg",
    "/images/img-3.jpg",
    "/images/img-4.jpg",
    "/images/img-5.jpg",
    "/images/img-6.jpg",
];

const Lookbook = () => {
    return (
        <ReactLenis root>
            <section id="gallery" className="relative flex w-full flex-col items-center gap-[10vh] px-4 pt-[20vh] pb-[50vh] bg-stone-50 dark:bg-stone-950 transition-colors">
                <div className="absolute left-1/2 top-24 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center">
                    <span className="after:from-stone-800 after:to-stone-400 dark:after:from-white dark:after:to-stone-500 relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:content-[''] text-stone-900 dark:text-white">
                        Scroll down to see effect
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-stone-800 dark:text-stone-100 mt-8">Lookbook</h2>
                </div>
                {images.map((img, idx) => (
                    <StickyCard_003 key={idx} imgUrl={img} />
                ))}
            </section>
        </ReactLenis>
    );
};

const StickyCard_003 = ({ imgUrl }: { imgUrl: string }) => {
    const vertMargin = 20; // Increased margin to reduce height (100 - 40 = 60vh)
    const container = useRef(null);
    const [maxScrollY, setMaxScrollY] = useState(Infinity);

    const filter = useMotionValue(0);
    // Remove filter2, add negateFilter
    const negateFilter = useTransform(filter, (value) => -value);

    const { scrollY } = useScroll({
        target: container,
    });
    const scale = useTransform(scrollY, [maxScrollY, maxScrollY + 10000], [1, 0]);
    const isInView = useInView(container, {
        margin: `0px 0px -${100 - vertMargin}% 0px`,
        once: true,
    });

    scrollY.on("change", (scrollY) => {
        let animationValue = 1;
        if (scrollY > maxScrollY) {
            animationValue = Math.max(0, 1 - (scrollY - maxScrollY) / 10000);
        }

        scale.set(animationValue);
        filter.set((1 - animationValue) * 100);
    });

    useEffect(() => {
        if (isInView) {
            setMaxScrollY(scrollY.get());
        }
    }, [isInView]);

    return (
        <motion.div
            ref={container}
            className="rounded-[2rem] sticky h-[200px] w-full max-w-2xl overflow-hidden bg-neutral-200 shadow-2xl"
            style={{
                scale: scale,
                rotate: filter,
                height: `${100 - 2 * vertMargin}vh`,
                top: `${vertMargin}vh`,
            }}
        >
            <motion.img
                src={imgUrl}
                alt={imgUrl}
                style={{
                    rotate: negateFilter,
                }}
                className="h-full w-full scale-125 object-cover"
                sizes="90vw"
            />
        </motion.div>
    );
};

export default Lookbook;
