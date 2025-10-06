import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Photography } from "@/components/photography"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Photography />
      </main>
      <Footer />
    </div>
  )
}
