function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const isOpen = answer.classList.contains('open');

    // Close all other answers
    document.querySelectorAll('.faq-answer').forEach(el => el.classList.remove('open'));
    document.querySelectorAll('.faq-question').forEach(el => el.classList.remove('open'));

    // Open the clicked answer
    if (!isOpen) {
        answer.classList.add('open');
        element.classList.add('open');
    }
}