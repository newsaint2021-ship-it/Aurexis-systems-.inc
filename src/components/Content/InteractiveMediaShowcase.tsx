"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { spectralBridgeRegular } from "@/fonts/font";
import type { ContentMedia } from "@/utils/content";

function MediaCard({ item }: { readonly item: ContentMedia }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasReducedMotion, setHasReducedMotion] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setHasReducedMotion(true);
      setIsPlaying(false);
      return;
    }

    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex flex-col border-[1px] border-lightText20 dark:border-darkText20 p-4 md:p-6 bg-lightBg/40 dark:bg-darkBg/40 backdrop-blur-sm">
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-black/5 dark:bg-white/5 group">
        <Image
          src={item.posterSrc}
          alt={item.title}
          fill
          className={`object-cover object-center transition-opacity duration-700 pointer-events-none select-none ${
            isLoaded ? "opacity-0" : "opacity-100"
          }`}
          sizes="(min-width: 1024px) 40vw, 100vw"
        />
        <video
          ref={videoRef}
          src={item.videoSrc}
          poster={item.posterSrc}
          autoPlay={!hasReducedMotion}
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedData={() => setIsLoaded(true)}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute top-3 right-3 z-20">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? `Pause ${item.title}` : `Play ${item.title}`}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-darkBg/70 text-darkText/90 border border-darkText/20 hover:bg-darkBg transition-all focus:outline-none"
          >
            {isPlaying ? (
              <svg
                className="w-3.5 h-3.5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg
                className="w-3.5 h-3.5 fill-current translate-x-0.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-[17px] md:text-[20px] font-medium text-lightText dark:text-darkText">
          {item.title}
        </h3>
        <p className="mt-2 text-[13.5px] md:text-[14.5px] text-lightText70 dark:text-darkText70 leading-relaxed">
          {item.caption}
        </p>
      </div>
    </div>
  );
}

export default function InteractiveMediaShowcase({
  media,
}: {
  readonly media?: ContentMedia[];
}) {
  if (!media || media.length === 0) return null;

  return (
    <section className="mt-[8vh] pt-[6vh] border-t-[1px] border-t-lightText20 dark:border-t-darkText20">
      <div className="flex flex-col md:flex-row gap-x-[8vw] gap-y-6">
        <div className="md:w-[16vw] shrink-0">
          <span className="text-[12px] uppercase tracking-wider text-lightText60 dark:text-darkText60 block mb-1">
            Media
          </span>
          <p className="text-[14px] md:text-[18px]">Visual Showcase</p>
        </div>
        <div className="flex-1">
          <h2
            className={`${spectralBridgeRegular.className} text-[8vw] md:text-[4vw] leading-[1]`}
          >
            Dimension in motion
          </h2>
          <p className="mt-4 max-w-[62ch] text-[15px] sm:text-[17px] text-lightText80 dark:text-darkText80 leading-relaxed">
            Real lookbook and digital storefront motion demonstrating how
            interactive 3D elements present garments and elevate customer
            engagement.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {media.map((item) => (
              <MediaCard key={item.videoSrc} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
