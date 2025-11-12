# Node.js Hello World Application

A simple Node.js HTTP server that responds with "Hello World!" to all requests.

## Features

- Simple HTTP server using Node.js built-in `http` and `url` modules
- Responds with personalized "Hello [Name]!" message
- Supports custom name input via URL parameters
- Runs on port 3000
- Graceful shutdown handling
- No external dependencies required

## Prerequisites

- Node.js (version 12 or higher recommended)

## Installation

1. Navigate to the project directory:
   ```bash
   cd node-hello-world
   ```

2. No additional installation required - uses only Node.js built-in modules!

## Usage

### Start the server

You can start the server using either of these commands:

```bash
npm start
```

or

```bash
node index.js
```

### Access the application

Once the server is running, open your web browser and navigate to:

**Basic usage (default):**
```
http://localhost:3000
```
You should see "Hello World!" displayed in your browser.

**With custom name:**
```
http://localhost:3000?name=John
```
You should see "Hello John!" displayed in your browser.

**Examples:**
- `http://localhost:3000?name=Alice` → "Hello Alice!"
- `http://localhost:3000?name=Bob` → "Hello Bob!"
- `http://localhost:3000` → "Hello World!" (default)

### Stop the server

To stop the server, press `Ctrl+C` in the terminal where the server is running.

## Project Structure

```
node-hello-world/
├── package.json    # Project configuration
├── index.js        # Main application file
└── README.md       # This file
```

## How it works

The application creates a simple HTTP server that:
1. Listens on port 3000
2. Parses URL query parameters to extract the `name` parameter
3. Responds with "Hello [Name]!" where [Name] is from the URL parameter or "World" by default
4. Sets appropriate headers including CORS support
5. Handles graceful shutdown when interrupted

**URL Parameter Format:**
- Parameter name: `name`
- Usage: `http://localhost:3000?name=YourName`
- Default: If no name is provided, defaults to "World"

## License

MIT