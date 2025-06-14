"use strict";

/**
 *
 * @param {string} input
 * @param {string} template Template for a search query.
 * @returns {string} Fully qualified URL or blocks if matched
 */
function search(input, template) {
  const blockedSites = [
    "discord.com",
    "tiktok.com",
    "example.com"
  ];

  function isBlocked(url) {
    try {
      const parsed = new URL(url);
      return blockedSites.some(site =>
        parsed.hostname.toLowerCase().includes(site.toLowerCase())
      );
    } catch {
      return false;
    }
  }

  try {
    const url = new URL(input);
    if (isBlocked(url.href)) {
      alert("This website is blocked.");
      return null;
    }
    return url.toString();
  } catch (err) {}

  try {
    const url = new URL(`http://${input}`);
    if (url.hostname.includes(".")) {
      if (isBlocked(url.href)) {
        alert("This website is blocked.");
        return null;
      }
      return url.toString();
    }
  } catch (err) {}

  // It's a search query, not a URL
  const searchUrl = template.replace("%s", encodeURIComponent(input));
  if (isBlocked(searchUrl)) {
    alert("This search or site is blocked.");
    return null;
  }

  return searchUrl;
}
