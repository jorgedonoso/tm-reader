export function eventParser(input) {
  return parse(input);

  function parse(str) {
    let i = 0;

    const results = [""];

    while (i < str.length) {
      if (str[i] === "[") {
        let start = i;
        let depth = 1;
        i++;

        while (i < str.length && depth > 0) {
          if (str[i] === "[") depth++;
          else if (str[i] === "]") depth--;
          i++;
        }

        const block = str.slice(start + 1, i - 1);

        const options = splitTopLevel(block).map(parse);

        const next = [];
        for (const base of results) {
          for (const optList of options) {
            for (const opt of optList) {
              next.push(base + opt);
            }
          }
        }

        results.length = 0;
        results.push(...next);
      } else {
        let start = i;
        while (i < str.length && str[i] !== "[") i++;

        const chunk = str.slice(start, i);

        for (let j = 0; j < results.length; j++) {
          results[j] += chunk;
        }
      }
    }

    return results;
  }

  function splitTopLevel(str) {
    const parts = [];
    let depth = 0;
    let current = "";

    for (const c of str) {
      if (c === "," && depth === 0) {
        parts.push(current);
        current = "";
      } else {
        if (c === "[") depth++;
        if (c === "]") depth--;
        current += c;
      }
    }

    if (current) parts.push(current);
    return parts;
  }
}
