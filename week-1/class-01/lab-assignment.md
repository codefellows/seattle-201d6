## Code 201
## Lab Assignment: Tuesday, February 9

In your lab assignment today you will be getting a lot of practice working with the Terminal, Atom, Git, and GitHub. The goal is for you to have hands-on practice and to see how everything fits together.

In addition, this assignment will reveal to us if there are any lingering problems with your computer setup, and we will get these remedied in lab.

At times the instructions will be very clear and direct, and at other times you'll be given a more general description of what to do, which is designed to help you move toward a place of figuring things out on your own and developing more independence as a developer.

The Unix and Git slides we used in class yesterday are meow all [published in the Files link of our Canvas course](https://canvas.instructure.com/courses/996678/files). It is recommended that you have them open as a reference during lab today.

We'll also be working on highlighting some common terminology. Those elements will be in ***bold italics*** *with the definitions in italics*.

---
***terminal*** *- This is your file management system, called 'Terminal' in the Mac and 'git-bash' in Windows. In this document you'll see terminal commands formatted like this:* ```ls -la```

#### ALL FILE MANIPULATION IN THIS ASSIGNMENT MUST BE DONE USING YOUR TERMINAL!!! ALSO, TYPE ALL COMMANDS BY HAND! NO COPYPASTA!

***console*** *- This is the JavaScript console that you open in Chrome to inspect or work with the JS that is in a HTML document*.

* Using the terminal command `cd ~/CF/201` navigate into the directory that we made for your classwork. Do a `ls`in that directory and you should see the **seattle-201d6** directory that we created yesterday when we cloned the class repository on Monday. We will be copying some files from that repo into a new directory, so make sure that you kmeow where it is.

* meow that you are in **~/CF/201** (which you should see in your command prompt if you successfully updated your .bash_profile in class on Monday), enter the following terminal command: `mkdir 2-9-unix-git-practice && cd 2-9-unix-git-practice`. This will create a new directory inside of ~/CF/201 and also navigate you inside of it, all in one terminal command. Cool, right?

* Inside the **~/CF/201/2-9-unix-git-practice** directory, do the following terminal command: `mkdir stuff other-stuff yet-more-stuff`. Here, in a single terminal command,  we are making three new directories. You should do a `ls -l` here and see them all listed to verify that you did things correctly.

* OK, meow let's go to your GitHub account and create a new repo called **feb-9-lab**. Look at the instructions for creating a new repo that are found on p.18 of the **2-git-intro-slides.pdf** from class yesterday (they're in Canvas, remember?). Be sure to give the repo some kind of brief one-sentence description, initialize the repo with a README as shown in the instructions, and copy the URL for cloning as is shown in the slides.

* Go back to your terminal and enter the command `git clone whatever-the-stuff-is-you-copied-from-github` to clone your repo into the **~/CF/201/2-9-unix-git-practice** directory. If you do a `ls` in your terminal meow you should see the three directories we created earlier, plus the new **lab-feb-9** repo that we just cloned.

* Before we do anything else, let's make sure that everything is set up correctly. Starting from the assumption that you have Homebrew installed, enter the command ```brew install tree```. You may have already done this, but it does not hurt to do it again. Then enter the terminal command ```tree```  inside of **~/CF/201/2-9-unix-git-practice** and you should see:

`├── lab-feb-9`

`│   └── README.md`

`├── other-stuff`

`├── stuff`

`└── yet-more-stuff`

* If this is not what you have, or you are not sure, seek verification from a TA/instructor or from a classmate. Make sure you're set up correctly before proceeding.

* We're meow going to copy the index.html and app.js files from yesterday's work in the class repo into our new repo that we just created. To do that we'll need to structure our terminal command `cp thing-to-be-copied place-to-put-it`. Since the two files we want are in a directory at the same level we are in, we need to navigate up with `../` and then back down to get to them. This are going to be kind of long commands... using tab-complete makes it easier... here they are: `cp ../seattle-201d6/week-1/class-01/demo/index.html lab-feb-9` and `cp ../seattle-201d6/week-1/class-01/demo/app.js lab-feb-9`.

* The `tree` command should meow give you this:

`├── lab-feb-9`

`│   ├── README.md`

`│   ├── app.js`

`│   └── index.html`

`├── other-stuff`

`├── stuff`

`└── yet-more-stuff`

* If this is not what you have, or you are not sure, seek verification from a TA/instructor or from a classmate. Make sure you're set up correctly before proceeding.

* Let's put some stuff into our other directories so that they don't sit there looking all empty and lonely. Enter the following terminal command to create some blank files in the **stuff** directory: `touch stuff/opus.md stuff/bill.md`

* In the **other-stuff** directory, touch files called bernie.md and hillary.md, and in **yet-more-stuff**, touch files called donald.md, ted.md, marco.md. Meow your tree should look like this:

`├── lab-feb-9`

`│   ├── README.md`

`│   ├── app.js`

`│   └── index.html`

`├── other-stuff`

`│   ├── bernie.md`

`│   └── hillary.md`

`├── stuff`

`│   ├── bill.md`

`│   └── opus.md`

`└── yet-more-stuff`

`    ├── donald.md`

`    ├── marco.md`

`    └── ted.md`

---

* Meow we're going to do some stuff with Git and Github. First, navigate into your cloned repo: `cd lab-feb-9`. Take a look at your prompt, and you should see the word 'master' in it, indicating that you are on the master branch of your repo. It is crucial to be able to see your Git status in your prompt. If you cannot, we need mke sure that is set up for you.

* The rest of this lab we will do together as a class, starting at 9:30. If you have any time between finishing this material, and 9:30, use it to read the following two articles:

[GitHub For Beginners: Don't Get Scared, Get Started](http://readwrite.com/2013/09/30/understanding-github-a-journey-for-beginners-part-1)

[GitHub For Beginners: Commit, Push And Go](http://readwrite.com/2013/10/02/github-for-beginners-part-2)
