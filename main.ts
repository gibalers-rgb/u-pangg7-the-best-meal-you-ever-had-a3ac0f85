// The Best Meal You Ever Had — one sentence about the best meal ever had.
// The program is deliberately small: it holds one fixed sentence, checks it
// against the bounty gate, and writes it to entry.txt. No network, no input,
// no randomness, so every run produces the exact same file.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

// One sentence, at most 200 characters. A plastic-stool warung at night:
// named dish, named city, a texture on the wrist, smoke in the air, and a
// vendor who knows the order before it is spoken.
const SENTENCE =
  "The best meal I ever had was sate ayam at a plastic-stool warung in Yogyakarta, peanut sauce dripping down my wrist while grill smoke curled into the night and the vendor already knew my order.";

const LIMIT = 200;

function checkSentence(text: string): void {
  const size = [...text].length;
  if (size < 1 || size > LIMIT) {
    throw new Error(`sentence must be 1-${LIMIT} characters, got ${size}`);
  }
  if (text.trim() !== text) {
    throw new Error("sentence must not start or end with white space");
  }
  if (text.trim().length === 0) {
    throw new Error("sentence must not be only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("sentence must fit on one line");
  }
  // The bounty asks for one sentence, so reject anything that smuggles in
  // a second one: a period followed by a space, or an ending other than a
  // single full stop.
  if (text.includes(". ") || !text.endsWith(".")) {
    throw new Error("entry must be exactly one sentence ending with a period");
  }
  if (/[?!]/.test(text)) {
    throw new Error("entry must not contain ? or ! mid-sentence");
  }
}

function main(): void {
  checkSentence(SENTENCE);
  const target = resolve(process.env.OUTPUT_PATH ?? "/output/entry.txt");
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, SENTENCE, "utf8");
  const back = readFileSync(target, "utf8");
  if (back !== SENTENCE || Buffer.byteLength(back, "utf8") !== Buffer.byteLength(SENTENCE, "utf8")) {
    throw new Error("read-back did not match the sentence that was written");
  }
  console.log(`wrote ${[...SENTENCE].length} characters to ${target}`);
}

main();
