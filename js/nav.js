  document.querySelector('.burger')?.addEventListener('click',function(){
    var m=document.querySelector('.menu');
    if(m){m.style.display = (m.style.display==='flex')?'none':'flex';
      m.style.position='absolute';m.style.flexDirection='column';m.style.top='100%';
      m.style.left='0';m.style.right='0';m.style.background='#fff';m.style.padding='20px 28px';
      m.style.gap='14px';m.style.boxShadow='0 20px 40px rgba(0,0,0,.12)';}
  });
