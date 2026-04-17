import { Link } from 'react-router-dom'

const FEATURES = [
  { icon: '🌱', title: '산지 직송', desc: '중간 유통을 없애고 생산자가 직접 배송하여 최상의 신선도를 유지합니다.' },
  { icon: '🤝', title: '믿을 수 있는 거래', desc: '판매자 인증과 후기 시스템으로 안심하고 거래할 수 있습니다.' },
  { icon: '🌿', title: '친환경 농산물', desc: '무농약·유기농 인증 상품을 최우선으로 소개합니다.' },
  { icon: '⚡', title: '빠른 배송', desc: '새벽 수확 후 당일 출고로 가장 신선한 상태로 받아보세요.' },
]

const CATEGORIES = [
  { icon: '🍎', name: '과일' },
  { icon: '🥦', name: '채소' },
  { icon: '🐟', name: '수산물' },
  { icon: '🌾', name: '곡물' },
  { icon: '🥛', name: '유제품' },
  { icon: '🍄', name: '버섯·나물' },
]

export default function Home() {
  return (
    <div>
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden hero-pattern bg-gradient-to-br from-green-50 via-white to-emerald-50">
        {/* 배경 장식 원 */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-yellow-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-100/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="flex flex-col lg:flex-row items-center gap-14">

            {/* 텍스트 영역 */}
            <div className="flex-1 text-center lg:text-left animate-fade-in-up">
              {/* 서브 태그 */}
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 shadow-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                신선한 농수산물 직거래 플랫폼
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-green-900 leading-tight mb-4">
                자연이 키운 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">
                  신선함
                </span>
                을 <br />
                식탁 위로
              </h1>

              <p className="text-lg text-green-700/80 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                초록장터는 농부와 어부가 직접 운영하는 우리 동네 신선 장터입니다.
                산지에서 바로 온 제철 농수산물을 합리적인 가격에 만나보세요.
              </p>

              {/* CTA 버튼 */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link to="/shop" className="btn-primary text-base px-8 py-4">
                  🛒 우리 동네 신선한 농수산물 구경하기
                </Link>
                <Link to="/shop" className="btn-outline text-base">
                  상점 보기 →
                </Link>
              </div>

              {/* 스탯 */}
              <div className="flex items-center justify-center lg:justify-start gap-8 mt-10 pt-8 border-t border-green-200/60">
                {[
                  { value: '200+', label: '등록 판매자' },
                  { value: '1,500+', label: '신선 상품' },
                  { value: '98%', label: '고객 만족도' },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <p className="text-2xl font-extrabold text-green-700">{value}</p>
                    <p className="text-xs text-green-500 mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 일러스트 / 이미지 영역 */}
            <div className="flex-1 flex items-center justify-center lg:justify-end">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                {/* 큰 원 배경 */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full opacity-30" />
                <div className="absolute inset-4 bg-gradient-to-br from-green-100 to-white rounded-full shadow-xl flex items-center justify-center">
                  <span className="text-8xl sm:text-9xl select-none">🌿</span>
                </div>

                {/* 플로팅 뱃지들 */}
                <FloatingBadge className="top-4 -right-4 sm:top-8 sm:-right-8" delay="0s">
                  <span className="text-lg">🍎</span>
                  <span className="text-xs font-bold text-green-800">청송 사과</span>
                </FloatingBadge>
                <FloatingBadge className="bottom-8 -left-4 sm:-left-8" delay="0.4s">
                  <span className="text-lg">🍇</span>
                  <span className="text-xs font-bold text-green-800">영동 포도</span>
                </FloatingBadge>
                <FloatingBadge className="top-1/2 -left-6 sm:-left-12 -translate-y-1/2" delay="0.8s">
                  <span className="text-lg">🥦</span>
                  <span className="text-xs font-bold text-green-800">유기농 채소</span>
                </FloatingBadge>
              </div>
            </div>
          </div>
        </div>

        {/* 아래 스크롤 유도 화살표 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-green-400 animate-bounce-slow">
          <span className="text-xs">스크롤</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── 카테고리 탐색 ── */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title justify-center mb-2">
            <span>🛍️</span> 카테고리 탐색
          </h2>
          <p className="text-center text-green-600/70 text-sm mb-10">
            원하는 카테고리를 선택해 신선한 상품을 찾아보세요
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {CATEGORIES.map(({ icon, name }) => (
              <Link
                to="/shop"
                key={name}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-green-50 hover:bg-green-100 border border-green-100 hover:border-green-300 transition-all duration-200 hover:-translate-y-1 group"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform duration-200">{icon}</span>
                <span className="text-xs font-semibold text-green-700">{name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 특징 섹션 ── */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title justify-center mb-2">
              <span>✨</span> 초록장터를 선택해야 하는 이유
            </h2>
            <p className="text-green-600/70 text-sm mt-2">
              생산자와 소비자를 직접 연결하는 믿을 수 있는 플랫폼
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="card p-6 flex flex-col items-center text-center gap-3 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-3xl shadow-sm">
                  {icon}
                </div>
                <h3 className="font-bold text-green-800">{title}</h3>
                <p className="text-sm text-green-600/80 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA 배너 ── */}
      <section className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            지금 바로 신선함을 만나보세요 🌾
          </h2>
          <p className="text-green-100 mb-8 text-base sm:text-lg">
            오늘 수확한 제철 농수산물, 초록장터에서 바로 받아보세요.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-400 hover:bg-orange-500 text-white font-bold rounded-full text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            🛒 상점 구경하러 가기
          </Link>
        </div>
      </section>
    </div>
  )
}

function FloatingBadge({ children, className, delay }) {
  return (
    <div
      className={`absolute flex items-center gap-1.5 bg-white rounded-full shadow-lg px-3 py-2 animate-bounce-slow ${className}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  )
}
