---


<p align="center">
  <img width="412" height="167" src="https://i.imgur.com/YwK8tMe.png">
</p>

---


<p align="center">
  <img width="480" height="282" src="https://media.giphy.com/media/MPuTZQqOmYKPK/giphy.gif">
</p>



### Have you ever wanted to state your opinion and then have like no one be able to counter it? My friend, this app is for YOU. This is your time to shine. 


## Description

On Opinion, you can create an account, share your opinions, and look at the opinions of others. While you can't counter their opinions directly, you can give them a like if you are feeling that sweet sweet reinforcement of your own beliefs--or downvote them to eternity, up to you 😈

<div align="center">
<img src="https://media.giphy.com/media/eKhhSRRiIW3OrkU5ef/giphy.gif">
</div>

## Technologies used

Made with Node.js, MongoDB, vanilla JavaScript, EJS, and TailwindCSS. _Node way_, are we right?

## Use and Installation

##### You may be wondering, "Do I need any fancy stuff to run this incredible app?" And the answer to that, our friend, would be, "Nope. U good." Just put in that URL and smash that enter button.

View Project Here: [Opinions Social Network](https://opinions-social-network.herokuapp.com/)


#### "What about installing anything?" 

To use this project as a base for your own project--expanding on what we've done so far--fork the project, clone it to your local machine, and work from there! Feel free to submit pull requests if you have any additions that go along with the theme of our project. A task list is down below with future suggested improvements 😉

### Install

`npm install`

### Things to add

- Create a `.env` file and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`

#### Note: you will need to setup a cluster on MongoDB as well as create a cloudinary account to fill in the environment variables above

### Run

`npm start`
or 
`npm run dev`

---

# Packages/Dependencies Used:

    "autoprefixer": "^10.2.5",
    "bcrypt": "^5.0.1",
    "cloudinary": "^1.25.1",
    "connect-mongo": "^3.2.0",
    "dotenv": "^8.2.0",
    "ejs": "^3.1.6",
    "express": "^4.17.1",
    "express-flash": "^0.0.2",
    "express-session": "^1.17.1",
    "method-override": "^3.0.0",
    "mongodb": "^3.6.5",
    "mongoose": "^5.12.3",
    "morgan": "^1.10.0",
    "multer": "^1.4.2",
    "nodemon": "^2.0.7",
    "passport": "^0.4.1",
    "passport-local": "^1.0.0",
    "postcss": "^8.2.13",
    "tailwindcss": "^2.1.2",
    "validator": "^13.6.0"

---


## What are some sick things we've done in Opinion? 
- [x] Create a landing page for all opinions
- [x] Create a login page 
- [x] Create a sign up page
- [x] Make it so users can post their opinions
- [x] Make it so users can delete their opinions
- [x] Enable local auth
- [x] Add upvote feature
- [x] Added photo upload feature to meme out even harder

![Gif with a dude saying, "Frickin' awesome!"](https://media.giphy.com/media/xTiTnBMEz7zAKs57LG/giphy.gif)


### You may be thinking, "There's no possible way to make this app more awesome." 

![Gif of Justin Timberlake saying, "Stop it!"](https://media.giphy.com/media/oFeUVZfiuim9G/giphy.gif)

### While we are flattered, you fabulous user, we humbly submit that yes, there is more that we could do. In the future, we hope to:

- [x] Add usernames attached to opinions
- [ ] Optimize site performance 
      - [ ] Remove unused CSS 
      - [ ] Eliminate render blocking resources
      - [ ] enable text compression
- [ ] Create a public user profile page to see created opinions and amount of upvotes
- [ ] Add a hover over opinion to see a mini window of more posts created by user & be able to click to their profile
- [ ] Enable users to update their opinions
- [x] Add a downvote button 
- [ ] Make photograph upload optional
- [ ] Limit downvote to one per user per post
- [ ] Limit upvote to one per user per post

---

### The team members that made this sick app come to life are [Jeremy Seckinger](https://github.com/JeremySeckinger), [Shara Crosslin](https://github.com/citizen-snipz), [Tim Calas](https://github.com/tinytorches), [Jonathan Yau](https://github.com/Jonathankyau), [Marcelo Azevedo](https://github.com/celoazevedo), and [Ruth Reed](https://github.com/helloitsrufio). 

![Gif of NFL players do the can-can.](https://i.giphy.com/media/l3mZjdRvlqk4LB0A0/giphy.webp)

---


### Current Screenshots of our humbly opinionated app

---

![Landing Page View](https://i.imgur.com/6H8WATv.png)

---

![Login View](https://i.imgur.com/csM5110.png)

---

![Signup View](https://i.imgur.com/EwX1cGF.png)

---

![Logged In User View](https://i.imgur.com/zHE73mT.png)

---

![Feed View](https://i.imgur.com/T3cMbjs.png)
