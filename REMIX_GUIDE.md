# Remix Guide

Neon Serpent is plain HTML/CSS/JavaScript, so you can remix it without a framework or build pipeline.

## Fastest remix path

1. Open `index.html`.
2. Search for `REMIX CONFIG`.
3. Change the values inside `const CONFIG = { ... }`.
4. Save and refresh the browser.

## Safe knobs to change

### Title and subtitle

```js
title: 'NEON SERPENT',
subtitle: 'SYNTHWAVE SNAKE',
```

### Colors

```js
theme: {
  cyan: '#00ffff',
  magenta: '#ff00ff',
  purple: '#8b00ff',
  pink: '#ff1493',
  yellow: '#ffff00',
  bgDark: '#0a0a0f',
  bgDarker: '#050508'
}
```

Try changing these first for a different look: vaporwave, cyberpunk, desert neon, horror green, sports-team palette, etc.

### Difficulty and speed

Lower `speed` means faster snake movement.

```js
difficulties: {
  easy: { speed: 150, name: 'EASY', color: '#00ff00' },
  medium: { speed: 100, name: 'MEDIUM', color: '#ffff00' },
  hard: { speed: 60, name: 'HARD', color: '#ff00ff' }
}
```

### Scoring

```js
scorePerFood: 10,
```

### Grid size

```js
gridSize: 20,
```

Smaller grid size means more cells and a tighter game. Larger grid size means chunkier movement and a simpler board.

### Local leaderboard

```js
maxLocalLeaderboardEntries: 10,
```

Scores are saved in the browser with `localStorage`.

## Adding art/audio assets

Put files in `assets/`, then reference them from the HTML/JS.

```html
<img src="assets/title-card.png" alt="Title card">
```

```js
const img = new Image();
img.src = 'assets/snake-head.png';
```

## Optional backend leaderboard

Neon Serpent does not require a backend. To connect your own leaderboard API:

```js
enableGlobalLeaderboard: true,
apiEndpoint: 'https://your-domain.example/api/scores'
```

Expected API shape:

- `GET` returns `{ "scores": [{ "name": "ACE", "score": 100, "difficulty": "HARD" }] }`
- `POST` accepts `{ "name": "ACE", "score": 100, "difficulty": "HARD" }`

## Remix ideas

- Rename it: `Cosmic Cobra`, `Desert Viper`, or `Mall Arcade Snake`.
- Swap the palette.
- Add power-ups.
- Add obstacles.
- Add levels that speed up every 50 points.
- Replace the food with emoji or custom images.
- Add a start-screen story.
- Turn the leaderboard into a daily challenge.

If you want the closest original feel, edit only the `CONFIG` values and leave the `SnakeGame` internals alone.
