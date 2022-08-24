// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

let project = document.querySelector('.project')

project.addEventListener("click", myFuncution);
    function myFuncution() {
        alert('You must be logged in to view the project. If you do not have an account, you can create an account by clicking the "Join Now" button.')
    }


let button = document.querySelector('.button')

button.addEventListener("click", displayDemo);
    function displayDemo() {
      document.querySelector('.demo').innerHTML="Thank you for viewing the projects. Stay with art. :)";
    }


