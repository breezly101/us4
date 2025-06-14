const blockedSites = [
  "example.com"
];

function isBlocked(url) {
  try {
    const parsed = new URL(url);
    return blockedSites.some(site => parsed.hostname.includes(site));
  } catch {
    return true;
  }
}

function searchAndGo() {
  const input = document.getElementById("searchInput");
  const query = input.value.trim();

  if (!query) return;

  // Automatically prepend https:// if missing
  const url = query.startsWith("http") ? query : "https://" + query;

  if (isBlocked(url)) {
    alert("This website is blocked.");
    return;
  }

  const encoded = self.__uv$config.prefix + self.__uv$config.encodeUrl(url);
  window.location.href = encoded;
}
