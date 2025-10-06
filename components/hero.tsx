import { Github, Linkedin, Mail, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-balance">SUYOGYA RATNA TAMRAKAR</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">MOBILE APP DEVELOPER</p>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I build accessible, pixel-perfect digital experiences for the mobile.
          </p>
          <div className="flex gap-4 pt-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/suyogyart" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/suyogya-ratna-t-69580587" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:suyogya.tamrakar@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.instagram.com/suyogyart" target="_blank" rel="noopener noreferrer" aria-label="Photography">
                <Camera className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
