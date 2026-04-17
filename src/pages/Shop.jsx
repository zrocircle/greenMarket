import { useState } from 'react'
import ShopProfile from '../components/ShopProfile'
import ProductCard from '../components/ProductCard'
import PurchaseModal from '../components/PurchaseModal'
import { products, shopInfo } from '../data/shopData'

export default function Shop() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="bg-gradient-to-b from-green-50/60 to-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* 페이지 헤더 */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
            🏪 상점 정보
          </div>
          <h1 className="text-3xl font-extrabold text-green-900 leading-tight">
            후기성도 직거래 장터
          </h1>
          <p className="text-green-600 text-sm mt-1">
            신선한 과일을 산지에서 직접 선별해 드립니다
          </p>
        </div>

        {/* ── 상점 프로필 카드 ── */}
        <section aria-label="상점 정보" className="mb-12">
          <ShopProfile />
        </section>

        {/* ── 상품 리스트 섹션 ── */}
        <section aria-label="판매 상품 목록">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title">
              <span>🛒</span> 판매 상품
              <span className="text-base font-medium text-green-500 ml-1">
                ({products.length})
              </span>
            </h2>
            <span className="text-xs text-green-500 bg-green-50 px-3 py-1.5 rounded-full border border-green-100">
              매일 새벽 업데이트
            </span>
          </div>

          {products.length === 0 ? (
            <div className="text-center py-20 text-green-400">
              <span className="text-5xl block mb-4">🌿</span>
              <p className="font-medium">준비 중인 상품이 없습니다.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onInquiry={setSelected}
                />
              ))}
            </div>
          )}
        </section>

        {/* 문의 안내 배너 */}
        <div className="mt-12 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-100 rounded-2xl flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <span className="text-4xl">💬</span>
          <div>
            <h3 className="font-bold text-orange-700 mb-1">원하는 상품이 없으신가요?</h3>
            <p className="text-sm text-orange-600/80">
              전화로 문의하시면 맞춤 주문도 가능합니다.
            </p>
          </div>
          <a
            href={`tel:${shopInfo.phone}`}
            className="ml-auto flex-shrink-0 px-5 py-2.5 bg-orange-400 hover:bg-orange-500 text-white text-sm font-semibold rounded-full shadow transition-all duration-200 hover:-translate-y-0.5"
          >
            📞 전화 문의
          </a>
        </div>

      </div>

      {/* 구매 문의 모달 */}
      {selected && (
        <PurchaseModal
          product={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  )
}
