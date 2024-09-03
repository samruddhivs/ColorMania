document.addEventListener('DOMContentLoaded', function() {
    const box1 = document.querySelector('.box1');
    const box2 = document.querySelector('.box2');

    box1.addEventListener('mouseenter', function() {
        box2.style.display = 'block';
    });

    box1.addEventListener('mouseleave', function() {
        box2.style.display = 'none';
    });
});