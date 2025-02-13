"use client"

import React, { useState } from "react";
import { saveEmail } from "../app/api";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function CTA() {
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
    <section className="border-t">
      <div className="container flex flex-col items-center gap-6 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          공정한 LoL 커뮤니티를 만들어갈 준비가 되셨나요?
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          JUDGG와 함께 더 나은 League of Legends 게임 환경을 만들어갑니다. 지금 바로 참여하여 공정하고 투명한 게임
          문화를 선도하세요.
        </p>

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
      </div>
    </section>
  )
}

