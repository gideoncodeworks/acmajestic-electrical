'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

type Variant = 'fade-up' | 'fade' | 'left' | 'right' | 'scale'

type RevealProps = {
  children: ReactNode
  as?: 'div' | 'section' | 'article' | 'header' | 'figure' | 'li' | 'ul'
  variant?: Variant
  delay?: number
  className?: string
}

export default function Reveal({
  children,
  as = 'div',
  variant = 'fade-up',
  delay = 0,
  className = '',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const prefers = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefers) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -80px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const Tag = as as React.ElementType
  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${visible ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
