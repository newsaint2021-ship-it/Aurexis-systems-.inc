"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface HeroFilmProps {
  ready?: boolean;
}

export default function HeroFilm({ ready = true }: HeroFilmProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [hasReducedMotion, setHasReducedMotion] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setHasReducedMotion(true);
      setIsPlaying(false);
      return;
    }

    const video = videoRef.current;
    if (video && ready) {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            setIsPlaying(false);
          });
      }
    }
  }, [ready]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-darkBg group">
      {/* Instant poster placeholder for zero layout shift */}
      <Image
        src="/brand/hero-poster.webp"
        alt="Aurexis Digital Studio Hero Visual"
        fill
        priority
        className={`object-cover object-center transition-opacity duration-700 pointer-events-none select-none ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
        sizes="(min-width: 1024px) 60vw, 100vw"
      />

      {/* Cinematic editorial film */}
      <video
        ref={videoRef}
        src="/brand/hero-visuals.mp4"
        poster="/brand/hero-poster.jpg"
        autoPlay={!hasReducedMotion}
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setIsLoaded(true)}
        className="w-full h-full object-cover object-center"
      />

      {/* Discreet accessible play/pause control */}
      <div className="absolute top-4 right-4 z-20">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause background film" : "Play background film"}
          className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full bg-darkBg/60 backdrop-blur-md border border-darkText/20 text-darkText/80 hover:text-darkText hover:border-darkText/50 hover:bg-darkBg/80 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-darkText/40"
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
  );
}
