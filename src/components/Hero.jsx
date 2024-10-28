'use client'

import React, { useEffect, useState, useRef } from "react"
import { gsap } from "gsap"

export default function Component() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const titleRef = useRef(null)
  const subTitleRef = useRef(null)
  const glitchLayers = useRef([])

  const eventDate = new Date('2024-11-05T08:00:00')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now)

      const difference = eventDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setCountdown({ days, hours, minutes, seconds })
      }
    }

    const intervalId = setInterval(updateTime, 1000)
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )

    const flickerTimeline = gsap.timeline({ repeat: -1, repeatDelay: 5 })
    flickerTimeline
      .to(subTitleRef.current, {
        opacity: 0.3,
        duration: 0.1,
        ease: "power2.inOut",
        yoyo: true,
      })
      .to(subTitleRef.current, {
        opacity: 1,
        duration: 0.2,
        ease: "power2.inOut",
        delay: 0.2,
      })

    const glitchTimeline = gsap.timeline({ repeat: -1, repeatDelay: 7 })
    glitchTimeline
      .set(glitchLayers.current, { opacity: 0 })
      .to(glitchLayers.current, {
        duration: 0.1,
        opacity: 1,
        x: () => Math.random() * 10 - 5,
        scaleX: () => 1 + Math.random() * 0.1,
        scaleY: () => 1 + Math.random() * 0.05,
        repeat: 1,
        yoyo: true,
        stagger: 0.05,
      })
      .to(glitchLayers.current, {
        opacity: 0,
        duration: 0.1,
        delay: Math.random() * 0.5 + 0.2,
      })

    const glitchChars = () => {
      const titleElement = titleRef.current
      let originalText = titleElement.innerText
      const glitchInterval = setInterval(() => {
        const chars = originalText.split("")
        for (let i = 0; i < chars.length; i++) {
          if (Math.random() > 0.9) {
            chars[i] = Math.random() > 0.5 ? "0" : "1"
          }
        }
        titleElement.innerText = chars.join("")
        setTimeout(() => {
          titleElement.innerText = originalText
        }, 50)
      }, 5000)

      return () => clearInterval(glitchInterval)
    }

    glitchChars()
  }, [])

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    return `${hours}:${minutes}`
  }

  return (
    <div className="min-h-screen bg-transparent text-black flex pt-[8vh] md:items-center justify-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left space-y-8 md:space-y-0">
          <div className="relative inline-block">
            <h1
              ref={titleRef}
              className="font-black text-[5.5rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none md:leading-tight"
            >
              <span className="md:hidden">
                DEV
                <br />
                FEST
                <br />
                '24
              </span>
              <span className="hidden md:inline">DEVFEST'24</span>
            </h1>
            {[0, 1].map((index) => (
              <div
                key={index}
                ref={(el) => (glitchLayers.current[index] = el)}
                className="glitch-layer absolute top-0 left-0 w-full h-full pointer-events-none"
              >
                <span className="font-black text-[5.5rem]  sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none md:leading-tight opacity-50">
                  <span className="md:hidden">
                    DEV
                    <br />
                    FEST
                    <br />
                    '24
                  </span>
                  <span className="hidden md:inline">DEVFEST'24</span>
                </span>
              </div>
            ))}
          </div>
          <p
            ref={subTitleRef}
            className="text-xl md:hidden sm:text-2xl md:text-2xl lg:text-3xl mt-4"
          >
            Brought to you by DEVS REC
          </p>
          <div className="mt-8 md:mt-8 md:hidden space-y-4 md:space-y-0 md:space-x-4">
            <p className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold inline-block">
              Where Talent Meets Opportunity
            </p>
            <p className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold inline-block">
              Now OR Never
            </p>
          </div>
          <div className="mt-8 md:flex md:justify-between md:mt-8">
            <p className="text-2xl sm:text-3xl my-auto md:text-3xl lg:text-4xl font-semibold text-black">
              Registrations open soon
            </p>
          </div>
          <div className="mt-8 flex-row md:mt-8">
            <p className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-4">
              Countdown to DevFest'24
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              {Object.entries(countdown).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <p className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold">
                    {value}
                  </p>
                  <p className="text-base sm:text-lg md:text-lg lg:text-xl">
                    {unit.charAt(0).toUpperCase() + unit.slice(1)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}