  const sampleText = document.getElementById('sampleText').innerText.trim();
    const inputText = document.getElementById('inputText');
    const result = document.getElementById('result');

    let startTime;
    let ended = false;

    inputText.addEventListener('input', () => {
      const typed = inputText.value;

      if (!startTime) {
        startTime = new Date();
      }

      if (typed === sampleText && !ended) {
        ended = true;
        const endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000; 
        const wordCount = sampleText.split(' ').length;
        const speed = Math.round((wordCount / timeTaken) * 60); 
        result.innerText = `🎉 Done! Typing Speed: ${speed} WPM`;
      }
    });