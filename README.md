# How I worked on this project
My goal was to build a portfolio website to show off my experience and to simulate a professional work environment.

* I built this app based on Figma Designs. The designs were heavily influenced by [Brittany Chiang's website](https://brittanychiang.com/). These are the Figma Designs: [Figma Mobile and Desktop Designs](./src//assets//pdf/Portfolio%20Page%20UI_UX.pdf).
* I Created a Software Development Lifecycle through google docs: [SDLC](https://docs.google.com/document/d/1s22lk-YGSzNiIAYk3X1V5GO2QOzCf2eiTrnUFxmTsJo/edit?usp=sharing).
* I used gitflow workflow with two long lasting branches: Main and Development; Short Lived branches for features, hotfixes, refactoring, and touch-ups. Implemented Pull Requests on every major change and incorporated issues: [Example PR](https://github.com/alexjohn7516/personal-site/pull/13) #13 [Example Issue](https://github.com/alexjohn7516/personal-site/issues/19)

# How to navigate this project
* The website is hosted at [Domain Name](Domain)
* CSS style Modules to create mobile responsive components: [Nav Bar CSS Module and Media Queries](https://github.com/alexjohn7516/personal-site/blob/development/src/styles/Nav.module.css)
* Implemented @testing-library/react with Jest for functional Testing on outgoing links: [Example Test](https://github.com/alexjohn7516/personal-site/blob/development/src/tests/MorePojects.test.js)

# Why I built this projects this way
* I used React because I wanted to get more familiar with the framework. I could have used Vanilla JS to save on the size of the app.
* I did not use any state management libraries because the application held state for one component. If I did use state I would use react context or react query because I am learning companies are shying away from it and most small applications can use React Context or React Query with no problem.
* Professional workflows, styling, and SDLC are essential while working with a team. I wanted to learn and practice what a professional workflow feels like and have gained new knowledge to create github workflows and the use of Pull Requests. I will say I am no way an expert yet and I could improve on many aspects of titling commits, issues, PRs, and branches.
* Following company created designs is essential to building an application to standards. I created designs in Figma but I did not follow them to 100%, I was adding new features and animations to the app throughout development. In a Professional setting I do not have direct say what goes where, only suggestions.
* Testing is an essential part of the development process, it finds bugs and creates assurance that the product will work how it is intended.

# If I had more time I would change this
* I would have an appropriate style guide and linter.
* I would have created a UI kit before I started to make development easier and keep one source of truth. I repeated myself a few times in CSS with buttons and styling: [Example repeated 3 times (Hero, Nav, and Contact)](https://github.com/alexjohn7516/personal-site/blob/development/src/styles/Hero.module.css).
* Setup Continuous Integration with github actions and checked styles with ESLint on every pull request.

# What I learned and what I could do better at
* Plan Styles, Linter, UI kit, and be more descriptive in your SDLC writeup.
* Have a format for your commits, PRs, and branches.
* Create a styling format.

# The Lifecycle of this project
Over time I will add to this project. I will add work experience section, more animations, and potentially refactor my codebase depending on how I am feeling. This project is open for anyone to add to or use. All I ask for is to give me and Brittany Chiang credit somewhere in your project.