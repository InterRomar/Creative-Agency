let burger = document.getElementsByClassName('header__burger')[0];
let menu = document.getElementsByClassName('menu')[0];
let isActive = false;

burger.addEventListener('click', function() {
    console.log(isActive);
        if (isActive === false) {
            burger.classList.add('active');
            menu.classList.add('active');
          isActive = true;
        }
        else {
            burger.classList.remove('active');
            menu.classList.remove('active');
          isActive = false;
  
        }
});



// ============jQuerry option ======================


            // $(document).ready(function() {
            //     $('.header__burger').click(function(e) {
            //         $('.header__burger,.header__menu').toggleClass('active');
            //         $('body').toggleClass('lock ');
            //     });
            // });

// ===============================================================