"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: string // ISO date string
  label?: string
}

export function CountdownTimer({ targetDate, label = "Early Bird Registration Ends" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
        setIsExpired(false)
      } else {
        setIsExpired(true)
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (isExpired) {
    return (
      <div className="bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-lg p-4 mb-6">
        <p className="text-accent font-semibold text-lg">Early Bird Registration Has Ended</p>
      </div>
    )
  }

  return (
    <div className="bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-lg p-4 mb-6">
      <p className="text-primary font-semibold text-sm mb-2 uppercase tracking-wide">{label}</p>
      <div className="flex justify-center gap-4">
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-primary">{timeLeft.days}</div>
          <div className="text-xs text-primary/80 uppercase">Days</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-primary">{timeLeft.hours}</div>
          <div className="text-xs text-primary/80 uppercase">Hours</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-primary">{timeLeft.minutes}</div>
          <div className="text-xs text-primary/80 uppercase">Minutes</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-primary">{timeLeft.seconds}</div>
          <div className="text-xs text-primary/80 uppercase">Seconds</div>
        </div>
      </div>
    </div>
  )
}
