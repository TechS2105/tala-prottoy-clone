// gallery list items
let menu_list_items = document.querySelectorAll('.navsection nav ul li');
let gallery_item = document.querySelector('.gallery-items');

// nav section
let nav_section = document.querySelector('header');

console.log(menu_list_items);

// gallery list items
menu_list_items[16].addEventListener('click', () => {

    console.log('click');
    gallery_item.classList.toggle('toggle-gallery');
    objective_item.classList.remove('objective-toggle');
    durga_puja_years.classList.remove('puja-years-toggle');
    nav_section.style.overflowY = "visible";

});

// objective list items
let objective_item = document.querySelector('.objective-items');

menu_list_items[2].addEventListener('click', () => {

    objective_item.classList.toggle('objective-toggle');
    gallery_item.classList.remove('toggle-gallery');
    durga_puja_years.classList.remove('puja-years-toggle');
    nav_section.style.overflowY = "visible";

});

// durga puja year's
let durga_puja_years = document.querySelector('.puja-years');

menu_list_items[5].addEventListener('click', () => {

    durga_puja_years.classList.toggle('puja-years-toggle');
    gallery_item.classList.remove('toggle-gallery');
    objective_item.classList.remove('objective-toggle');
    nav_section.style.overflowY = "scroll";

})
