// ── 이미지 import (파일명을 바꾸고 싶으면 아래만 수정하세요) ──
import imgPlumExtract  from '../assets/pictures/썸네일2.png'
import imgPlumVinegar  from '../assets/pictures/썸네일5.png'
import imgWaterJelly   from '../assets/pictures/워터젤리 상품사진1.png'
import imgGiftSet1     from '../assets/pictures/분할1.png'
import imgGiftSet2     from '../assets/pictures/분할2.png'

// 사용 가능한 나머지 이미지: 분할3.png ~ 분할10.png

export const bankInfo = {
  bank: '농협은행',
  accountNumber: '000-0000-0000-00', // ← 실제 계좌번호로 변경해주세요
  accountHolder: '문미경',
}

export const shopInfo = {
  name: '에녹의정원',
  owner: '문미경',
  phone: '010-5093-8547',
  email: 'mmkyung425@naver.com',
  website: '함초롬매실쇼핑몰',
  websiteUrl: 'https://www.hamchorom.co.kr',
  description:
    '직접 재배한 농산물과 산야초를 활용한 발효식품과 몸에 이로운 건강하고 맛있는 먹거리를 가공하여 판매합니다. 1968년부터 이어온 유기농 황매실 전문 농장으로, 전통 옹기에서 오랜 시간 자연 발효 숙성한 깊은 맛을 전합니다.',
  badge: '유기농 인증',
}

export const products = [
  {
    id: 1,
    name: '황매수(秀) 황매실 발효원액',
    description:
      '잘 익은 황매실을 전통 옹기에 담아 2~7년 이상 자연 발효 숙성시킨 매실발효액(매실청)입니다. 황매실 50% : 설탕 50%로 맛과 향이 깊고 빼어납니다.',
    price: 25000,
    unit: '1,000ml (1,500ml: 33,000원)',
    tag: '베스트',
    tagColor: 'bg-orange-400',
    emoji: '🍶',
    imageUrl: imgPlumExtract,
  },
  {
    id: 2,
    name: '황매초 황매실 발효식초',
    description:
      '유기농 황매실 85%와 설탕 15%로 담가 전통 옹기에서 5~10년 이상 자연 발효 숙성한 황매실 식초입니다. 깊고 부드러운 산미와 깔끔한 뒷맛이 특징입니다.',
    price: null,
    unit: '420ml',
    tag: '유기농',
    tagColor: 'bg-green-600',
    emoji: '🫙',
    imageUrl: imgPlumVinegar,
  },
  {
    id: 3,
    name: '황매수 워터젤리',
    description:
      '황매실 발효원액과 젤리의 만남! 유기농·저탄소 인증 농산물, HACCP 인증 시설 제조. 80g 스파우트 파우치로 간편하게 즐기는 황매실 디저트입니다.',
    price: null,
    unit: '80g × 10포',
    tag: 'HACCP 인증',
    tagColor: 'bg-green-500',
    emoji: '🧃',
    imageUrl: imgWaterJelly,
  },
  {
    id: 4,
    name: '함초롬매실 선물세트 1호',
    description:
      '기다림으로 빚은 선물. 황매실 발효의 깊은 맛과 향을 한 세트에 담았습니다. 명절·기념일·답례용으로 추천합니다.',
    price: 35000,
    unit: '황매수 420ml + 황매초 420ml',
    tag: '선물 추천',
    tagColor: 'bg-amber-500',
    emoji: '🎁',
    imageUrl: imgGiftSet1,
  },
  {
    id: 5,
    name: '함초롬매실 선물세트 2호',
    description:
      '한 세트에 담은 황매실의 세 가지 즐거운 맛. 음용·요리·간편 디저트까지 다양하게 즐기는 프리미엄 황매실 선물세트입니다.',
    price: 50000,
    unit: '황매수 420ml + 황매초 420ml + 워터젤리 10포',
    tag: '프리미엄',
    tagColor: 'bg-orange-500',
    emoji: '🎀',
    imageUrl: imgGiftSet2,
  },
]
