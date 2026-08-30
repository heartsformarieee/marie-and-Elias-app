# Our Little World ♡

A private mobile-first relationship game for Marie, Elias and Mori.

## Active version

**2.0**

The live app now uses:

- `index.html` — application shell
- `style.css` — original visual identity
- `world-v2.css` — responsive/accessibility fixes
- `world-v2-migrate.js` — one-time migration from the old 1.x save keys
- `world-v2.js` — the complete 2.0 state, progression, daily, scene, memory, album and navigation runtime

The old `script.js` remains in the repository as historical source but is no longer loaded by `index.html`.

## Save data

2.0 stores one versioned state object in `localStorage` under `little-world-v2`. Existing 1.x hearts, streaks and memories are migrated automatically on first launch. Legacy memory text is classified into stable sources so already-unlocked album photos remain unlocked after migration.

## Progression rules

- Daily check-ins reward once per calendar day.
- First-time scene choices award their full heart value.
- Replaying the same exact choice awards only +1 heart.
- Mori awards at most 3 hearts per day, while petting remains available after the reward cap.
- Relationship level-ups are queued so jumping across multiple thresholds cannot skip a level or its memory.
- Daily memories are stored by date, so repeating a daily event on another date still creates a distinct memory.

## Notes

The current PNG artwork is intentionally preserved. It is visually lossless but large; converting the assets to modern WebP/AVIF files would be the next performance-only optimization if desired.