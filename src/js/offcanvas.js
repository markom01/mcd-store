// Open off-canvas menu on click
let navToggler = (function () {
  'use strict'

  document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.add('open')
  })
})();
let navClose = (function () {
  'use strict'

  document.querySelector('#navClose').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.remove('open')
  })
})();

export default { navToggler, navClose };

// Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//   'use strict'

//    Fetch all the forms we want to apply custom Bootstrap validation styles to
//   var forms = document.querySelectorAll('.needs-validation')

//    Loop over them and prevent submission
//   Array.prototype.slice.call(forms)
//     .forEach(function (form) {
//       form.addEventListener('submit', function (event) {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }

//         form.classList.add('was-validated')
//       }, false)
//     })
// })()

// export default navToggler;