type Props = { className?: string }
export default function CartIcon({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3h2l.4 2M7 13h10l3-8H6.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="9" cy="19" r="2" fill="currentColor" />
      <circle cx="17" cy="19" r="2" fill="currentColor" />
    </svg>
  )
}
