# Interactive Media Design Continuous Assessment 2
This portfolio website was created for CA2 in Interactive Media Design.  
This README contains information about how this site meets the requirements/grading criteria, there may be some parts that I missed including in this section.  
All feedback given was implemented.  

## Phone and Tablet Support
The site is functional/displays well for small and medium screens. Testing was performed on different devices by using Google Chrome's DevTools.  

## Navbar
Contains a (non-functional) searchbar.  
Collapses on smaller screens, site is easy to scroll through on mobile and navbar would just be clutter for a single page site on mobile.  
My CV can be downloaded from the navbar by simply clicking on the CV link.

## Home Page
About Me is a full white button with a dark border, Email Me only has white outline -- this is to indicate that About Me is the intended Primary Action on this page.  

## About Page
A fetch from NASA's APOD API is used to display their Astronomy Picture of the Day.  
Icons are animated to wiggle when hovered over.  

## Education Page
Progressive Disclosure is used, instead of listing all of the module results from every year, the user is able to select which year they would like to see results from.  

## Experience Page
Contains cards that detail my work experience.  
Cards contain progress bars for skills I used while working.  
When hovering over the bar for a skill, a tooltip will appear that gives more information about it.  

## Achievements Page
Contains a Carousel in the Competitions card that displays pictures of me in various Cloud Computing competitions.  

## Projects Page
Contains cards with different projects I have worked on, images of them, and GitHub links.  
2nd Year Project and Image to ASCII Convertor projects do not have GitHub repos and instead link to the Portfolio repo.  
GitHub icons wiggle when hovered over.

## Contact Page
Contact Me button is a different colour and has a dark border to mark it as the Clear Primary Action on this page.  
Red asterisks are used as Required Field Marks for the Contact Form.  
Thank you message is displayed on form submission, this message clears after 3 seconds and the form becomes visible again.

## JavaScript
1. Astronomy Picture of the Day is fetched from NASA's APOD API
2. Google Maps is embedded in the footer.
3. Scrollspy is used to indicate current section in the navbar.
4. Contact Me Form displays a thank you message which clears after 3 seconds so that the form is visible again.