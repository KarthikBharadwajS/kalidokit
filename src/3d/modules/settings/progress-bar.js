const progressContainer = document.getElementById('progress-container');

// initial call
setPercentage();

export function setPercentage(per) {
  const percentage = per ? per + '%' : progressContainer.getAttribute('data-percentage') + '%';

  if (per) {
    progressContainer.setAttribute("data-percentage", per);
  }
  const progressEl = progressContainer.querySelector('.progress');
  const percentageEl = progressContainer.querySelector('.percentage');

  progressEl.style.width = percentage;
  percentageEl.innerText = percentage;
  percentageEl.style.left = percentage;
};

export function enableProgressBar() {
  progressContainer.style.display = "block";
}

export function disableProgressBar() {
  progressContainer.style.display = "none";
}