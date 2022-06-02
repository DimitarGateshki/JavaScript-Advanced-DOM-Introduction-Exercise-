function toggle() {
    let button=document.querySelector('.button');
    let div=document.querySelector('#extra');
    console.log('TODO:...');

    div.style.display=(div.style.display=='none' || div.style.display=='') ? 'block':'none';
    button.textContent=button.textContent=='More' ? 'Less' : 'More';
}