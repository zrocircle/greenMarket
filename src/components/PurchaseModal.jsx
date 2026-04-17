import { useState, useEffect, useCallback } from 'react'
import { bankInfo, shopInfo } from '../data/shopData'

export default function PurchaseModal({ product, onClose }) {
  const [qty, setQty] = useState(1)
  const [form, setForm] = useState({
    name: '', phone: '', email: '', address: '', detail: '', note: '',
  })
  const [errors, setErrors] = useState({})
  const [copied, setCopied] = useState(false)
  const [done, setDone] = useState(false)

  const handleClose = useCallback(() => onClose(), [onClose])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') handleClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [handleClose])

  const unitPrice = product.price
  const total     = unitPrice != null ? unitPrice * qty : null
  const totalFmt  = total != null ? total.toLocaleString('ko-KR') : null

  function change(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  function validate() {
    const e = {}
    if (!form.name.trim())    e.name    = '필수 입력 항목입니다.'
    if (!form.phone.trim())   e.phone   = '필수 입력 항목입니다.'
    if (!form.address.trim()) e.address = '필수 입력 항목입니다.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function copyAccount() {
    navigator.clipboard.writeText(bankInfo.accountNumber).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return

    const lines = [
      '■ 주문 정보',
      `상품명  : ${product.name}`,
      `규격    : ${product.unit}`,
      `수량    : ${qty}개`,
      totalFmt
        ? `총 금액 : ${totalFmt}원`
        : `총 금액 : 가격 문의 (연락 후 안내)`,
      '',
      '■ 배송지 정보',
      `주문자  : ${form.name}`,
      `연락처  : ${form.phone}`,
      form.email   ? `이메일  : ${form.email}` : '',
      `주소    : ${form.address}${form.detail ? ' ' + form.detail : ''}`,
      form.note    ? `요청사항: ${form.note}` : '',
      '',
      '■ 입금 안내',
      `은행    : ${bankInfo.bank}`,
      `계좌    : ${bankInfo.accountNumber}`,
      `예금주  : ${bankInfo.accountHolder}`,
    ].filter(l => l !== undefined).join('\n')

    const subject = encodeURIComponent(`[에녹의정원] 주문문의 - ${product.name}`)
    const body    = encodeURIComponent(lines)
    window.open(`mailto:${shopInfo.email}?subject=${subject}&body=${body}`)
    setDone(true)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}
    >
      <div className="bg-white w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[95vh] overflow-y-auto">

        {/* ── 완료 화면 ── */}
        {done ? (
          <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-5xl mb-6 shadow-inner">
              🌿
            </div>
            <h2 className="text-2xl font-extrabold text-green-800 mb-3">
              구입해 주셔서 감사합니다!
            </h2>
            <p className="text-green-600 text-sm leading-relaxed mb-1">
              열린 이메일 앱에서 <strong>전송</strong>을 눌러주시면
            </p>
            <p className="text-green-600 text-sm leading-relaxed mb-5">
              주문이 최종 완료됩니다.
            </p>
            <div className="w-full bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6 text-left">
              <p className="text-xs font-bold text-amber-700 mb-1">💳 입금 계좌</p>
              <p className="text-base font-extrabold text-amber-900 tracking-wider">
                {bankInfo.bank}  {bankInfo.accountNumber}
              </p>
              <p className="text-xs text-amber-600">예금주: {bankInfo.accountHolder}</p>
            </div>
            <p className="text-xs text-green-400 mb-6">
              입금 확인 후 신속하게 발송해 드리겠습니다 😊
            </p>
            <button onClick={handleClose} className="btn-primary px-10 py-3">
              확인
            </button>
          </div>

        ) : (
          <>
            {/* 헤더 */}
            <div className="sticky top-0 bg-white flex items-center justify-between px-6 pt-5 pb-4 border-b border-green-100 rounded-t-3xl z-10">
              <h2 className="text-lg font-extrabold text-green-800">구매 문의</h2>
              <button
                onClick={handleClose}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-green-50 text-green-400 hover:text-green-700 transition-colors text-lg"
                aria-label="닫기"
              >✕</button>
            </div>

            <form onSubmit={handleSubmit} noValidate className="px-6 py-5 flex flex-col gap-6">

              {/* 상품 미리보기 */}
              <div className="flex items-center gap-4 bg-green-50 rounded-2xl p-4">
                <span className="text-4xl">{product.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-green-800 text-sm leading-snug">{product.name}</p>
                  <p className="text-xs text-green-500 mt-0.5">{product.unit}</p>
                  {unitPrice != null && (
                    <p className="text-sm font-extrabold text-orange-500 mt-1">
                      {unitPrice.toLocaleString('ko-KR')}원 / 1개
                    </p>
                  )}
                </div>
              </div>

              {/* 수량 */}
              <div>
                <p className="text-sm font-semibold text-green-700 mb-2">수량 선택</p>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setQty(q => Math.max(1, q - 1))}
                    className="w-11 h-11 rounded-full border-2 border-green-200 hover:border-green-500 text-green-700 text-2xl font-bold flex items-center justify-center transition-colors"
                  >−</button>
                  <span className="w-8 text-center text-2xl font-extrabold text-green-800">{qty}</span>
                  <button
                    type="button"
                    onClick={() => setQty(q => q + 1)}
                    className="w-11 h-11 rounded-full border-2 border-green-200 hover:border-green-500 text-green-700 text-2xl font-bold flex items-center justify-center transition-colors"
                  >+</button>
                  {totalFmt && (
                    <div className="ml-auto text-right">
                      <p className="text-xs text-green-500">합계</p>
                      <p className="text-xl font-extrabold text-orange-500">{totalFmt}원</p>
                    </div>
                  )}
                </div>
              </div>

              {/* 계좌 정보 */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
                <p className="text-xs font-bold text-amber-700 mb-2">💳 입금 계좌 안내</p>
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold text-amber-800">{bankInfo.bank}</p>
                    <p className="text-lg font-extrabold text-amber-900 tracking-widest">{bankInfo.accountNumber}</p>
                    <p className="text-xs text-amber-600 mt-0.5">예금주: {bankInfo.accountHolder}</p>
                  </div>
                  <button
                    type="button"
                    onClick={copyAccount}
                    className={`flex-shrink-0 text-xs px-3 py-2 rounded-xl font-semibold transition-all duration-200 ${
                      copied
                        ? 'bg-green-200 text-green-800'
                        : 'bg-amber-200 hover:bg-amber-300 text-amber-800'
                    }`}
                  >
                    {copied ? '✔ 복사됨' : '복사'}
                  </button>
                </div>
              </div>

              {/* 배송지 */}
              <div className="flex flex-col gap-3">
                <p className="text-sm font-semibold text-green-700">📦 배송지 정보</p>

                <Field label="주문자명 *" error={errors.name}>
                  <input
                    name="name" value={form.name} onChange={change}
                    placeholder="홍길동"
                    className={inputCls(errors.name)}
                  />
                </Field>

                <Field label="연락처 *" error={errors.phone}>
                  <input
                    name="phone" value={form.phone} onChange={change}
                    placeholder="010-0000-0000" type="tel"
                    className={inputCls(errors.phone)}
                  />
                </Field>

                <Field label="이메일">
                  <input
                    name="email" value={form.email} onChange={change}
                    placeholder="example@email.com" type="email"
                    className={inputCls()}
                  />
                </Field>

                <Field label="주소 *" error={errors.address}>
                  <input
                    name="address" value={form.address} onChange={change}
                    placeholder="도로명 또는 지번 주소"
                    className={inputCls(errors.address)}
                  />
                </Field>

                <Field label="상세 주소">
                  <input
                    name="detail" value={form.detail} onChange={change}
                    placeholder="아파트 동·호수, 건물명 등"
                    className={inputCls()}
                  />
                </Field>

                <Field label="배송 요청사항">
                  <textarea
                    name="note" value={form.note} onChange={change}
                    placeholder="예) 문 앞에 놓아주세요"
                    rows={2}
                    className="w-full px-3 py-2.5 rounded-xl border border-green-200 focus:border-green-400 focus:outline-none text-sm text-green-800 bg-white resize-none transition-colors"
                  />
                </Field>
              </div>

              {/* 제출 */}
              <button
                type="submit"
                className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-base rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                📨 주문 정보 전송하기
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

function inputCls(hasError) {
  return [
    'w-full px-3 py-2.5 rounded-xl border text-sm text-green-800 bg-white transition-colors focus:outline-none',
    hasError
      ? 'border-red-300 focus:border-red-400'
      : 'border-green-200 focus:border-green-400',
  ].join(' ')
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-xs font-medium text-green-600 mb-1">{label}</label>
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
}
