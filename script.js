const facts = [
  "Honey never spoils.",
  "Octopuses have three hearts.",
  "Bananas are berries, but strawberries aren't.",
  "There’s a species of jellyfish that can live forever.",
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
  document.getElementById("fact").textContent = facts[randomIndex];
});

// TODO: Log how many times the button has been clicked