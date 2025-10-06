export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-20">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground">About</h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-pretty">
              I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful
              design with robust engineering. My favorite work lies at the intersection of design and development,
              creating experiences that not only look great but are meticulously built for performance and usability.
            </p>
            <p className="text-pretty">
              Currently, I'm a Senior Front-End Engineer at{" "}
              <span className="font-semibold text-foreground">Company Name</span>, specializing in accessibility. I
              contribute to the creation and maintenance of UI components that power the company's frontend, ensuring
              our platform meets web accessibility standards and best practices to deliver an inclusive user experience.
            </p>
            <p className="text-pretty">
              In the past, I've had the opportunity to develop software across a variety of settings — from{" "}
              <span className="font-semibold text-foreground">advertising agencies</span> and{" "}
              <span className="font-semibold text-foreground">large corporations</span> to{" "}
              <span className="font-semibold text-foreground">start-ups</span> and{" "}
              <span className="font-semibold text-foreground">small digital product studios</span>. Additionally, I also
              released a <span className="font-semibold text-foreground">comprehensive video course</span> a few years
              ago, guiding learners through building a web app with modern technologies.
            </p>
            <p className="text-pretty">
              In my spare time, I'm usually climbing, reading, hanging out with my family, or exploring new places with
              my camera.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
