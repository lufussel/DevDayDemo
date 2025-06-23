const facts = [
  "Honey never spoils.",
  "Octopuses have three hearts.",
  "Bananas are berries, but strawberries aren't.",
  "There’s a species of jellyfish that can live forever.",
];

document.getElementById("generateBtn").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  document.getElementById("fact").textContent = facts[randomIndex];
});
