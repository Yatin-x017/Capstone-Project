const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((btn) => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const isOpen = answer.style.display === 'block';
    faqQuestions.forEach(q => q.nextElementSibling.style.display = 'none');
    answer.style.display = isOpen ? 'none' : 'block';
  });
});
