(function(){
  var mode='dark';
  try{mode=localStorage.getItem('ohgs-theme')==='light'?'light':'dark'}catch(e){}
  var root=document.documentElement;
  root.setAttribute('data-theme',mode);
  root.classList.toggle('light',mode==='light');
  root.style.colorScheme=mode;
  var meta=document.querySelector('meta[name="theme-color"]');
  if(meta)meta.setAttribute('content',mode==='light'?'#f7fbff':'#07111f');
})();
