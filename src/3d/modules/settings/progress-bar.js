const progressContainer = document.getElementById('progress-container');

// initial call
setPercentage();

export function setPercentage(per) {
  const percentage = per ? per : progressContainer.getAttribute('data-percentage') + '%';
  
  const progressEl = document.getElementById('progress-bar');
  const percentageEl = document.getElementById('percentage-bar');
  
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