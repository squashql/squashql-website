const slideIns = document.querySelectorAll('.slide-in');
const slideUps = document.querySelectorAll('.slide-up');

const options = {
  rootMargin: '0px',
  threshold: 0.5
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, options);

slideIns.forEach(element => {
  observer.observe(element);
});
slideUps.forEach(element => {
  observer.observe(element);
})