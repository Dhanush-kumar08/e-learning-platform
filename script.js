const progress = document.querySelector('.progress');
let percent = 40;

setInterval(() => {
  if (percent < 100) {
    percent += 10;
    progress.style.width = percent + '%';
  }
}, 2000);
