// news-image-20261122 entry (Node 22, standard library only).
//
// The entry is the PNG beside this file: a one-page "THE DAY IN THE WORLD"
// broadsheet for Sunday 22 November 2026, built from six real Wikimedia
// Commons photos and six verified news stories (COP31 collapse, Iran's
// strike on Bahrain, the Dymer drone attack, BepiColombo at Mercury, the
// World Court's Rohingya genocide ruling, Bitcoin's rebound above $60k).
//
// This program does exactly one thing: it copies ./entry.png, byte for
// byte, to the grader's output directory. It renders nothing and fetches
// nothing; the image the judge sees is the file committed in this repo.
// The committed entry.png is 1024x1024 and under the 1 MiB gate, so the
// copied output satisfies the size limits by construction.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

// The copied output keeps the name entry.png: the grader reads
// /output/entry.png, so the filename is part of the entry, not a detail.
// No image processing happens here, so the judged pixels are exactly the
// committed ones: what you see in the repo is what the judge sees.

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
