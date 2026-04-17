export default function ProductCard({ product, onInquiry }) {
  const { name, description, price, unit, tag, tagColor, emoji, imageUrl } = product

  const formatted = price != null ? price.toLocaleString('ko-KR') : null

  return (
    <div className="card flex flex-col overflow-hidden group">
      {/* 이미지 영역 */}
      <div className="relative h-52 overflow-hidden bg-green-50">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextElementSibling.style.display = 'flex'
          }}
        />
        {/* 이미지 로드 실패 시 폴백 */}
        <div
          className="absolute inset-0 items-center justify-center text-6xl bg-green-50"
          style={{ display: 'none' }}
        >
          {emoji}
        </div>

        {/* 태그 뱃지 */}
        {tag && (
          <span className={`absolute top-3 left-3 ${tagColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}>
            {tag}
          </span>
        )}
      </div>

      {/* 텍스트 영역 */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <h3 className="text-base font-bold text-green-800 leading-snug mb-1">
            {emoji} {name}
          </h3>
          <p className="text-sm text-green-700/80 leading-relaxed">
            {description}
          </p>
        </div>

        {/* 구분선 */}
        <div className="border-t border-green-100" />

        {/* 가격 & 규격 */}
        <div className="flex items-end justify-between mt-auto">
          <div>
            <p className="text-[11px] text-green-500 font-medium mb-0.5">{unit}</p>
            {formatted != null ? (
              <p className="text-2xl font-extrabold text-orange-500">
                {formatted}
                <span className="text-base font-semibold">원</span>
              </p>
            ) : (
              <p className="text-lg font-extrabold text-green-600">가격 문의</p>
            )}
          </div>

          {/* 문의 버튼 */}
          <button
            onClick={() => onInquiry(product)}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-full shadow transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            구매 문의
          </button>
        </div>
      </div>
    </div>
  )
}
