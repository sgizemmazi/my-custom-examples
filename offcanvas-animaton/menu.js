
//buttonun açılıp kapanma özelliği
$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
   });


   // Belli piksel scrolldan sonra görünmez yapar.

   document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.button_container');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) { // 100 piksel scroll ettikten sonra
            button.style.opacity = 0; // Button'u görünmez yap
        } else {
            button.style.opacity = 1; // Button'u görünür yap
        }
    });
});
