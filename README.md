# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./images/Screenshot%202023-02-16%20at%2008-42-19%20Frontend%20Mentor%20Interactive%20card%20details%20form.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

This was my first project using tailwind css. Still getting used how to use this framework, but I found it very good to style the components and it caused way less things to break in the page because each component has its own classes with the styling parameters, making it easy to spot errors. I tried to use mostly classList.toggle to add and remove the tailwind classes and therefore reducing the number of if...else statements necessary in the code. Also, I added some error messages that were not in the original project to make the form validation more complete (like checking if the card number, month, year and CVC have an appropriate value and the correct number of digits). Feedback is welcome!

### Useful resources

- [Tailwind CSS documentation](https://tailwindcss.com/) - This helped me learning about Tailwind classes

## Author

- Website - [Felipe Thomé](https://www.github.com/felipetn1989)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
