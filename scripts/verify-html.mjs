import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const files = ['index.html', 'neon-serpent-standalone.html'];
let checked = 0;

for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const scripts = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)];
  if (scripts.length === 0) {
    throw new Error(`${file}: no inline script tags found`);
  }
  scripts.forEach((match, index) => {
    new vm.Script(match[1], { filename: `${file}#inline-script-${index + 1}` });
    checked += 1;
  });
}

console.log(`Verified JavaScript syntax for ${checked} inline script block(s).`);
