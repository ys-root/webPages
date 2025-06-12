// 首页视频播放脚本
document.addEventListener('DOMContentLoaded', function() {
    const videoPlayer = document.getElementById('videoPlayer');
  
    // 示例：添加自动播放功能（建议谨慎使用自动播放）
    // videoPlayer.play();
  
    // 监听视频播放结束事件
    videoPlayer.addEventListener('ended', function() {
      //播放完后不发出任何提示
    });
    document.body.appendChild(muteButton);
  });