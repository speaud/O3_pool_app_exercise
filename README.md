# POOL APP EXERCISE 

At O3, we love pool, but we love new technology and data even more. So, we frequently use pool or more specifically pool game tracking as a test bed for new frameworks and libraries.

Please develop an application that can be used for pool game tracking. 

It should have the following features / functionality:

* (A) Create Players (you do not need to implement updating and deleting players )
* (B) Game management
  * (B1) Select 2 players for a game
  * (B2) Choose a winner
* (C) Leaderboard of players with the most wins
* (D) Should be usable on a variety of device sizes (aka Responsive)

Feel free to use technologies you think are most appropriate, but be prepared to back up your decisions.

Please deliver a link to the app and the code for it on github.

------

# Developer Notes

### Preamble

At first I was going to haul-off to find some canvas-based pool game example I could rip then re-purpose to work with some database then build out a few API’s then…you get the point.

But the notion of KISS/Rule of least power quickly kicked in…shortly followed by “Atwood’s Law,” and so-forth.

That line of thought when coupled with the notion that you all, or whomever, would have to clone then run this locally...

Basically I didn’t want box configuration, IDE exports, or dependency issues to arise (e.g., MongoDB data path, missing global dependencies, incompatible unix-like flavors, etc.) when whomever was trying to run this...

We could've used some sandbox/playground service to host this (e.g., Plnkr, CodePen, Fiddle, JSBin, etc.) but as denoted within the provided instructions you all wanted "...code for it on github." Works for me...

Aside, if we were building this out for a MVP/production release while following Atwood, thus using a full JS stack, we would've used some stack like...

* MongoDB
* Express (Handle API requests)
* React + Redux 
* Node
* ...and various NPM packages of course

...but we can talk more about that or other approaches later on.

### Overview

In this repo we're using a React + Redux bundle alongside Webpack which we leverage for our local dev server, HMR, release bundling, etc.

###### Directory Structure

...

###### Noteworthy Features and NPM Considerations

Babel, SaSS, persistedState method, ...

### Getting Started

Within the root of this repo run the following command ```cd app && npm i && sudo npm run start```

> NOTE: `sudo` is not required for Windows OS
