# 🌍 World Countries Data Visualization

A dynamic data visualization application built with **HTML, CSS, and Vanilla JavaScript**.  
The application allows users to explore and compare country statistics by displaying the world's most populated countries and the most spoken languages using interactive visual progress bars.

---

## 🌐 Live Demo

👉 Website: https://cis-ahmad.github.io/World-countries-data-visualization/

---

## 📖 About

**World Countries Data Visualization** is a JavaScript application that processes country data and converts it into meaningful visual information.

The application provides two different visualization modes:

- 🌎 **Population Visualization**  
  Displays the total world population and the top 10 most populated countries.

- 🗣️ **Language Visualization**  
  Displays the top 10 most spoken languages around the world.

The project uses JavaScript data processing techniques to analyze and organize information from a country dataset, then dynamically generates the user interface using DOM manipulation.

This project was created to practice and improve skills in:

- JavaScript fundamentals.
- Data processing.
- Array methods.
- DOM manipulation.
- Dynamic element creation.
- Data visualization concepts.
- JavaScript modules.

---

# ✨ Features

## 🌎 Population Analysis

- Display the total number of available countries.
- Calculate the total world population.
- Display the top 10 most populated countries.
- Automatically sort countries based on population.
- Compare country populations using dynamic progress bars.

## 🗣️ Language Analysis

- Calculate the number of times each language appears.
- Display the top 10 most spoken languages.
- Automatically sort languages based on usage.
- Visualize language popularity using progress bars.

## ⚡ General Features

- Dynamic DOM rendering.
- Interactive buttons for switching between visualizations.
- Data calculation using JavaScript array methods.
- Clean and simple user interface.
- No external libraries required.
- Uses JavaScript ES6 modules.
- Fully runs inside the browser.

---

# 🛠️ Built With

- HTML5
- CSS3
- JavaScript (ES6)
- JavaScript Modules

### JavaScript Concepts Used

- DOM Manipulation
- Event Handling
- Array Methods:
  - `map()`
  - `reduce()`
  - `sort()`
  - `slice()`
  - `forEach()`
- Objects and Arrays
- Dynamic HTML Creation
- Data Transformation

---

# 📂 Project Structure

```
World-countries-data-visualization/
│
├── index.html
├── style.css
├── script.js
├── data.js
│
└── assets/
```

---

# ⚙️ How It Works

## 1. Loading Data

The application imports country information from the data module:

```javascript
import { countriesData } from "./data.js";
```

The data contains information such as:

- Country name
- Population
- Capital
- Flag
- Languages

---

## 2. Population Visualization

When the user selects **Population**:

The application:

1. Calculates the total world population.
2. Sorts countries by population.
3. Selects the top populated countries.
4. Calculates each country's percentage compared to the world population.
5. Creates progress bars dynamically.

Example:

```
World          ████████████████  Population
China          ███████           Population
India          ██████            Population
```

---

## 3. Language Visualization

When the user selects **Languages**:

The application:

1. Counts how many countries use each language.
2. Sorts languages from highest to lowest.
3. Selects the top 10 languages.
4. Creates visual progress bars dynamically.

Example:

```
English        █████████████
French         ███████
Spanish        ██████
```

---

# 📚 Concepts Practiced

This project helped reinforce my understanding of:

- JavaScript Modules
- DOM Manipulation
- Dynamic Element Creation
- Event Listeners
- Data Processing
- Array Manipulation
- Higher Order Functions
- Sorting Algorithms
- Object Handling
- Data Visualization
- Clean Code Organization

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/CIS-Ahmad/World-countries-data-visualization.git
```

## Run The Project

Open:

```
index.html
```

in your preferred browser.

No installation, dependencies, or external packages are required.

---

# 🔮 Future Improvements

Possible improvements for future versions:

- Add country search functionality.
- Add filtering by continent.
- Add detailed country information cards.
- Add interactive world map visualization.
- Add charts using visualization libraries.
- Add population comparison between selected countries.
- Improve mobile responsiveness.
- Add animations when switching between statistics.
- Add dark/light theme support.

---

# 👨‍💻 Author

**ICE**

GitHub:  
https://github.com/CIS-Ahmad

Portfolio:  
https://cis-ahmad.github.io/portfolio/
