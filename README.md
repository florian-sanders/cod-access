# Cod'Access

## What is it ?

Cod'Access is a French platform where **developers can practice and discover Web Accessibility**.
Exercises consist in different **questions**, each containing **fake code with a blank space** that you need to **complete in order to make it accessible**. For every question, several options are available and can be dragged into the blank space to complete the code. (alternatively, answers can be selected with double click or space / enter keys for accessibility reasons)

Users can **create accounts** in order to save their results and **visualize their progress**. Users can update personal information and delete their account from their **profile page**.

Administrators can **manage registered users** (modify their role, delete their accounts) and **exercises** (create, modify, publish, delete) from the Admin dashboard.

## Want to see it in action ?
* A [short video of presentation, in French](https://youtu.be/DBsur_GxC9E?t=2881), is available. Although a little bit outdated when it comes to the visual aspect, this video does go through the main features of the website.
* A [demo version of the website](https://cod-access-demo.fr/) with updated visuals is also available.

## How does it work ?

This project runs as a **NodeJS** REST API communicating with a **React Application**.

### Back-end Stack

| Type | Details |
| ------------- |  ------------- |
| Languages | JavaScript, SQL |
| Running environment | NodeJS |
| Framework | Express
| Database System | PostgreSQL originally, migrated to MySQL to match my hosting services |
| Object-relational Mapping (ORM) | Sequelize |
| Main libraries | bcrypt, express-jwt, nodemailer, sanitize-html, multer, csurf |

### Front-end Stack

| Type | Details |
| ------------- |  ------------- |
| Languages | HTML, CSS, JavaScript |
| CSS Preprocessor | SASS |
| Bundler | Webpack |
| Transpiler | Babel |
| Main Libraries | React, Redux, React-Redux, React-router-dom, Axios, ckeditor, react-beautiful-dnd, dompurify |

## Things I have learnt building this project
This project was mostly made to practice and learn new things.

- JSON Web Token based authentification (stored in an HTTP Only Cookie),
- CSRF and XSS attacks,
- State management (with and without Redux, what should be stored inside Redux Store or not. See: [Organizing State - Redux](https://redux.js.org/faq/organizing-state#should-i-put-form-state-or-other-ui-state-in-my-store)),
- React Custom Hooks (creation of a useFormManager custom hook to manage form Data and input control),
- Generic reusable components (toast components, dialog component, etc.),
- Website hosting management with Amazon Web Service (EC2 + RDS)...

## Things I am currently working on
* Writing decent and actual legal notice,
* Notice about cookie usage,
* SEO (meta keywords need to be added),
* Accessibility.

## Features that did not make it (yet ?)

* Different types of exercises (Drag'n'drop exercise with multiple drop locations, Live coding exercise with automated testing),
* Documentation pages (small articles),
* Sign up link confirmation sent by e-mail.
* "Remember me" checkbox and cookie options that match the user preferences.

## Room for improvements

* The whole website should be audited for accessibility to make sure nothing was missed (because right now, I am pretty sure some things were missed),
* General performance improvements (there may be costly repaints),
* Responsive for the Admin Dashboard (the dashboard is responsive but could use some tweaks to make it better),
* Components should be reorganized to make it easier browsing through the Components folder,
* Redux State could be reorganized as well,
* ...
