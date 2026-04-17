import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { to: '/',      label: '홈' },
    { to: '/shop',  label: '상점 보기' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* 로고 */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🌿</span>
            <span className="text-xl font-extrabold text-green-700 group-hover:text-green-600 transition-colors">
              초록장터
            </span>
          </Link>

          {/* PC 네비게이션 */}
          <nav className="hidden sm:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  pathname === to
                    ? 'bg-green-600 text-white shadow-sm'
                    : 'text-green-700 hover:bg-green-50 hover:text-green-800'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/shop"
              className="ml-2 px-5 py-2 bg-orange-400 hover:bg-orange-500 text-white text-sm font-semibold rounded-full shadow transition-all duration-200 hover:-translate-y-0.5"
            >
              장터 구경하기 →
            </Link>
          </nav>

          {/* 모바일 햄버거 버튼 */}
          <button
            className="sm:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-green-50 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="메뉴 열기"
          >
            <span className={`block w-6 h-0.5 bg-green-700 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-green-700 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-green-700 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {menuOpen && (
        <div className="sm:hidden border-t border-green-100 bg-white px-4 pb-4 pt-2 flex flex-col gap-1">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                pathname === to
                  ? 'bg-green-600 text-white'
                  : 'text-green-700 hover:bg-green-50'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/shop"
            onClick={() => setMenuOpen(false)}
            className="mt-1 px-4 py-2.5 bg-orange-400 text-white text-sm font-semibold rounded-xl text-center"
          >
            장터 구경하기 →
          </Link>
        </div>
      )}
    </header>
  )
}
