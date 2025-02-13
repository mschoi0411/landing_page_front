"use client"
// import { Button } from "@/components/ui/button"
// import { ArrowRight } from "lucide-react"
import React, { useState } from "react";
import { saveEmail } from "../app/api";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function Hero() {

  const [showEmailInput, setShowEmailInput] = useState(false)
    const [email, setEmail] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
  
      if (!email) return
  
      try {
        await saveEmail(email)
        setShowEmailInput(false)
        setEmail("")
        setIsSubmitted(true)
  
        setTimeout(() => setIsSubmitted(false), 3000) // 3초 후 메시지 숨김
      } catch (error) {
        console.error("이메일 제출 오류:", error)
        alert("이메일 제출에 실패했습니다. 다시 시도해주세요.")
      }
    }


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

        {/* 이메일 제출 UI */}
        {!showEmailInput ? (
          <Button size="lg" className="mt-4" onClick={() => setShowEmailInput(true)}>
            지금 시작하기
          </Button>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 w-full max-w-md">
            <div className="flex">
              <Input
                type="email"
                placeholder="이메일을 입력하세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow mr-2"
              />
              <Button type="submit">제출</Button>
            </div>
          </form>
        )}

      {/* 이메일 제출 후 메시지 */}
      {isSubmitted && (
        <Card className="mt-4 w-full max-w-sm bg-green-100 border-green-500">
          <CardContent className="p-4 text-green-700">
            <p>감사합니다! 곧 연락 드리겠습니다.</p>
          </CardContent>
        </Card>
      )}
    </section>
  )
}

