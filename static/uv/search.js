const blockedSites = [
  "example.com",
  "discord.com",
  "tiktok.com"
];

// This function checks if the hostname of the given URL matches any blocked domain
function isBlocked(url) {
  try {
    const parsed = new URL(url);
    return blockedSites.some(site => parsed.hostname.toLowerCase().includes(site.toLowerCase()));
  } catch {
    return true; // If it's an invalid URL, treat as blocked (optional)
  }
}

function searchAndGo() {
  const input = document.getElementById("searchInput");
  const query = input.value.trim();
  if (!query) return;

  let url;
  // Try turning query into a real URL
  try {
    url = new URL(query.startsWith("http") ? query : "https://" + query);
  } catch (e) {
    // If it's not a valid URL, treat as search
    const searchEngine = "https://www.google.com/search?q=";
    url = new URL(searchEngine + encodeURIComponent(query));
  }

  // Now check if the final URL is blocked
  if (isBlocked(url.href)) {
    alert("This website is blocked.");
    return;
  }

  // Encode the final resolved URL with UV
  const encoded = self.__uv$config.prefix + self.__uv$config.encodeUrl(url.href);
  window.location.href = encoded;
}
