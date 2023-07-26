var openMenu = document.querySelector('#open-menu-btn'),
    closeMenu= document.querySelector('#close-menu-btn'),
    menubarList = document.querySelector('.menubar-list'),
    menubar = document.querySelector('#menubar');

openMenu.addEventListener('click', ()=>{
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
    menubarList.style.top = "15%";
});

closeMenu.addEventListener('click', ()=>{
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
    menubarList.style.top = "-150%";
});


