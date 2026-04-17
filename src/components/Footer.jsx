import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* 브랜드 */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl">🌿</span>
              <span className="text-xl font-extrabold text-white">초록장터</span>
            </Link>
            <p className="text-xs text-green-300 mt-1">
              신선한 농수산물, 믿을 수 있는 직거래 장터
            </p>
          </div>

          {/* 링크 */}
          <nav className="flex gap-6 text-sm text-green-300">
            <Link to="/" className="hover:text-white transition-colors">홈</Link>
            <Link to="/shop" className="hover:text-white transition-colors">상점 보기</Link>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-green-800 text-center text-xs text-green-500">
          © 2025 초록장터. 신선함을 전하는 우리 동네 직거래 장터.
        </div>
      </div>
    </footer>
  )
}
