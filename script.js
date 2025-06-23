const facts = [
  "Honey never spoils.",
  "Octopuses have three hearts.",
  "Bananas are berries, but strawberries aren't.",
  "There’s a species of jellyfish that can live forever.",
];

document.getElementById("generateBtn").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  const factElement = document.getElementById("fact");
  const copyBtn = document.getElementById("copyBtn");
  
  factElement.textContent = facts[randomIndex];
  copyBtn.style.display = "inline-block";
});

document.getElementById("copyBtn").addEventListener("click", async () => {
  const factText = document.getElementById("fact").textContent;
  
  if (factText) {
    try {
      await navigator.clipboard.writeText(factText);
      // Provide visual feedback
      const copyBtn = document.getElementById("copyBtn");
      const originalText = copyBtn.textContent;
      copyBtn.textContent = "Copied!";
      setTimeout(() => {
        copyBtn.textContent = originalText;
      }, 1500);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = factText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      
      // Provide visual feedback
      const copyBtn = document.getElementById("copyBtn");
      const originalText = copyBtn.textContent;
      copyBtn.textContent = "Copied!";
      setTimeout(() => {
        copyBtn.textContent = originalText;
      }, 1500);
    }
  }
});
