'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * ============================================================
 *  HeroVideo — looping MP4 hero (hyattshair.net vibe)
 *
 *  Drop-in pattern:
 *    1. Save your MP4 to `/public/hero.mp4`
 *    2. (Optional) Save a poster frame to `/public/hero-poster.jpg`
 *    3. Set hasVideo below to `true`
 *
 *  While no video is present, this component renders a soft
 *  millennial-pink gradient placeholder so the hero layout
 *  stays correct during design + dev.
 * ============================================================
 */

const VIDEO_SRC = '/hero.mp4';
const POSTER_SRC = '/hero-poster.jpg';
const hasVideo = false; // ← flip to true once the MP4 is in /public

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    if (!hasVideo) return;
    const v = videoRef.current;
    if (!v) return;
    const onError = () => setVideoFailed(true);
    v.addEventListener('error', onError);
    return () => v.removeEventListener('error', onError);
  }, []);

  function toggleMute() {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  }

  const showPlaceholder = !hasVideo || videoFailed;

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl">
      {hasVideo && !videoFailed && (
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          poster={POSTER_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          aria-label="Studio Salon — inside our Berkeley salon"
        />
      )}

      {showPlaceholder && (
        <div className="absolute inset-0 blush-gradient" aria-hidden="true">
          {/* animated shimmer */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_left,white,transparent_60%)]" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_bottom_right,#B86A7E,transparent_55%)]" />

          {/* Centered brand + tagline + "video coming soon" */}
          <div className="relative h-full w-full flex flex-col items-center justify-center text-center px-6">
            <span
              className="inline-block mb-3 text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-[#8B3A5B] bg-white/50 backdrop-blur-sm rounded-full px-3 py-1"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Video Coming Soon
            </span>
            <span
              className="block text-white/95 font-bold drop-shadow-[0_2px_12px_rgba(184,106,126,0.45)]"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 6vw, 4rem)',
                lineHeight: 1,
                letterSpacing: '0.08em',
              }}
            >
              STUDIO
            </span>
            <span
              className="block text-white/95 font-bold drop-shadow-[0_2px_12px_rgba(184,106,126,0.45)] mt-1"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 6vw, 4rem)',
                lineHeight: 1,
                letterSpacing: '0.08em',
              }}
            >
              SALON
            </span>
            <span
              className="mt-5 text-white/90 text-sm max-w-[240px]"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Berkeley&rsquo;s loc &amp; natural hair specialists
            </span>
          </div>
        </div>
      )}

      {hasVideo && !videoFailed && (
        <button
          onClick={toggleMute}
          aria-label={muted ? 'Unmute video' : 'Mute video'}
          className="absolute bottom-3 right-3 flex items-center justify-center w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          {muted ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L19.5 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L19.5 10.94l-1.72-1.72Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
              <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}
