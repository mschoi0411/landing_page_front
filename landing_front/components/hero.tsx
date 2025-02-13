// import { Button } from "@/components/ui/button"
// import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-4">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          승부의 정의를 가린다!
          <br />
          LoL 커뮤니티 재판 시스템
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          LoL 플레이 중 억울한 판정, 답답한 논쟁? 
          <br/>
          JUDGG에서 지금 바로 정의로운 판결을 경험하세요!
        </p>
      </div>
      {/* <div className="flex gap-4">
        <Button size="lg">
          예약하기
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg">
          Schedule a Demo
        </Button>
      </div> */}
    </section>
  )
}

