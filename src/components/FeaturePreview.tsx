import { COD_PREVIEW_VIDEO } from '../data/media'

type FeaturePreviewProps = {
  className?: string
  wide?: boolean
}

/** Self-hosted muted COD cheat-gameplay loop. */
export function FeaturePreview({ className = '', wide = false }: FeaturePreviewProps) {
  return (
    <div className={`video-brand-mask border border-z-soft/20 ${className}`.trim()}>
      <div
        className={`relative w-full overflow-hidden ${wide ? 'aspect-video lg:aspect-[21/9]' : 'aspect-video'}`}
      >
        <img
          src={COD_PREVIEW_VIDEO.poster}
          alt={COD_PREVIEW_VIDEO.title}
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
          poster={COD_PREVIEW_VIDEO.poster}
          aria-label={COD_PREVIEW_VIDEO.title}
        >
          <source src={COD_PREVIEW_VIDEO.src} type="video/mp4" />
        </video>
        <div className="preview-loop-tint pointer-events-none absolute inset-0" aria-hidden />
      </div>
      <p className="sr-only">{COD_PREVIEW_VIDEO.title}</p>
    </div>
  )
}
