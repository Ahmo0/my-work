document.addEventListener('DOMContentLoaded', function() {
    const controlBtns = document.querySelectorAll('.control-btn');
    controlBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Control button clicked!');
        });
    });
});
