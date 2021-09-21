*****
Steps to Start
*****

Step 1. npm start will run npm develop

Step 2. Will give you the Localhost:8000 and the graphql localhost 

Step 3. Create a Layout Component which will serve as the base website

Step 4. Create a Nav component for navigation using the Link component 

Step 5. Create a Footer component for a footer accross the website

Step 6. Create a gatsby-browser.js file and a gatsby-ssr.js file to render the layout for the entire webpage 

Step 7. Use normalize.css on layout to create a styling base

Step 8. Use the sytled components inside of component files to make styled components. 

Step 9. Use a Typography file to import font faces

Step 10. Create a Sanity file

Step 11. Using the cli, write sanity init --reconfigure to bootstrap a new project

Step 12. Look athe Sanity.json file for parts, parts are pieces of JS that have to be loaded

Step 13. Start creating schema files 

Step 14. Add schema files to the sanity.js file and import the schemas to that file.

Step 15. Look at the preview function

Step 16: Add react components inside the sanity file

Step 17. Add react component to the field you want to change

Step 18. Look at PatchEvent import to help the react component in sanity

Step 19. On the Gatsby side, observe the GraphQl local host

Step 20. Query data in the Graphql UI 

Step 21. Deploy GraphQl, In the Sanity folder run ****************** -> sanity graphql deploy
https://github.com/sanity-io/gatsby-source-sanity#graphql-api
https://www.sanity.io/docs/graphql

Step 22. Download and import dotenv dependency       

Step 23. Graphql playground --> https://ssdhgonr.api.sanity.io/v1/graphql/production/default

Step 24. Query Data in each page and notice which is a static query or a page query

Step 25. In the Gatsby-Node file, add all the data that needs to be pushed to your pages or components and create pages for each query

Step 26. In the Gatsby-Node file, can also be used to call on external APIs and render the content of the api in a seperate component

Step 27. Add Seo tags with react-helmet and add the react-helmet to the gatsby-config file

Step 28. Import react-helmet and start working on the SEO component

Step 29. Add SEO component to each page 

Step 30. Add custom hooks or hooks to your react page to have user-data

Step 31. See Serverless functions and look at the AWS Lambda docs for serverless functions on netlify

Step 32. Create a Netlify.toml file and let netlify know where the functions are going to live in  

Step 33. Create a functions folder at the root level

Step 34. Create a Folder inside of the functions folder and name it the same as the JS file you will be using     

Step 35. In the Functions folder, create a package.json file and let dependencies that you need in your serverless function to only live in that file    

Step 36. Use nodemailer and require it using CommonJS not ES6 modules  

Step 37. Use a transactional Email service to send emails using nodemailer  

Step 38. Look at Ethereal email for a fake SMTP email service 

Step 39. For the Host, User and password keys, put them in the .env file

Step 40. If you want to see your Sanity Graphql GUI, in the sanity folder open up a bash terminal and write sanity graphql list which will give you your sanity graphql url

Step 41. Build Pages and run graphql queries in them to build websites and if you need dynamic data to be built at the fly use Sanity's grahpql to query data. 

Step 42. Deploy sanity cms to a backend service, you can host sanity cms on sanity itself. 

Step 43. Sanity will give you a url, in this projects case it is --- https://slickssliceskelvin.sanity.studio/

Step 44. Use the GRAPHQL endpoint and fetch to fetch resources to be uploaded on the page dynamically
*****
Api or Web Components
*****

<Link to="/"> to navigate quickly between pages and push elements to the DOM

navigate() method to switching to a new page ***won't use this***

import React from 'react';

import WrapPageElement from gatsby
https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
Have to kill the build to run updates
**important

Import nodemailer to your serverless function 

Use Ethereal for a fake email service