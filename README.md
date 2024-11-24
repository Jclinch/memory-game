# Card Memory Game

## Overview

The **Card Memory Game** is a fun and interactive browser-based game where players test their memory skills by matching pairs of cards. The game is built with **HTML**, **CSS**, and **JavaScript**, featuring a dynamic grid layout and responsive design. It’s simple to play yet challenging, making it perfect for all ages.

## Features

- **Dynamic Gameplay**: The game shuffles the cards on every reload, ensuring a unique experience each time.
- **Score Tracking**: Displays the player's score as they match cards.
- **Responsive Design**: Adapts to different screen sizes, providing an enjoyable experience on both desktop and mobile devices.
- **Interactive UI**: Click cards to reveal images and find their matching pairs.

## Gameplay Instructions

1. **Objective**: Match all pairs of cards with the least number of attempts.
2. **How to Play**:
   - Click on a card to reveal its image.
   - Click on another card to try to find its match.
   - If the cards match, they remain revealed; otherwise, they flip back.
3. **Winning**: The game ends when all pairs are successfully matched.

## Technologies Used

- **HTML**: For structuring the game layout.
- **CSS**: For styling the grid and cards.
- **JavaScript**: For game logic, including shuffling cards, handling user interaction, and tracking scores.

## Project Structure

```
├── index.html       # Main HTML file
├── style.css        # Stylesheet for layout and design
├── app.js           # JavaScript file for game logic
├── images/          # Directory containing card images
└── README.md        # Project documentation
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jclinch/card-memory-game.git
   ```
2. Navigate to the project directory:
   ```bash
   cd card-memory-game
   ```
3. Open the `index.html` file in your browser to start playing the game.

## Customization

- **Card Images**:
  - Replace the images in the `images/` folder with your own.
  - Ensure the images are the same size for a consistent layout.
- **Grid Layout**:
  - Modify the `grid-template-columns` and `grid-template-rows` in `style.css` to change the grid size.

## Future Enhancements

- Add difficulty levels (e.g., varying grid sizes).
- Include a timer to challenge players to match all pairs within a time limit.
- Save high scores locally or to a leaderboard.
- Add sound effects for card flips and matches.

## Contributing

Contributions are welcome! If you have ideas for improvements or new features, feel free to submit a pull request.

**Enjoy the Card Memory Game and challenge your friends to beat your score!** 🎉