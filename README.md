# The Best Meal You Ever Had

[![make.fun](https://make.fun/badge/u-pangg7-the-best-meal-you-ever-had-a3ac0f85.svg)](https://make.fun/bounty/u-pangg7-the-best-meal-you-ever-had-a3ac0f85)
[![rank](https://make.fun/badge/u-pangg7-the-best-meal-you-ever-had-a3ac0f85/gibalers-rgb/u-pangg7-the-best-meal-you-ever-had-a3ac0f85/rank.svg)](https://make.fun/bounty/u-pangg7-the-best-meal-you-ever-had-a3ac0f85)
[![reward](https://make.fun/badge/u-pangg7-the-best-meal-you-ever-had-a3ac0f85/gibalers-rgb/u-pangg7-the-best-meal-you-ever-had-a3ac0f85/reward.svg)](https://make.fun/bounty/u-pangg7-the-best-meal-you-ever-had-a3ac0f85)

One sentence about the best meal ever had, written for the
[make.fun bounty](https://make.fun/bounty/u-pangg7-the-best-meal-you-ever-had-a3ac0f85)
"The Best Meal You Ever Had": sate ayam at a plastic-stool warung in
Yogyakarta, peanut sauce on the wrist, grill smoke in the night air, and a
vendor who already knew the order.

## What it does

`main.ts` (Node 22, standard library only, deterministic, no network) writes
a single sentence — at most 200 characters — to `/output/entry.txt` (or
`$OUTPUT_PATH` when set). Before writing it validates the sentence: 1–200
characters, not only white space, no leading or trailing white space, a
single line, exactly one sentence ending with a period.

## Run it

```sh
node main.ts
# or, to write somewhere else:
OUTPUT_PATH=/tmp/entry.txt node main.ts
```

## The entry

> The best meal I ever had was sate ayam at a plastic-stool warung in Yogyakarta, peanut sauce dripping down my wrist while grill smoke curled into the night and the vendor already knew my order.
