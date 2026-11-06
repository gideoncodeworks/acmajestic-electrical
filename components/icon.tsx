import type { CSSProperties, ReactNode } from 'react'

const paths: Record<string, ReactNode> = {
  bolt: (
    <path d="M13 2 4 14h7l-2 8 10-13h-7l1-7z" strokeLinejoin="round" strokeLinecap="round" />
  ),
  panel: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <line x1="8" y1="7" x2="16" y2="7" />
      <line x1="8" y1="11" x2="16" y2="11" />
      <line x1="8" y1="15" x2="16" y2="15" />
      <circle cx="18.5" cy="19" r="0.5" fill="currentColor" stroke="none" />
    </>
  ),
  outlet: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <circle cx="9.5" cy="10" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="10" r="0.9" fill="currentColor" stroke="none" />
      <rect x="10" y="15" width="4" height="1.5" rx="0.5" fill="currentColor" stroke="none" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 0 0-4 10.5c.8.8 1.3 1.8 1.5 3h5c.2-1.2.7-2.2 1.5-3A6 6 0 0 0 12 3z" />
    </>
  ),
  house: (
    <>
      <path d="M3 11 12 3l9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  hammer: (
    <>
      <path d="M14 5 7 12l-3-1 7-7 3 1z" />
      <path d="M14 5l4 4" />
      <path d="M9 10l-6 6 3 3 6-6" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <line x1="8" y1="7" x2="10" y2="7" />
      <line x1="14" y1="7" x2="16" y2="7" />
      <line x1="8" y1="11" x2="10" y2="11" />
      <line x1="14" y1="11" x2="16" y2="11" />
      <line x1="8" y1="15" x2="10" y2="15" />
      <line x1="14" y1="15" x2="16" y2="15" />
      <path d="M10 21v-3h4v3" />
    </>
  ),
  shield: (
    <path d="M12 3 4 6v6c0 4.5 3.2 8.4 8 9 4.8-.6 8-4.5 8-9V6l-8-3z" />
  ),
  phone: (
    <path d="M5 4h3l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="16" y1="3" x2="16" y2="7" />
    </>
  ),
  check: (
    <path d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
  ),
  arrow: (
    <>
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="14 6 20 12 14 18" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21c-4-5-7-8.5-7-12a7 7 0 0 1 14 0c0 3.5-3 7-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </>
  ),
  menu: (
    <>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </>
  ),
  close: (
    <>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </>
  ),
  star: (
    <path
      d="M12 3l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6L3.4 9.3l6-.8L12 3z"
      strokeLinejoin="round"
    />
  ),
  crown: (
    <>
      <path d="M3 8l4 4 5-7 5 7 4-4-2 11H5L3 8z" />
      <line x1="5" y1="20" x2="19" y2="20" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </>
  ),
}

type IconProps = {
  name: keyof typeof paths | string
  size?: number
  strokeWidth?: number
  className?: string
  style?: CSSProperties
}

export default function Icon({
  name,
  size = 22,
  strokeWidth = 1.6,
  className,
  style,
}: IconProps) {
  const path = paths[name]
  if (!path) return null
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {path}
    </svg>
  )
}
