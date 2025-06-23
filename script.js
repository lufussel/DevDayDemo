const facts = [
  "Honey never spoils.",
  "Octopuses have three hearts.",
  "Bananas are berries, but strawberries aren't.",
  "There’s a species of jellyfish that can live forever.",
];
// Image URLs corresponding to each fact
const factImages = [
  "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", // Honey
  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", // Octopus
  "https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", // Bananas
  "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", // Jellyfish
];

// Counter to track button clicks
let clickCount = 0;

document.getElementById("generateBtn").addEventListener("click", () => {
  // Increment click counter
  clickCount++;
  console.log(`Button clicked ${clickCount} time(s)`);
  
  // Update the counter display on the webpage
  document.getElementById("counter").textContent = `Button clicks: ${clickCount}`;
  
  const randomIndex = Math.floor(Math.random() * facts.length);
  const factElement = document.getElementById("fact");
  const copyBtn = document.getElementById("copyBtn");
  const imageElement = document.getElementById("factImage");
  
  factElement.textContent = facts[randomIndex];
  imageElement.src = factImages[randomIndex];
  imageElement.style.display = "block";
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

// TODO: Log how many times the button has been clicked