(() => {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('navigation');
  const closeMenu = () => {
    if (!toggle || !nav) return;
    nav.classList.remove('is-open');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    document.body.classList.remove('menu-open');
  };
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      nav.classList.toggle('is-open', open);
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.body.classList.toggle('menu-open', open);
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
    window.addEventListener('resize', () => { if (window.innerWidth > 880) closeMenu(); });
  }
  const header = document.getElementById('header');
  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 25);
  updateHeader();
  window.addEventListener('scroll', updateHeader, {passive:true});
  const tabs = Array.from(document.querySelectorAll('[data-flavour]'));
  const flavours = {
    classic: {name:'Classic<br>Salted',description:'The straightforward, familiar potato-chip experience. Packaging shown as a concept; confirm current flavors and pack formats with us.',image:'assets/pack-classic.webp',alt:'Illustrative Classic Salted Fusion Foods potato chip packet',href:'partnership/index.html?product=Classic%20Salted#enquiry'},
    masala: {name:'Masala<br>Flavour',description:'A bold, spice-inspired design concept for those who like some heat with their crunch. Ask our team about actual flavour availability.',image:'assets/pack-masala.webp',alt:'Illustrative Masala Fusion Foods potato chip packet',href:'partnership/index.html?product=Masala%20Flavour#enquiry'}
  };
  tabs.forEach(button => button.addEventListener('click', () => {
    const item = flavours[button.dataset.flavour]; if (!item) return;
    tabs.forEach(tab => { const active = tab === button; tab.classList.toggle('is-active',active); tab.setAttribute('aria-pressed',String(active)); });
    const img = document.getElementById('productImage');
    const name = document.getElementById('productName');
    const desc = document.getElementById('productDescription');
    const link = document.getElementById('productLink');
    img.classList.remove('product-animate'); void img.offsetWidth;
    img.src=item.image; img.alt=item.alt; name.innerHTML=item.name; desc.textContent=item.description; link.href=item.href;
    img.classList.add('product-animate');
  }));
  document.getElementById('year').textContent=new Date().getFullYear();
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries)=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{rootMargin:'0px 0px -30px 0px',threshold:.07});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  } else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('is-visible'));
})();
