const themebtn = document.getElementById('theme-btn');
const page = document.getElementsById('page');
const sidebar = document.getElementById('sidebar-wrapper');
const menu = document.getElementById('menu');

themebtn.addEventListener('click', ()=>
    {page.classlist.toggle('page_dark');
});

menubtn.addEventListener('click', ()=>
    {sidebar.classlist.toggle('sidebar-wrapper_hidden');
});