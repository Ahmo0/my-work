document.addEventListener('DOMContentLoaded', () => {
    const faqs = document.querySelectorAll('.faq-question');

    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            const answer = faq.nextElementSibling;
            const icon = faq.querySelector('.toggle-icon');

            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                icon.textContent = '+';
            } else {
                answer.style.display = 'block';
                icon.textContent = '-';
            }
        });
    });
});
