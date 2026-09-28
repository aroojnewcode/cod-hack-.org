import { DAYZ_HOME_VIDEO } from '../data/media'

type DayZPreviewProps = {
  className?: string
  /** Wider crop on product page */
  wide?: boolean
}

/** Self-hosted muted COD cheat-gameplay loop (no YouTube embed). */
export function DayZPreview({ className = '', wide = false }: DayZPreviewProps) {
  return (
    <div className={`video-brand-mask border border-z-soft/20 ${className}`.trim()}>
      <div
        className={`relative w-full overflow-hidden ${wide ? 'aspect-video lg:aspect-[21/9]' : 'aspect-video'}`}
      >
        <img
          src={DAYZ_HOME_VIDEO.poster}
          alt={DAYZ_HOME_VIDEO.title}
          width={1280}
          height={720}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <video
          className="preview-loop-video absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={DAYZ_HOME_VIDEO.poster}
          aria-label={DAYZ_HOME_VIDEO.title}
        >
          <source src={DAYZ_HOME_VIDEO.src} type="video/mp4" />
        </video>
        <div className="preview-loop-tint pointer-events-none absolute inset-0" aria-hidden />
      </div>
      <p className="sr-only">{DAYZ_HOME_VIDEO.title}</p>
    </div>
  )
}
