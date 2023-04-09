  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  function onYouTubeIframeAPIReady() {
    //<div id="player"></div>
    new YT.Player('player', {
      videoId: 'An6LvWQuj_8',
      playerVars:{ //play하기 위한 변수
        autoplay:true,
        loop:true,
        playlist:'An6LvWQuj_8'//반복 재생할 영상의 id목록
      },
      events:{
        onReady:function(event){ //영상이 준비가 되면 함수 실행 
          event.target.mute()//음소거
        }
      }
    });
  }