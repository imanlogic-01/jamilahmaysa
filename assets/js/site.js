const nav=document.querySelector('.nav');
window.addEventListener('scroll',()=>nav?.classList.toggle('scrolled',scrollY>20));
document.querySelector('.menu-btn')?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduced){const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.querySelectorAll('video[data-autoplay]').forEach(v=>v.play().catch(()=>{}))}else{e.target.querySelectorAll('video[data-autoplay]').forEach(v=>v.pause())}}),{rootMargin:'100px'});document.querySelectorAll('section').forEach(s=>obs.observe(s));}
const form=document.querySelector('[data-gig-form]');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const lines=['Hi Jamilah, I would like to enquire about a dance booking.','',`Name: ${d.get('name')||''}`,`Type: ${d.get('type')||''}`,`Date: ${d.get('date')||'Flexible / TBC'}`,`Location: ${d.get('location')||''}`,`Group size: ${d.get('size')||''}`,`Budget: ${d.get('budget')||''}`,`Details: ${d.get('details')||''}`];const msg=lines.join('\n');navigator.clipboard?.writeText(msg);const toast=document.querySelector('.toast');if(toast){toast.textContent='Enquiry copied. Opening Instagram DM…';toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),3500)}setTimeout(()=>window.open('https://ig.me/m/jamilahs_jam','_blank'),350);});}
