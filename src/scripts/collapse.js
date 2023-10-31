export const collapse = () => {
  const faq = document.querySelector('.faq');
  const questions = document.querySelectorAll('.faq__title')
  const collapses = document.querySelectorAll('.faq__question');

  faq.addEventListener('click', (e) => {
    const { target } = e;
    if (target.classList.contains('faq__title')) {
      if (target.classList.contains('active')) {
        target.classList.remove('active');
        target.closest('.faq__question').classList.remove('active');

      } else {
        questions.forEach(question => {
          question.classList.remove('active')
        })
        collapses.forEach(question => {
          question.classList.remove('active')
        })
        target.classList.add('active');
        target.closest('.faq__question').classList.add('active');
      }
    }
  })
}
