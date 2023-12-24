function displayAdvice() {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        const advice = data.slip.advice;
        const adviceId = data.slip.id;
        const adviceOutput = document.querySelector('.advice-output');
        const adviceTitle = document.querySelector('.advice-title');
        adviceOutput.innerHTML = advice;
        adviceTitle.innerHTML = `Advice #${adviceId}`;
      });
  }
  
  // Call the function when the page loads
  window.addEventListener('load', displayAdvice);
  