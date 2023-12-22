$(function () {
  // 대상을 변수에 저장
  const $window = $(window);
  const $body = $('body');
  const $loading = `<div class="loading">
  <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
</div>`;

  // body에 마지막 부분에 집어넣기
  $body.append($loading);
  const $target = $('.loading');
  /* .loading 위에 let loading에 div class를 불러옴 */
  /* target대신 같은 loading이름을 쓰려면 위의 loading을 let으로 바꿔줘야함 */

  // 로딩이 완료되면 (load)
  $window.on('load', function () {
    // 너무 빨리 사라지므로 조금있다가 사라지게끔
    // setTimeout(동작, 시간)
    setTimeout(function () {
      $target.fadeOut().remove();
    }, 1000);
  });
});
