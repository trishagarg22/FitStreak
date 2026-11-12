# FitStreak

FitStreak is a small, multi-page health and fitness website built with plain **HTML, CSS and JavaScript**. It offers daily wellness tips, a BMI calculator and beginner-to-advanced workout plans, all without any frameworks or libraries.

**Live demo:** https://trishagarg22.github.io/fitstreak/

## Features

### Home
- Hero section with a call-to-action button linking to the BMI calculator
- **Daily Tip** box: a "Next tip" button shows a random health tip and never repeats the same tip twice in a row
- "Essentials of Well-Being" cards covering nutrition, exercise and sleep

### BMI Calculator
- Takes weight (kg) and height (cm)
- **Input validation**: shows a clear error for empty or unrealistic values
- Shows the BMI rounded to one decimal place with its category: Underweight, Normal, Overweight or Obese
- Highlights the matching row in the BMI range table
- Includes a note that BMI is a rough guide and not medical advice

### Workout Plans
- Three tabs: **Beginner**, **Intermediate** and **Advanced**
- Each tab shows a table of exercises with sets, reps and rest time
- A level-specific tip under the table
- An **Exercise Guide** gallery with a picture and caption for each exercise
- If an image file is missing, that picture is skipped instead of showing a broken icon

## Built With

| Technology | Used for |
|---|---|
| **HTML5** | Page structure, semantic tags, forms, tables, links between pages |
| **CSS3** | Flexbox, CSS Grid, CSS variables, hover and focus states, responsive layout |
| **JavaScript (vanilla)** | DOM manipulation, events, arrays and objects, loops, form validation |

## Project Structure

```
fitstreak/
├── index.html          Home page
├── bmi.html            BMI calculator page
├── workout.html        Workout plans page
├── style.css           Shared styles plus page-specific sections
├── home.js             Daily tip logic
├── bmi.js              BMI calculation and validation
├── workout.js          Workout data, tabs, table and gallery
├── Yoga.jpg            Home page background
├── nutrition.jpg       Home page card images
├── exercise.jpg
├── sleep.jpg
└── images/             Exercise pictures for the workout page
```

## How to Run Locally

1. Download or clone the repository:
   ```
   git clone https://github.com/trishagarg22/fitstreak.git
   ```
2. Open the folder.
3. Double-click `index.html` to open it in your browser.

No installation or server is needed.

## How the Code Works

Each page has its own JavaScript file, and every script follows the same pattern: find elements on the page, listen for a user action, then update the page.

- **`home.js`** stores tips in an array and picks a random one on each click.
- **`bmi.js`** validates the inputs, calculates `weight * 10000 / (height * height)`, and shows the result and category.
- **`workout.js`** keeps all exercises in one object. The table and the picture gallery are both built from that data with loops, so adding an exercise only needs one new line of data.

In `style.css`, shared rules come first, followed by sections scoped to `.home`, `.bmi` and `.workout`. Each page's `<body>` carries the matching class, so styles on one page do not affect the others.

## What I Learned

- Structuring a multi-page site with semantic HTML
- Building responsive layouts with Flexbox and Grid
- Organising CSS so one stylesheet serves several pages
- Handling events and updating the DOM with JavaScript
- Validating user input and displaying clear error messages
- Generating page content from data with arrays, objects and loops

## Possible Improvements

- A contact page with form validation
- A dark mode toggle
- Saving favourite exercises or BMI history with `localStorage`
- Click-to-enlarge exercise pictures
- Mobile navigation menu

## Disclaimer

FitStreak is a learning project. The BMI calculator and workout plans are general information and **not medical advice**. Please consult a qualified professional before starting a new exercise or diet routine.

## Credits

- Built by: **TRISHA GARG**
