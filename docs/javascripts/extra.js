document$.subscribe(() => {
  // 如果视频层已经存在，不再重复新建
  if(document.querySelector('#video-bg')) return;

  const videoBg = document.createElement('video');
  videoBg.id = "video-bg";
  videoBg.src = '../assets/bg.mp4';
  videoBg.autoplay = true;
  videoBg.loop = true;
  videoBg.muted = true;
  videoBg.playsInline = true;

  videoBg.style.position = 'fixed';
  videoBg.style.top = '0';
  videoBg.style.left = '0';
  videoBg.style.width = '100vw';
  videoBg.style.height = '100vh';
  videoBg.style.objectFit = 'cover';
  videoBg.style.zIndex = '-1';
  videoBg.style.pointerEvents = 'none';

  document.body.prepend(videoBg);
})
