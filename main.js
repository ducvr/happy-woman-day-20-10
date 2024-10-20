onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
document.addEventListener("DOMContentLoaded", function() {
  const element = document.querySelector('.happy-woman-day');
  if (element) {
    element.textContent = "Happy Women's Day T219";
  }
});
