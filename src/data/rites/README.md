# Rites

Every rite, blessing and appendix item is its own file here. `src/data/ritualsData.ts`
picks them all up automatically — you never edit it.

## Add a new rite or blessing

1. Copy an existing file from the same folder (e.g. `blessings/130-blessing-1-holy-water.ts`).
2. Name it `NNN-your-id.ts`. The number decides where it appears in the list
   (the list is sorted by file name, folders are ignored). Existing files go up in
   tens, so `135-…` slots in between `130-…` and `140-…`. A file with no number
   goes to the end.
3. Change `id` (must be unique, no spaces — it becomes the page address `#/your-id`),
   the titles, `category`, and the `lines`.
4. Save. That's all. (`npm run lint` checks for typos.)

To change a rite, open its file and edit. To remove one, delete its file.

Folders are only for tidiness; what puts a rite under "Blessings", "Sacraments", etc.
in the app is its `category` field.

## Line types (see `src/types/liturgy.ts`)

| Line | Example |
| --- | --- |
| Ordinary text | `{ textLatin: "…", textEnglish: "…" }` |
| Rubric (red italic) | `{ isRubric: true, textLatin: "…", textEnglish: "…" }` |
| Heading | `{ isHeading: true, textLatin: "…", textEnglish: "…" }` |
| Latin only | `{ …, latinOnly: true }` |
| Note | `{ isNote: true, noteNumber: 1, textLatin: "…", textEnglish: "…" }` |

## Numbered notes

A note shows as **Note¹** and a matching superscript ¹ appears in the text at the
exact spot where the note applies. Type the marker as `[^1]` straight after the word:

```ts
{ textLatin: "…quem/quam[^1] ad rudiménta…", textEnglish: "…Thou hast[^1] called…" },
{ isNote: true, noteNumber: 1, textLatin: "In supplendis cæremoniis additur: dudum.", textEnglish: "…" },
```

Put the marker in both `textLatin` and `textEnglish`. The same number may be used more
than once when one note covers several spots (see note 6 in `sacraments/010-baptism-infants.ts`).
Number the notes 1, 2, 3 … in the order they appear within that rite.
