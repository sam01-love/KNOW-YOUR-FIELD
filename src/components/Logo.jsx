import { Link } from 'react-router-dom'
export default function Logo({ light = false, size = 36 }) {
  return (
    <Link to="/" className={'logo' + (light ? ' light' : '')} aria-label="Know Your Field home">
      <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="24" fill="none" stroke="#00A896" strokeWidth="6" />
        <path d="M32 4v12M32 48v12M4 32h12M48 32h12" stroke={light ? '#fff' : '#0B1F44'} strokeWidth="4" strokeLinecap="round" />
        <path d="M46 16 26 30l7 4 4 9z" fill="#F4B400" />
        <path d="M26 30 17 47l16-13z" fill="#7FDBD3" />
      </svg>
      <span>Know Your<b>Field</b></span>
    </Link>
  )
}
