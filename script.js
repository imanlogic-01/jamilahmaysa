document.querySelectorAll('video').forEach(v=>{
  v.muted=true; v.playsInline=true;
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{
    if(e.isIntersecting){v.play().catch(()=>{})}else{v.pause()}
  }),{threshold:.15});
  io.observe(v);
});

const year=document.querySelector('[data-year]'); if(year) year.textContent=new Date().getFullYear();
