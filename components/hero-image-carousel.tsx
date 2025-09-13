"use client"

import { useEffect, useState } from "react"

const heroImages = [
  "/hero-1.jpg",
  "/hero-2.jpg",
  "/hero-3.png",
  "/hero-4.png",
  "/hero-5.jpg",
]

export function HeroImageCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1))
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${image}')`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  )
}
