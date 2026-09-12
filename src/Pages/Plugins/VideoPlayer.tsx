import { useRef, useState } from 'react'
import { Button, Card, CardBody, CardHeader } from 'oks-ui'
import { Pause, Play, Volume2, VolumeX } from 'lucide-react'
import { PageHeader } from '../../Components/ui'

const VIDEO_MP4 = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
const VIDEO_WEBM = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm'

interface VideoCardProps {
  title: string
  description: string
}

function VideoCard({ title, description }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const togglePlay = () => {
    const el = videoRef.current
    if (!el) return
    if (el.paused) {
      el.play()
    } else {
      el.pause()
    }
  }

  const toggleMute = () => {
    const el = videoRef.current
    if (!el) return
    el.muted = !el.muted
    setIsMuted(el.muted)
  }

  return (
    <Card>
      <CardHeader>
        <h3 className="text-[14px] font-medium" style={{ color: 'var(--app-fg)' }}>
          {title}
        </h3>
        <p className="mt-0.5 text-[12px]" style={{ color: 'var(--app-fg-muted)' }}>
          {description}
        </p>
      </CardHeader>
      <CardBody className="pt-0">
        <div className="overflow-hidden rounded-[var(--oks-radius-md)]" style={{ border: '1px solid var(--app-border)' }}>
          <video
            ref={videoRef}
            controls
            className="w-full"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src={VIDEO_MP4} type="video/mp4" />
            <source src={VIDEO_WEBM} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <Button
            size="sm"
            variant="bordered"
            color="default"
            isIconOnly
            aria-label={isPlaying ? 'Pause' : 'Play'}
            onPress={togglePlay}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </Button>
          <Button
            size="sm"
            variant="bordered"
            color="default"
            isIconOnly
            aria-label={isMuted ? 'Unmute' : 'Mute'}
            onPress={toggleMute}
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </Button>
          <span className="text-[12px]" style={{ color: 'var(--app-fg-muted)' }}>
            Custom controls drive the video element via a ref — the built-in browser controls stay available too.
          </span>
        </div>
      </CardBody>
    </Card>
  )
}

export default function VideoPlayer() {
  return (
    <div>
      <PageHeader
        title="Video player"
        subtitle="Native video playback with an oks-ui control row layered on top."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Pages' }, { label: 'Video player' }]}
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <VideoCard title="Product walkthrough" description="A short clip used as a stand-in for real product footage." />
        <VideoCard title="Onboarding welcome" description="Shown to new members the first time they open a workspace." />
      </div>
    </div>
  )
}
