import { shopInfo } from '../data/shopData'

export default function ShopProfile() {
  return (
    <div className="card overflow-hidden">
      {/* 카드 상단 배너 — 아바타 & 상점명 포함 */}
      <div className="h-28 bg-gradient-to-r from-green-600 via-green-500 to-emerald-400 relative">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, white 1px, transparent 1px), radial-gradient(circle at 70% 30%, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* 배지 */}
        <div className="absolute top-3 right-4 bg-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
          {shopInfo.badge}
        </div>
        {/* 아바타 & 상점명 — 배너 내부 하단 배치 */}
        <div className="absolute bottom-4 left-6 flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-3xl flex-shrink-0">
            🍏
          </div>
          <div>
            <h2 className="text-lg font-extrabold text-white drop-shadow leading-tight">
              {shopInfo.name}
            </h2>
            <p className="text-sm text-green-100 font-medium">대표 · {shopInfo.owner}</p>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 pt-5">

        {/* 소개글 */}
        <p className="text-sm text-green-900/80 leading-relaxed bg-green-50 rounded-xl px-4 py-3 border border-green-100 mb-5">
          {shopInfo.description}
        </p>

        {/* 연락처 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <ContactItem
            icon="📞"
            label="전화"
            value={shopInfo.phone}
            href={`tel:${shopInfo.phone}`}
          />
          <ContactItem
            icon="✉️"
            label="이메일"
            value={shopInfo.email}
            href={`mailto:${shopInfo.email}`}
          />
          <ContactItem
            icon="📸"
            label="인스타그램"
            value={shopInfo.instagram}
            href={shopInfo.instagramUrl}
            external
          />
        </div>
      </div>
    </div>
  )
}

function ContactItem({ icon, label, value, href, external }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-3 p-3 rounded-xl bg-green-50 hover:bg-green-100 border border-green-100 hover:border-green-300 transition-all duration-200 group"
    >
      <span className="text-xl flex-shrink-0">{icon}</span>
      <div className="min-w-0">
        <p className="text-[10px] text-green-500 font-semibold uppercase tracking-wider">{label}</p>
        <p className="text-xs font-medium text-green-800 truncate group-hover:text-green-600 transition-colors">
          {value}
        </p>
      </div>
    </a>
  )
}
