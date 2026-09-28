const HERO_POSTER = '/media/hero-poster.webp'
const HERO_VIDEO = '/videos/hero-loop.mp4'

type VideoBgProps = {
  /** Poster shown before the loop starts and when motion is reduced. */
  image?: string
  imageAlt?: string
  video?: string
}

/** Full-bleed hero loop — short muted MP4 with a static poster fallback. */
export function VideoBg({
  image = HERO_POSTER,
  imageAlt = 'Call of Duty hack Aimbot and ESP gameplay',
  video = HERO_VIDEO,
}: VideoBgProps) {
  return (
    <div className="hero-video-wrap absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 z-0 bg-z-bg" aria-hidden />
      <img
        src={image}
        alt={imageAlt}
        width={1280}
        height={720}
        decoding="async"
        fetchPriority="high"
        className="hero-video-bg absolute inset-0 z-[1] h-full w-full object-cover object-[50%_42%]"
      />
      {video ? (
        <video
          className="hero-video-bg hero-video-loop absolute inset-0 z-[1] h-full w-full object-cover object-[50%_42%]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={image}
          aria-hidden
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : null}
      <div className="hero-video-tint pointer-events-none absolute inset-0 z-[2]" aria-hidden />
      <div className="hero-video-tint-glow pointer-events-none absolute inset-0 z-[2]" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 z-[3] h-40 bg-gradient-to-t from-z-bg via-z-bg/80 to-transparent" />
      <div className="absolute inset-x-0 top-0 z-[3] h-24 bg-gradient-to-b from-z-bg/70 to-transparent" />
    </div>
  )
}
