import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, shopping cart, and payment integration.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "/task-management-dashboard.png",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Portfolio Builder",
    description:
      "A drag-and-drop portfolio builder that allows users to create beautiful portfolio websites without coding.",
    image: "/portfolio-builder-interface.png",
    technologies: ["Vue.js", "Firebase", "Vuetify"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard with detailed forecasts, interactive maps, and location-based alerts.",
    image: "/weather-dashboard-maps.png",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
]

export function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:border-accent transition-colors">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View on GitHub"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="View live site">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
