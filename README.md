# Tierchart

A static web app for creating tier charts. Like tier lists, but along two axes instead of one.

Inspired by the old-school [MMCafe Tierchart Maker](https://www.mmcafe.com/tiermaker), which doesn't seem to be getting updated any more. 

# Contributing

## Running Dev Environment

It's a pretty simple application, so the dev environment is simple.

After cloning the repo locally:
```
npm i
npm run dev
```

## Adding a Game

### Determine a Slug

The slug for a game will be the url for its page. For example, the slug for Tekken 8 is `tekken8` and its page is at [tiercharts.mcpar.land/tekken8](https://tiercharts.mcpar.land/tekken8).

### Add Portraits

You'll need a picture that is a **maximum of 75px** high and/or wide for each character. Add them to the folder `public/portraits/[slug]/`. For example, Tekken 8's portraits are all in [public/portraits/tekken8/](./public/portraits/tekken8)

### Create JSON File

Create a `.json` file for your game as `src/assets/[slug].json`. It should adhere to the schema defined in [types.ts](./src/games.ts).

In [games.ts](./src/games.ts), import the json file you just created and add it to the `gamesDefinitions` array.

### Test

Run the local development environment and make sure your new additions look as expected!

### Submit a PR

Submit your changes as a PR to this repository and I'll review it as soon as I can!

