import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">JUDGG</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="/match-history" className="transition-colors hover:text-primary">
            전적 검색
          </Link>
          <Link href="/trials" className="transition-colors hover:text-primary">
            재판
          </Link>
          <Link href="/experts" className="transition-colors hover:text-primary">
            전문가 코멘트
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Link href="" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          {/* <Button variant="ghost" size="sm">
            Contact
          </Button> */}
          {/* <Button size="sm">예약하기</Button> */}
        </div>
      </div>
    </header>
  )
}

