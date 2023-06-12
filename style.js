var dropdown = document.querySelectorAll('nav ul li a');
for ( var i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener('click', function(e) {
var dropdownContent = this.nextElementSibling;
if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
} else {
    dropdownContent.style.display = 'block';
}
e.preventDefault();
    });
}
