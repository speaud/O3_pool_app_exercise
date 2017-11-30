# POOL APP EXERCISE 

At O3, we love pool, but we love new technology and data even more. So, we frequently use pool or more specifically pool game tracking as a test bed for new frameworks and libraries.

Please develop an application that can be used for pool game tracking. 

It should have the following features / functionality:

* Create Players (you do not need to implement updating and deleting players )
* Game management
  * Select 2 players for a game
  * Choose a winner
* Leaderboard of players with the most wins
* Should be usable on a variety of device sizes (aka Responsive)

Feel free to use technologies you think are most appropriate, but be prepared to back up your decisions.

Please deliver a link to the app and the code for it on github.

------

# Developer Notes

### Preamble

At first I was going to haul-off to find some canvas-based pool game example I could rip then re-purpose to work with some database then build out a few API’s then…you get the point.

But the notion of KISS/Rule of least power quickly kicked in…shortly followed by Atwood’s Law, et al., and so-forth...

Then couple that line of thinking with the notion that you all, or whomever, would have to clone then run this locally...what would be the best route...

Basically I didn’t want box configuration, IDE/DB export formatting issues, nor local dependency issues to arise (e.g., MongoDB data path, missing global dependencies, incompatible unix-like flavors, etc.) when whomever was trying to run this...

So this is what I arrived at...

If we were building this out for a MVP/production release while following Atwood, et al., thus using only JavaScript, we would've used some stack like...

* MongoDB
* Express (Build and manage API requests, alongside Postman for development)
* React + Redux 
* Node
* ...and various NPM packages of course

...but we can talk more about that or other approaches later on.

Aside, Atwood didn't nor could've foreseen the strides Dahl/Schlueter, et al., were going to make with Node and...ramble for another time

"Things missing," that should be included in this project, if it were a formal production product or if I had an inordinate amount time and whatnot, but aren't include:

* Integrated testing, unit and e2e, framework for this stack (e.g., Jest bundle, Jasmine, Selenium, etc.)
* Code quality management tools (e.g., JSLint, JSHint, DeepScan, etc.)
* Formal documentation, in this case JSDoc would've been the go-to

### Overview

In this repo we're using a React + Redux bundle alongside Webpack, which we leverage for the local dev server, HMR, release bundling...

I went with React Bootstrap to posture this exercise...it's not my favorite but the package works. Aside, once Material UI releases a stable v1 things will get weird (in a good way)

###### Directory Structure

* app
  * etc (FHS - "Editable Text Configuration" or "Extended Tool Chest")
  * [sudo browser stdout]
  * [node modules]
  * public
  * src (where the formal code-base is located)
    * actions
    * components (stateless)
    * containers (stateful)
    * reducers
    * store
    * styles

> [Directories] are ignored/not included in the repo  

###### Noteworthy Features and NPM Considerations

Babel, SaSS, persistedState method, ...

### Getting Started

> Requirements: Node v6+, global NPM dependencies for admin-like UAC if running Darwin OS or Linux dist

Clone the repo

Within the root of this repo run the following command ```cd app && npm i && sudo npm run start```

> NOTE: `sudo` is not required for Windows OS

That's it, you should be up-and running...if there are any issues please feel free to reach via out email or just open an issue for this project then I'll respond accordingly

------

Other referance materials

* [CodePen](https://codepen.io/SpeauDetcR/#)
* [Personal Website](http://joshuamummert.com/)
* [LinkedIn](https://www.linkedin.com/in/jmummert/)