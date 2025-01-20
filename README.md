# Meme Generator

This project is a Meme Generator application built with React and Vite. The application allows users to generate memes by selecting a random meme image and adding custom text to it.

## Features

- **Random Meme Image**: Fetches random meme images from an external API.
- **Custom Text**: Users can add custom top and bottom text to the meme.
- **Controlled Components**: Demonstrates the use of controlled components for form inputs.
- **Functional Programming**: Utilizes functional programming concepts in React.
- **Fetching Data**: Fetches data from an external API to get meme images.
- **Side Effects**: Manages side effects using the `useEffect` hook.

## How It Works

1. **Fetching Meme Images**: The application fetches meme images from the Imgflip API when it loads.
2. **Controlled Components**: The text inputs for the top and bottom text are controlled components, meaning their values are managed by the React state.
3. **Generating Memes**: Users can click a button to get a new random meme image and add their custom text to it.
4. **Rendering**: The meme image and text are rendered dynamically based on the state.

## Installation

To install and run the project locally, follow these steps:

1. Clone the repository:
   

2. Install dependencies:
    ```sh
    npm install

3. Start the development server:
    ```sh
    npm run dev

4. Open your browser and navigate to `http://localhost:3000`



## License

This project is licensed under the MIT License.

## Acknowledgements

- [Imgflip API](https://imgflip.com/api) for providing meme images.
- [React](https://reactjs.org/) for the UI library.
- [Vite](https://vitejs.dev/) for the build tool.
- [Tailwind CSS](https://tailwindcss.com/) for the CSS framework.
