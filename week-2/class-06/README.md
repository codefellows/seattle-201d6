# Week 2, Class 6

# Reading Reminder

* [Two Articles on Domain Modeling]()
* [“Text” (HTML & CSS, Ch. 12) ]()
* [“Functions, Methods & Objects” (JavaScript, Ch. 3)]()

# Assignment for Class
In class, we learned how to model an entity in JavaScript using objects. Now, it's your turn to start building an application that models the problem domain below.

You will also simultaneously be working with more specific style and design concepts through this assignment over the course of this week.

*Before writing a single line of code, be sure that you have a new repository (with a README!) called campfire-coffee, and do your work in that directory. Each day you'll be working in separate branches. Once the repo is initialized and set up today, switch to a new branch for your work. Branch names can be whatever you want; it is suggested that you use some sort of standard organization such as 'day-feature' for the branch name, such as mon-models.*

[Submit Your Work](https://canvas.instructure.com/courses/990569/assignments/4231827)

## Problem Domain

Your friend Jo Kuppa has come up with a new and original method for roasting coffee beans, and Jo believes that she has a big moneymaker on her hands, even in this uniquely crowded Seattle coffee market. So, she's starting a business to market her product.

While camping one weekend, Jo noticed that the first cup of coffee from the morning campfire is uniquely wonderful and delicious. She thought about why that would be the case, and came to realize that it was the combination of the coffee aroma with the smoke from the campfire that created a distinctive flavor blend. Jo sought to recreate that flavor back in civilization, and over time, developed a process for roasting coffee beans over an open wood fire, and also that grinding the beans while they were still warm was the secret.

The problem: how to manage providing freshly-roasted and still-warm beans to her chain of coffee kiosks every single day. Obviously, she wants to roast and deliver just enough beans to each location so as to optimize her profits, and also does not want to deliver too many beans to each location, because once they cool from the roasting process the magic is gone. Nonetheless, Jo is also planning to sell beans by the pound, in special thermal vacuum packaging made right there on the spot, such that customers can buy beans right there at the kiosk from the exact same bean hopper that's used for making coffee.

Jo knows that you have been studying web development and has asked you to help with the website for her business. For now she wants two pages: one to serve as the public-facing page that visitors and customers will see at campfirecoffee.com, and the other to serve as an internal data page that will be used for managing the business.

For the public-facing page, Jo has only a couple of specific requests, but otherwise will let you handle all of the design (for now). Here's what she wants:
- a particular image of a campfire that she likes
- listing of locations and kiosk hours (6:00am to 9:00pm, 7 days a week)
- a color palette that reflects the experience of going camping
- more details coming later, she'll get them to you soon, she promises

What Jo wants on the data page (which is by far a bigger priority at the moment, so build it first) is the ability to forecast the expected customers per hour at each location, and use those numbers to plan the amount of warm beans to be delivered to each kiosk. Her market analysis has given some information as a starting point: the expected minimum and maximum number of customers per hour, and the amount of beans purchased by each.

Keep in mind that the total amount of beans sold at each location is a combination of the cups of coffee sold (1 pound of beans makes 20 cups), plus the to-go pounds that are sold. At some locations, such as the Seattle Public Library and Capitol Hill, will tend to sell more cups than pounds, whereas others, such as Pike Place Market and Sea-Tac Airport, will tend to sell more pounds to tourists.

Based on Jo's market analysis, here are the projected numbers for each location that will serve as a basis for the data you will calculate and present on the data page:

| Location  | Min/Hr  | Max/Hr  | Cups/Cust  | Pounds/Cust  |
|---|---|---|---|---|
| Pike Place Market  | 14  | 55  | 1.2  | 3.7  |
| Capitol Hill  | 32  | 48  | 3.2  | 0.4  |
| Seattle Public Library  | 49  | 75  | 2.6  | 0.2  |
| South Lake Union  | 35  | 88  | 1.3  | 3.7  |
| Sea-Tac Airport  | 68  | 124  | 1.1  | 2.7  |
| Website Sales  | 3  | 6  | 0  | 6.7  |

You'll want to calculate for a random number of customers, for each hour of operation, that falls between the minumum and maximum hourly boundaries.

Here's what Jo wants on the data page: for each location, a list that looks *exactly* like this example:

Pike Place Market
- 6:00am: 86.5 lbs [23 customers, 27.6 cups (1.4 lbs), 85.1 lbs to-go]
- 7:00am: 191.8 lbs [51 customers, 61.2 cups (3.1 lbs), 188.7 lbs to-go]
- 8:00am etc., same kind of thing calculated for each hour
- 9:00am
- 10:00am
- 11:00am
- 12 noon
- 1:00pm
- 2:00pm
- 3:00pm
- 4:00pm
- 5:00pm
- 6:00pm
- 7:00pm
- 8:00pm

## User Stories (MVP)
 - As a user, I want a webpage that displays individual store data for Campfire Coffee, so that I can be informed about how to run my business
 - As a developer, I want to use object oriented programming to build this site, so that the site will be more effective and the code will be easier to read and understand
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
 - As a developer, I want to present the store data in a table format on the webpage, so each store's data is easier to represent and understand

## Helpful Resources
[Assignment Assets](week-2/assets)
