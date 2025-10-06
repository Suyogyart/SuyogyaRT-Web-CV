import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "2024 — Present",
    title: "Senior Frontend Engineer, Accessibility",
    company: "Company Name",
    companyUrl: "https://example.com",
    description:
      "Build and maintain critical components used to construct the frontend of the platform. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    technologies: ["JavaScript", "TypeScript", "React", "Storybook"],
  },
  {
    period: "2020 — 2024",
    title: "Frontend Developer",
    company: "Previous Company",
    companyUrl: "https://example.com",
    description:
      "Developed and maintained responsive web applications for various clients. Collaborated with design teams to implement pixel-perfect interfaces and ensure optimal user experience across all devices.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
  },
  {
    period: "2018 — 2020",
    title: "Junior Web Developer",
    company: "Startup Inc",
    companyUrl: "https://example.com",
    description:
      "Contributed to the development of the company's main product, a SaaS platform for project management. Implemented new features and fixed bugs across the full stack.",
    technologies: ["Vue.js", "Python", "Django", "PostgreSQL"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="min-h-screen flex items-center px-6 py-20">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative">
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <p className="text-sm text-muted-foreground min-w-[140px]">{exp.period}</p>
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                          {exp.title} · {exp.company}
                          <ExternalLink className="inline-block ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
