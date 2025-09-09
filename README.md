# Tierchart

A static web app for creating tier charts. Like tier lists, but along two axes instead of one.

Inspired by the old-school [MMCafe Tierchart Maker](https://www.mmcafe.com/tiermaker), which doesn't seem to be getting updated any more. 

# Contributing

## Running dev environment

It's a pretty simple application, so the dev environment is simple.

After cloning the repo locally:
```
npm i
npm run dev
```

## Adding a game

If Tierchart is missing a game, you can help by contributing with a PR to this repo.

- Come up with a slug for the game (example: `tekken8` for Tekken 8, `ggst` for Guilty Gear Strive, `umvc3` for Ultimate Marvel vs Capcom 3)
- Add portraits for your characters in a subfolder under `public/portraits/[slug]/`
  - *Please note that portraits should not be more than **75 pixels** tall or wide!*
- Create a `.json` file for the game in `src/assets/[slug].json`
  - for the schema, refer to the schema in an already-complete json, or the type definitions in `src/types.ts`
- Import the json and add it to the array in `src/games.ts`
- Test locally to ensure it works.
- Submit a PR!
