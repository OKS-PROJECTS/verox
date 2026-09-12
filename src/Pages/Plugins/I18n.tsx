import { useState } from 'react'
import { Button, Card, CardBody, CardHeader, Chip, SelectField } from 'oks-ui'
import { Globe } from 'lucide-react'
import { PageHeader } from '../../Components/ui'

type LangCode = 'en' | 'es' | 'fr' | 'de' | 'ja' | 'hi'

interface LangOption {
  code: LangCode
  label: string
  region: string
}

const LANGUAGES: LangOption[] = [
  { code: 'en', label: 'English', region: 'US' },
  { code: 'es', label: 'Español', region: 'ES' },
  { code: 'fr', label: 'Français', region: 'FR' },
  { code: 'de', label: 'Deutsch', region: 'DE' },
  { code: 'ja', label: '日本語', region: 'JP' },
  { code: 'hi', label: 'हिन्दी', region: 'IN' },
]

const STRINGS: Record<LangCode, { greeting: string; tagline: string; cta: string }> = {
  en: { greeting: 'Welcome back, David', tagline: "Here's what's happening today.", cta: 'View dashboard' },
  es: { greeting: 'Bienvenido de nuevo, David', tagline: 'Esto es lo que pasa hoy.', cta: 'Ver panel' },
  fr: { greeting: 'Content de te revoir, David', tagline: "Voici ce qu'il se passe aujourd'hui.", cta: 'Voir le tableau de bord' },
  de: { greeting: 'Willkommen zurück, David', tagline: 'Das passiert heute.', cta: 'Dashboard öffnen' },
  ja: { greeting: 'おかえりなさい、David', tagline: '本日の状況はこちらです。', cta: 'ダッシュボードを見る' },
  hi: { greeting: 'वापसी पर स्वागत है, David', tagline: 'आज का सारांश यह है।', cta: 'डैशबोर्ड देखें' },
}

export default function I18n() {
  const [lang, setLang] = useState<LangCode>('en')
  const strings = STRINGS[lang]

  return (
    <div>
      <PageHeader
        title="Language and region"
        subtitle="Preview how workspace strings change per locale."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Pages' }, { label: 'Language & region' }]}
      />

      <div className="mx-auto flex max-w-lg flex-col gap-5">
        <Card>
          <CardHeader>
            <h3 className="text-[14px] font-medium" style={{ color: 'var(--app-fg)' }}>
              Display language
            </h3>
          </CardHeader>
          <CardBody className="pt-0">
            <SelectField
              label="Language"
              startIcon={<Globe size={15} />}
              value={lang}
              onChange={(v) => setLang(v as LangCode)}
              options={LANGUAGES.map((l) => ({
                value: l.code,
                label: `${l.label} (${l.region})`,
              }))}
            />
            <p className="mt-2 text-[12px]" style={{ color: 'var(--app-fg-muted)' }}>
              Applies to greetings, buttons and dates across the workspace. Members can override it from their own
              profile.
            </p>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="flex items-center justify-between">
            <h3 className="text-[14px] font-medium" style={{ color: 'var(--app-fg)' }}>
              Live preview
            </h3>
            <Chip size="sm" variant="bordered" color="default">
              {LANGUAGES.find((l) => l.code === lang)?.region}
            </Chip>
          </CardHeader>
          <CardBody className="pt-0">
            <p className="text-[16px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
              {strings.greeting}
            </p>
            <p className="mt-1 text-[13px]" style={{ color: 'var(--app-fg-muted)' }}>
              {strings.tagline}
            </p>
            <Button className="mt-4" color="primary">
              {strings.cta}
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
