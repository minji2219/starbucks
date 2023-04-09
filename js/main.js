const badgeEl=document.querySelector('header .badges');
const toTopEl=document.querySelector('#to-top');

window.addEventListener('scroll',_.throttle(function(){
  console.log('scroll!');
  if(window.scrollY>500){
    //배지 숨기기
    gsap.to(badgeEl, .6 ,{
      opacity:0,
      display:'none'//opacity가 적용된 후 display가 적용되어 진짜 없어지게 만들어짐!
    });
    //버튼 보이기
    gsap.to(toTopEl,.2,{
      x:0
    });
  }else{
    //배지 보이기
    gsap.to(badgeEl, .6 ,{
      opacity:1,
      display:'block'
    });
    //버튼 숨기기
    gsap.to(toTopEl,.2,{
      x:100
    });
  }
},300));


toTopEl.addEventListener('click',function(){
  gsap.to(window,.7,{
    scrollTo:0
  });
});

const fadeEls=document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl ,index){
  gsap.to(fadeEl, 1, {
    delay: (index+1) * .7, //각각의 요소는 0.7, 1.4초..뒤에 요소가 opacity:1이됨
    opacity: 1
  });
});

new Swiper('.notice-line .swiper',{
  direction:'vertical',
  autoplay:true,
  loop:true,
});

new Swiper('.promotion .swiper',{
  slidesPerView:3, //한번에 보여줄 슬라이드 수
  spaceBetween:10, //슬라이드 사이 여백
  centeredSlides:true, //1번 슬라이드가 가운데 보이게하기
  loop:true,
  autoplay:{
    delay:5000 //5초에 한번씩 슬라이드 기본값은 3000
  },
  pagination:{
    el:'.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable:true,
  },
  navigation:{
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper',{
  autoplay:true,
  loop:true,
  spaceBetween:30,
  slidesPerView:5,
  navigation: {
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
    //숨김
    promotionEl.classList.add('hide');
  }else{
    //보임
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
  gsap.to(selector,random(1.5,2.5),{
    y:size,
    repeat: -1, //무한반복
    yoyo:true, //역재생
    ease: Power1.easeInOut, //ease함수
    delay:random(0,delay)
  });
}
floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소 지정
      triggerHook:.8 //뷰포트에서 0.8지점에 요소가 걸리면 .setClassToggle()실행
    })
    .setClassToggle(spyEl,'show') //토글할 클래스, 토글할 클래스 이름 지정
    .addTo(new ScrollMagic.Controller()); //내부에서 실제로 동작하게 만들어줌
});

