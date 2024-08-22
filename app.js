document.addEventListener('DOMContentLoaded', function() {
    // Get all buttons with the class 'link-button'
    const linkButtons = document.querySelectorAll('.link-button');

    // Add a click event listener to each button
    linkButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Retrieve the URL from the button's data-url attribute
            const url = button.getAttribute('data-url');
            // Redirect to the URL
            window.location.href = url;
        });
    });
});
