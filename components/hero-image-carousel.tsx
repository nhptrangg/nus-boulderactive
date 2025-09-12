"use client"

import { useEffect, useState } from "react"

const heroImages = [
  "/indoor-bouldering-competition-climbers-on-colorful.jpg",
  "/bouldering-wall-with-dynamic-climbing-moves-and-ch.jpg",
  "/climbing-competition-crowd-cheering-athletes-bould.jpg",
  "/close-up-bouldering-holds-and-climbing-technique.jpg",
  "/bouldering-gym-with-multiple-climbing-routes-and-a.jpg",
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
