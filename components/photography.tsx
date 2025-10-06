"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const photos = [
  {
    src: "/majestic-mountain-vista.png",
    alt: "Mountain landscape at sunset",
  },
  {
    src: "/urban-street-photography.png",
    alt: "Urban street scene",
  },
  {
    src: "/nature-forest-photography.jpg",
    alt: "Forest path in autumn",
  },
  {
    src: "/architectural-photography.png",
    alt: "Modern architecture",
  },
  {
    src: "/portrait-photography.png",
    alt: "Portrait photography",
  },
  {
    src: "/coastal-seascape-photography.jpg",
    alt: "Coastal seascape",
  },
]

export function Photography() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  return (
    <section id="photography" className="min-h-screen flex items-center px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground">Photography</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <button
                key={index}
                onClick={() => setSelectedPhoto(index)}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-muted hover:opacity-90 transition-opacity"
              >
                <img
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={selectedPhoto !== null} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-5xl p-0 bg-transparent border-0">
          {selectedPhoto !== null && (
            <img
              src={photos[selectedPhoto].src || "/placeholder.svg"}
              alt={photos[selectedPhoto].alt}
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
