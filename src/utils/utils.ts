// Count All Characters //
export function characterCount(str) {
  return str.length;
}

// Count Words //
export function wordCount(str) {
  return str.match(/\b[-?(\w+)?]+\b/gi).length;
}


export function stripHtml(html) {
  return html.textContent || html.innerText || "";
}