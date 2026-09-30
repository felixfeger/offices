const t=document.querySelector('.menu-toggle'),m=document.querySelector('.nav-mobile');
t.addEventListener('click',()=>{const o=m.classList.toggle('open');t.setAttribute('aria-expanded',o);t.setAttribute('aria-label',o?'Close menu':'Open menu')});
