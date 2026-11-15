# Rwanda Opportunities Explorer

## About the Project

Rwanda Opportunities Explorer is a React web application that helps users discover different opportunities across Rwanda, including workshops, career events, community activities, seminars and short courses.

Users can search, filter, sort, save and add new opportunities through a simple and responsive interface.

This project was developed as part of a React integrated project to practice React components, props, state management, conditional rendering and form handling.

## Features

- **Explore Opportunities:** View opportunities from different categories and cities in Rwanda.
- **Search:** Search opportunities by title or city.
- **Filter:** Filter opportunities by category, availability and saved status.
- **Sort:** Sort opportunities by date, title or available seats.
- **Save and Unsave:** Save interesting opportunities.
- **Add Opportunities:** Add new opportunities using a form.
- **Form Validation:** Check required fields, dates, capacity and prices.
- **Dashboard Statistics:** View total, available and featured opportunities.
- **Conditional Rendering:** Display featured, free and fully booked badges, loading, error and empty states.
- **Responsive Design:** Use the application on desktop and mobile screens.

## Technologies Used

- React
- JavaScript
- Vite
- Tailwind CSS v4
- HTML
- CSS

## Installation and Setup

### Prerequisites

Before getting started, make sure you have installed:

- Node.js
- npm

### Creating the Project

The project was created using Vite.

1. Open your terminal in the folder where you keep your projects.
2. Create a new Vite project:

   ```bash
   npm create vite@latest
   ```

3. Follow the instructions in the terminal:
   - Enter the project name: `rwanda-opportunities-explorer`
   - Choose React as the framework.
   - Choose JavaScript+React compiler as the variant.

4. Navigate into the project folder:

   ```bash
   cd rwanda-opportunities-explorer
   ```

5. Install the project dependencies:

   ```bash
   npm install
   ```

### Installing Tailwind CSS

Install Tailwind CSS and its Vite plugin:

```bash
npm install tailwindcss @tailwindcss/vite
```

Configure Tailwind CSS in `vite.config.js` and import Tailwind in `src/index.css`.

### Running the Project

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal in your browser.

## Project Structure

```text
rwanda-opportunities-explorer/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Badge.jsx
│   │   ├── Button.jsx
│   │   ├── OpportunityCard.jsx
│   │   ├── OpportunityFilters.jsx
│   │   ├── OpportunityForm.jsx
│   │   └── OpportunityList.jsx
│   │
│   ├── data/
│   │   └── seedOpportunities.js
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## Data Source

The application uses sample opportunity data stored locally in JavaScript. It does not require a backend or external API.

New opportunities are added to React state during the session.

## Future Improvements

- Connect the application to a backend and database.
- Add user authentication.
- Allow users to manage their own opportunities.
- Add more advanced filtering options.

## GitHub Repository

You can find the project source code here:

[ Rwanda Opportunities Explorer on GitHub](https://github.com/Musekura20/rwanda-opportunities-explorer)

## Author

Developed as a React learning project.
