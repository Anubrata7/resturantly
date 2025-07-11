window.onscroll = function() {myFunction()};

var topHeader = document.getElementById("top-header");
var header = document.getElementById("bottom-header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
     topHeader.classList.add("hidden");
  } else {
    header.classList.remove("sticky");
     topHeader.classList.remove("hidden");
  }
}


 // init Isotope
  var iso = new Isotope('.grid', {
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  });

  // bind filter button click
  var filtersElem = document.querySelector('.filters-button-group');
  filtersElem.addEventListener('click', function (event) {
    if (!event.target.matches('button')) {
      return;
    }
    var filterValue = event.target.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });

    // toggle active class
    document.querySelectorAll('.filters-button-group .button').forEach(btn =>
      btn.classList.remove('is-checked')
    );
    event.target.classList.add('is-checked');
  });


Fancybox.bind("#gallery a", {
  groupAll: true,
});


function onFocusHandler(e){
  // alert(e.target);
  console.log(e.target);
}

 