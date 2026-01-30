# Memory Game

A simple **memory card game** built with **React**, where players try to click on unique game cards without repeating. The game features popular video game titles and images fetched from the RAWG API.  

## Features
- Displays 12 game cards with images and names.
- Shuffles cards after each click to increase difficulty.
- Tracks **current score** and **best score**.
- Ends the game when all cards are correctly clicked once.

## Technologies
- React (functional components, hooks)
- CSS for styling
- RAWG Video Games API

## How It Works
1. Cards are fetched from the RAWG API when the app loads.
2. Clicking a card flips it and shuffles all cards.
3. Clicking the same card twice resets the current score.
4. The game ends when all 12 cards are successfully clicked without repetition.

## Components
- **App.jsx** – Main app logic, state management, and shuffle logic.
- **GamePage.jsx** – Renders cards and handles click interactions.
- **Header.jsx** – Displays current and best scores.
 to start the app locally.
