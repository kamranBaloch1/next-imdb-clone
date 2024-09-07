

# IMDb Clone

A fully responsive IMDb clone built with **Next.js** using the latest app routing features and integrated with the **IMDb API** for real-time movie data fetching. The project includes a **dark and light mode** toggle to enhance user experience across different themes.

## Features

- 🔍 **Real-time Data Fetching**: Fetch movie details, ratings, and actor profiles directly from the IMDb API.
- 🌗 **Dark and Light Mode**: Toggle between dark and light themes for better accessibility and user preference.
- 🚀 **Server-Side Rendering (SSR)** and **Client-Side Rendering (CSR)** for improved performance and SEO.
- 📱 **Responsive Design**: Works seamlessly across desktop and mobile devices.
- ⚙️ **Dynamic Routing**: Powered by Next.js app routing to handle dynamic pages for movie listings and actor profiles.

## Technologies Used

- **Next.js**: For building the app with the latest app routing features.
- **IMDb API**: To fetch movie data and provide real-time information.
- **TailwindCss**: For styling the application and ensuring responsive layouts.
- **React Context API**: To handle theme switching between dark and light modes.

## Getting Started

To run this project locally, follow the instructions below:

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v14 or later)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:kamranBaloch1/next-imdb-clone.git
   ```

2. Navigate to the project directory:

   ```bash
   cd imdb-clone
   ```

3. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Create a `.env.local` file in the root directory and add your **IMDb API Key**:

   ```bash
     API_KEY=your_imdb_api_key
   ```

5. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The app will be available at `http://localhost:3000`.

## Project Structure

```plaintext
├── public/             # Static files (images, icons, etc.)
├── src/                # Source code
│   ├── components/     # Reusable components
│   ├── pages/          # Next.js pages and routing
│   ├── styles/         # Global and component-specific styles
│   └── utils/          # Helper functions and utilities
└── README.md           # Project documentation
```

## Contributing

Feel free to contribute to this project by submitting a pull request or reporting any issues in the [issues](https://github.com/kamranBaloch1/imdb-clone/issues) section of this repository.

## License

This project is licensed under the MIT License.

## Author

👤 **Kamran Baloch**

- GitHub: [kamranBaloch1](https://github.com/kamranBaloch1)
- LinkedIn: [kamran-baloch](https://www.linkedin.com/in/kamran-baloch/)
- Instagram: [kamran_baloch__](https://www.instagram.com/kamran_baloch__)

---
