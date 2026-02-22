let list_title_section = document.querySelectorAll('.plan-your-visit-details-section ul li .title-section');
let list_title_section_icon = document.querySelectorAll('.plan-your-visit-details-section ul li .title-section i')
let inner_details_box = document.querySelectorAll('.plan-your-visit-details-section ul li .inner-details');

list_title_section[0].addEventListener('click', () => {

    inner_details_box[0].classList.toggle('toggle-list-box-style');
    inner_details_box[1].classList.remove('toggle-list-box-style');
    inner_details_box[2].classList.remove('toggle-list-box-style');
    inner_details_box[3].classList.remove('toggle-list-box-style');
    list_title_section_icon[0].classList.toggle('toggle-list-box-icon-style');
    list_title_section_icon[1].classList.remove('toggle-list-box-icon-style');
    list_title_section_icon[2].classList.remove('toggle-list-box-icon-style');
    list_title_section_icon[3].classList.remove('toggle-list-box-icon-style');

});

list_title_section[1].addEventListener('click', () => {

    inner_details_box[1].classList.toggle('toggle-list-box-style');
    inner_details_box[0].classList.remove('toggle-list-box-style');
    inner_details_box[2].classList.remove('toggle-list-box-style');
    inner_details_box[3].classList.remove('toggle-list-box-style');
    list_title_section_icon[0].classList.remove('toggle-list-box-icon-style');
    list_title_section_icon[1].classList.toggle('toggle-list-box-icon-style');
    list_title_section_icon[2].classList.remove('toggle-list-box-icon-style');
    list_title_section_icon[3].classList.remove('toggle-list-box-icon-style');

});

list_title_section[2].addEventListener('click', () => { 

    inner_details_box[2].classList.toggle('toggle-list-box-style');
    inner_details_box[0].classList.remove('toggle-list-box-style');
    inner_details_box[1].classList.remove('toggle-list-box-style');
    inner_details_box[3].classList.remove('toggle-list-box-style');
    list_title_section_icon[2].classList.toggle('toggle-list-box-icon-style');
    list_title_section_icon[0].classList.remove('toggle-list-box-icon-style');
    list_title_section_icon[1].classList.remove('toggle-list-box-icon-style');
    list_title_section_icon[3].classList.remove('toggle-list-box-icon-style');

});

list_title_section[3].addEventListener('click', () => { 

    inner_details_box[3].classList.toggle('toggle-list-box-style');
    inner_details_box[0].classList.remove('toggle-list-box-style');
    inner_details_box[2].classList.remove('toggle-list-box-style');
    inner_details_box[1].classList.remove('toggle-list-box-style');
    list_title_section_icon[3].classList.toggle('toggle-list-box-icon-style');
    list_title_section_icon[2].classList.remove('toggle-list-box-icon-style');
    list_title_section_icon[1].classList.remove('toggle-list-box-icon-style');
    list_title_section_icon[0].classList.remove('toggle-list-box-icon-style');

});