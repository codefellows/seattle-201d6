# Week 2 Project: pizza3001
### A Cheese Odyssey... from the Future!

In class, we learned how to model an entity in JavaScript using objects. Now, it's your turn to start building an application that models the problem domain below.

You will also simultaneously be working with more specific style and design concepts through this assignment over the course of this week.

*Before writing a single line of code, be sure that you have a new repository (with a README!) called pizza-odyssey, and do your work in that directory. Each day you'll be working in separate branches. Once the repo is initialized and set up today, switch to a new branch for your work. Branch names can be whatever you want; it is suggested that you use some sort of standard organization such as 'day-feature' for the branch name, such as mon-models.*

[Submit Your Work](https://canvas.instructure.com/courses/996678/assignments/4420835)

## Problem Domain
Your Friend, Jenny, is the owner of a small local pizza chain. Her pizza company, pizza3001, is a becoming a well known local favorite! Jenny is excited about all the attention pizza3001 has been getting in the last few years, and is ready to start growing the business.

As Jenny starts planning the expansion of pizza3001, she quickly realizes with a bigger business she's going to need a better system to help manage expenses and ordering of supplies.

One of her problems is knowing which times delivery drivers are necessary at each location. It's important to pizza3001 to keep all deliveries under 30 minutes so as to stay competitive with other pizza shops. In order to satisfy that goal in a cost-effective way, each delivery driver is expected to make 3 deliveries per hour. Time is money!

Scheduling of drivers is directly related to anticipated pizza delivery demand. At the same time, Jenny needs to know how many total pizzas she's selling so that she can order the appropriate amount of supplies and ingredients.

Jenny knows that you have been studying web development and has asked you to help with the website for her business. And, since you could use the "exposure" you'll just do this for free, right?

For now she wants two pages: one to serve as the public-facing page (index.html) that visitors and customers will automatically see at pizza3001.com, and the other (sales-data.html) to serve as an internal data page that will be used for managing the business.

For the public-facing page, Jenny has only a couple of specific requests (for now!), but otherwise will let you handle all of the design (again...for now... just wait). Here's what she wants:

- A particular image of a pizza that she likes (to be provided later)
- A listing of store locations and hours (8:00am to 2:00am, Tuesday - Sunday, Closed on Mondays.)
- A featured line that says "841 happy pizza odysseys this week!" or whatever the final total number is from the data page.
- A color palette that reflects the experience of the future.
- A custom font via Google Fonts
- There will be more details coming later, she'll get them to you soon, she pinky-swear promises (seems like stuff is always coming "tomorrow"... so get used to it!)

What Jenny wants on the data page (which is by far a bigger priority at the moment, so build it first) is the ability to display information regarding deliveries at various store locations. Her market analysis has given some information as a starting point: the expected minimum and maximum number of pizzas and deliveries per hour.

Based on Jenny's market analysis, here are the projected numbers for each location that will serve as a basis for the data you will calculate and present on the data page:

| Time  | Min Pizza/hr  | Max Pizza/hr | Min Delivery/hr | Max Delivery/hr  |
|---|---|---|---|---|
| 8am-11am  | 0  | 4  | 0 | 4 |
| 11am-2pm  | 0  | 7  | 0 | 4 |
| 2pm-5pm  | 2  | 15  | 1 | 4 |
| 5pm-8pm  | 15  | 35  | 3 | 8 |
| 8pm-11pm  | 12  | 31  | 5 | 12 |
| 11pm-2am  | 5  | 20  | 6 | 11 |   

For now, you are going to create a prototype of the webpage with randomly generated data constrainied within the boundary values in the table above. Jenny plans on having store locations in Ballard, First Hill, The International District, South Lake Union, Georgetown, and Ravenna.

Here's what Jenny wants on the data page: for each location, a list that looks *exactly* like this example:

Ballard
- 8:00am 0 pizzas, 0 deliveries -- [ driver not recommended ]
- 9:00am 4 pizzas, 2 deliveries -- [ drivers recommended: 1 ]
- 10:00am 15 pizzas, 8 deliveries -- [ drivers recommended: 2 ]
- 11:00am etc., same kind of thing calculated for each hour
- 12 noon
- 1:00pm
- 2:00pm
- 3:00pm
- 4:00pm
- ...
- 1:00am

## User Stories (MVP)
 - As a user, I want a webpage that displays individual store data for pizza3001, so that I can be informed about how to run my business
 - As a developer, I want to use object oriented programming to build this site, so that the site will be more effective and the code will be easier to read and understand.
 - As a user, I want a functional, well organized webpage that displays my data in a user friendly fashion;
- As a user, I want my data broken out in a logical fashion so that I can make more informed decision about my inventory supply;
- As a user, I want my data compiled so that I can see my product needs as business as a whole

## Technical Requirements
 - New repository properly set up with scaffolding and README, and cloned to local machine
 - Working on a non-master branch, with regular commit history
 - Good use of Object Literals; one for each store model, properties/values and methods are correctly constructed
 - Main page meets requirements of the problem domain
 - Stores are correctly rendering as lists to the data page

## User Stories (Stretch)
 - As a developer, I want to present the store data in a table format on the webpage, so each store's data is easier to represent and understand.
