# Simple Calculator App

A lightweight, web-based calculator built with HTML, CSS, and JavaScript. It supports basic arithmetic operations including addition, subtraction, multiplication, and division.

## Features

- Responsive and clean user interface
- Supports basic arithmetic operations (+, -, \*, /)
- Clear button to reset the display
- Error handling for invalid expressions
- Decimal point support

## Project Structure

```
simple-calculator/
├── index.html    # Main HTML file with calculator layout
├── styles.css    # CSS file for styling the calculator
├── script.js     # JavaScript file for calculator functionality
└── README.md     # Project documentation
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, etc.)
- A text editor (e.g., VS Code) for modifying the code (optional)

### Installation

1. Clone or download the project files to your local machine.
2. Ensure all files (`index.html`, `styles.css`, `script.js`) are in the same directory.

### Running the App

1. Open `index.html` in a web browser by either:
   - Double-clicking the file, or
   - Serving it through a local server (recommended for development).
2. Use the calculator by clicking the buttons or interacting via a touchscreen.

### Running with a Local Server

To avoid CORS issues or test in a development environment:

1. Install a local server like `Live Server` in VS Code or use a tool like `http-server` (Node.js).

2. Run the server in the project directory:

   ```bash
   npx http-server
   ```

3. Open the provided URL (e.g., `http://localhost:8080`) in your browser.

## Usage

- **Numbers (0-9)**: Click to input digits.
- **Operators (+, -, \*, /)**: Click to add arithmetic operations.
- **Decimal (.)**: Add a decimal point to numbers.
- **Equals (=)**: Calculate the result of the expression.
- **Clear (C)**: Reset the display to `0`.

## Notes

- The calculator uses JavaScript's `eval()` function for calculations. Be cautious when extending the app to handle user input from untrusted sources, as `eval()` can pose security risks.
- Error handling displays "Error" for invalid expressions (e.g., division by zero or malformed input).

## License

This project is open-source and available under the MIT License.
