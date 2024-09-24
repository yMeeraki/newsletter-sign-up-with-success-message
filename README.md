# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Github](https://github.com/yMeeraki/newsletter-sign-up-with-success-message)
- Live Site URL: [Netlify](https://newslettersignup-fem.netlify.app)

## My process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Responsive design with media queries
- Vanilla JavaScript for form validation
- Mobile-first workflow

### What I Learned

One of the main challenges was implementing form validation and showing error messages based on the email input. I also learned how to efficiently toggle between the success and form views using JavaScript.

Here’s an example of the email validation logic:

```javascript
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const isValid = emailPattern.test(email.value);

if (!isValid) {
  errorMessage.style.display = 'flex';
  email.style.backgroundColor = 'hsl(4, 100%, 87%)';
  email.style.border = '1px solid hsl(4, 100%, 67%)';
}
```

### Continued Development

In future projects, I plan to focus on the following areas:

- **Advanced Form Validation**: I want to explore more complex validation techniques and possibly integrate libraries like Formik or Yup in React to manage form state and validation more effectively.

- **Responsive Design**: Although I have implemented responsive design in this project, I aim to refine my skills further. I plan to study more about fluid layouts and CSS Grid to create more dynamic and adaptable designs.

- **JavaScript ES6 Features**: I want to become more proficient with ES6 features, such as destructuring, spread/rest operators, and async/await, to enhance code readability and efficiency.

- **Accessibility**: Ensuring that my projects are accessible to all users is a priority. I plan to learn more about ARIA roles and properties to improve the accessibility of my web applications.

- **Performance Optimization**: I intend to explore techniques for optimizing the performance of my web applications, including lazy loading images and using code splitting in React.

- **User Experience (UX) Design**: Understanding user behavior and improving the overall user experience is crucial. I want to delve into UX design principles and usability testing methods to create more intuitive applications.

I look forward to applying these areas of focus in my upcoming projects to enhance my skills and deliver better user experiences.


### Useful Resources

- [Scrimba - Learn JavaScript](https://v2.scrimba.com/learn-javascript-c0) - This platform helped me reinforce my understanding of JavaScript fundamentals through interactive coding exercises. I found the hands-on approach very effective for learning.

- [freeCodeCamp - Learn Form Validation by Building a Calorie Counter](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/learn-form-validation-by-building-a-calorie-counter/step-10) - This article was instrumental in teaching me form validation techniques. The practical examples were particularly helpful for applying the concepts in real-world scenarios.

## Author

- Frontend Mentor - [@yMeeraki](https://www.frontendmentor.io/profile/yMeeraki)

