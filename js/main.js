'use strict';
{
  // ID定義
  const menuOpen = document.getElementById('menu-open');
  const menuClose = document.getElementById('menu-close');

  // menuAction
  menuOpen.addEventListener('click', () => {
    console.log('test1');
    menuOpen.classList.add('hidden');
    console.log('test2');
    menuClose.classList.remove('hidden');
  });
}

// document.querySelector('.menu-btn').addEventListener('click', function () {
//   document.querySelector('.menu').classList.toggle('is-active');
// });

// main-moji
function showElementAnimation() {
  var element = document.getElementsByClassName('js-fuwa');
  if (!element) return; // 要素がなかったら処理をキャンセル

  var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;

  for (var i = 0; i < element.length; i++) {
    var elemClientRect = element[i].getBoundingClientRect();
    var elemY = scrollY + elemClientRect.top;
    if (scrollY + windowH - showTiming > elemY) {
      element[i].classList.add('isShow');
    } else if (scrollY + windowH < elemY) {
      // 上にスクロールして再度非表示にする場合はこちらを記述
      element[i].classList.remove('isShow');
    }
  }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);
