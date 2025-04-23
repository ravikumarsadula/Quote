const quotes = [
    "Stars can't shine without darkness.",
    "Feel the fear and do it anyway.",
    "In the middle of chaos, there was you.",
    "Your vibe attracts your tribe.",
    "Dream big. Start small. Act now.",
    "Magic is believing in yourself."
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteText = document.getElementById("quoteText");
    quoteText.classList.remove("fade-in");
    void quoteText.offsetWidth; // re-trigger animation
    quoteText.textContent = quotes[randomIndex];
    quoteText.classList.add("fade-in");
  }
  
  function copyQuote() {
    const text = document.getElementById("quoteText").textContent;
    navigator.clipboard.writeText(text).then(() => {
      alert("Quote copied to clipboard!");
    });
  }
  