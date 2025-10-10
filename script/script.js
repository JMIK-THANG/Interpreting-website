function copyText(selector) {
  const text = document.querySelector(selector).textContent.trim();
  navigator.clipboard
    ?.writeText(text)
    .then(() => {
      alert("Copied: " + text);
    })
    .catch(() => {
      alert("Copy failed — try selecting and copying manually.");
    });
}
