
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}

// Count All Characters //
export function characterCount(str) { 
  return str.length;
}

// Count Words //
export function wordCount(str) { 
  return str.match(/\b[-?(\w+)?]+\b/gi).length;
}


export function stripHtml(html){
   return html.textContent || html.innerText || "";
}