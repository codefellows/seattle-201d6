## New week, new project!
# BusMall

You've been hired by a startup called BusMall, whose product is similar to the SkyMall catalog found in the seatback pockets on airplanes: a catalog of assorted high-markup products provided to a captive audience seeking a mental escape from the drudgery of travel. But in this case, BusMall catalogs are placed on Puget Sound regional transit system buses... whose overall travel times are now comparable to cross-country flights, after all.

Since catalogs are expensive to print and distribute, and the products cost money to make and warehouse, and BusMall is a lean startup that needs to carefully watch its expenditures, BusMall wants to feature only the items in its catalog that are the most likely to sell. This means that BusMall wants to do market analysis on proposed products to test their potential customer interest... before actually putting them into the catalog and getting the manufacturing wheels in motion.

To make this market analysis maximally effective, BusMall wants you to build an app that displays potential products to individuals in focus groups (three products at a time, side-by-side-by-side, so you'll need to manage the size and the aspect ratio of the images and perhaps edit them a bit; Mac users can do this in Preview, believe it or not, plus there are lots of online tools. Then have the group members choose the product they would be most likely to purchase of the three over a lot of iterations, and then store, calculate, and visually display the resulting data.

To keep the product selection process as untainted as possible, you have been instructed to not allow any results to be shown to the user until there have been a total of 25 selections made. Also, the marketing research team has asked that you not automatically display the results after 25 clicks, but instead to put two buttons on the page: one that allows the participant to view the results, and another that allows the participant to vote 10 more times.

The marketing team is not only interested in the total number of clicks, but also the percentage of times that an item was clicked when it was shown. So, you'll also need to keep track of how many times each image is displayed.

You are also responsible for the look and feel of the app, so don't forget a custom font, color palette, layout with semantic HTML (and maybe a Skeleton or flexbox approach to layout) and so on.

# User Stories

Part of your assignment today is to write your own user stories. Be sure to consider the multiple roles involved: the marketing research team, the developer, and the focus group participant who will be using the application. DO THIS STEP FIRST. The commit logs in your repo will have a first couple of commits for the scaffolding process, but next you should have a 'user stories' commit that is in place before any code is written.

## Goals to complete by the end of lab Tuesday morning

- Create a new repo for this weekly project called **bus-mall** at the root level of your *~/CF/201* directory.
- Scaffold your repo with the usual README, CSS, JS, and HTML files, plus a *img/* directory.
- Retrieve the assets from the *assets/* directory in the *week-03* directory of our class repo and place them in your image directory.
- Write your user stories as described above and place them in a file called *user-stories.md* in your repo. Utilize good Markdown style to make this document look nice.

The thing you want to build today will select three random photos from the image directory and display them side by side by side in the browser window.

In addition, you'll want to be able to receive clicks on those displayed images, and track those clicks for each image. You'll also want to track how many times each image is displayed, for statistical purposes.

Upon receiving a click, three new random images need to be displayed.

To do this, you'll want a constructor function that creates an object associated with each image, and has properties for the name of the image, its filepath, the number of times it has been shown, and the number of times it has been clicked.

All of that is an adequate amount of progress to have completed by class time on Tuesday.
