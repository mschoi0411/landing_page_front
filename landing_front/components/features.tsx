import { Search, Users, MessageSquare, Scale } from "lucide-react"

const features = [
  {
    name: "전적 검색 기능",
    description: "게임 전적을 세밀하게 분석하여 논쟁의 핵심을 빠르게 파악합니다.",
    icon: Search,
  },
  {
    name: "커뮤니티 기반 재판",
    description: "플레이어들이 직접 참여하는 국민참여재판 시스템으로 공정한 판결을 보장합니다.",
    icon: Users,
  },
  {
    name: "전문가 코멘트",
    description: "코치 및 분석가들의 인사이트를 통해 객관적인 판단과 조언을 제공합니다.",
    icon: MessageSquare,
  },
  {
    name: "재판 여부 결정",
    description: "커뮤니티의 의견을 반영해 재판 여부를 민주적으로 결정합니다.",
    icon: Scale,
  },
]

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">핵심 기능</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
        JUDGG가 제공하는 강력한 기능으로 더 공정하고 투명한 게임 환경을 만들어보세요!
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
