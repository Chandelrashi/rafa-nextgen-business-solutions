const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); }
  })
},{threshold:0.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
