import { writeFileSync } from 'node:fs';

// One original line of fortune-cookie wisdom for a software developer.
// The double meaning: the quick "temporary" fix is what actually survives to
// production, while the careful work around it is what gets cut.
const LINE = 'What you called temporary is the only part that shipped.';

function main(): void {
  const chars = [...LINE].length;
  if (chars > 120) throw new Error(`entry is ${chars} characters (max 120)`);
  if (LINE.trim().length === 0) throw new Error('entry is only whitespace');

  const content = LINE + '\n';
  try {
    writeFileSync('/output/entry.txt', content, 'utf8');
    console.log('wrote /output/entry.txt');
  } catch {
    writeFileSync('./entry.txt', content, 'utf8');
    console.log('wrote ./entry.txt');
  }
  console.log(`line:  ${LINE}`);
  console.log(`chars: ${chars}`);
}

main();