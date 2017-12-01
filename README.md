# POOL APP EXERCISE

> NOTE: The instructions initially given to me are reiterated below

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

At first I was going to haul-off to find some canvas-based/WebGL interactive pool game example I could rip then re-purpose it for...(i.e., web, iOS, Android) stack bundle and…you get the point.

However, the notion of KISS/Rule of least power quickly kicked in…shortly followed by Atwood’s Law, et al., and so-forth...

Then couple that notion with the fact that whomever would have to clone then run this locally...

Basically I didn’t want box configuration, IDE/DB export formatting issues, nor local dependency issues (e.g., MongoDB data path, missing global dependencies, incompatible unix-like flavors, etc.) when whomever was trying to run this...

So what would be the best way to go about this...what's something I want to work with...nonetheless, this is where I ended up at.

### Overview

In this repo we're using a React + Redux bundle alongside Webpack which we leverage for the local dev server, HMR, release bundling, transpiler (via Babel)...

I went with React Bootstrap to posture and meet the responsive spec declared in the instructions. It, React Bootstrap, is not my favorite but it works for this exercise.

> NOTES: I have tab index set to 2 using the babel syntax package. You can uncomment DevTools in ./src/index.js for redux dev tools. Open the browser console for logger output. There are some residual dependencies declared in the package.json file that are used by the store but not truly required for this exercise however that won't be an issue here. Just making all that known...

###### Directory Structure

* app
  * [bin] - compiled release build 
  * etc - config
  * [sudo browser stdout]
  * [node modules]
  * public
  * src - client code-base
    * actions
    * components
    * constants
    * containers
    * reducers
    * store
    * styles

> Directories enclosed in "[]" are ignored/not included in the repo  

### Getting Started

> Requirements: Node v6+, global NPM dependencies if admin-like UAC requirements are needed if your running Darwin OS (i.e., if you're using a Mac) or some Linux flavored dist

Clone the repo

Within the root of this repo run the following command ```cd app && npm i && sudo npm run start```

> NOTE: `sudo` is not required for Windows OS

[Here is a link to a screencast which shows the working state of this application](https://youtu.be/-yYifmdLRH4)

That's it from me. You should be up-and running...if there are any issues/questions please feel free to reach out via email or just open an issue here if need-be then I'll respond accordingly

### Closing Notes

"Things missing," that should be included in a formal project such as this, if it were created for a production release or if I had an inordinate amount time and whatnot, but haven't been would include:

* Structured testing methods for both unit and e2e testing, in this case a Jest + Enzyme + ...would've been included
* Code quality management and coverage tools (e.g., JSLint, JSHint, DeepScan, etc.)
* Formal documentation. In this case, for the client side, JSDoc would've been the go-to
* Structured VCS management (e.g., repo branching, release tagging)
* Formal backend database and API layer. In this case, a MEAN/MERN-stack, MongoDB for the database then build out API's using a Express server instance (standalone or coupled) then document with Postman or...
* Various production-related concerns such as CI, bundling chunking/splitting/optimization, environment config, etc...

...but again, we can talk more about that at another time.

------

Other referance materials

* [CodePen](https://codepen.io/SpeauDetcR/#)
* [Personal Website](http://joshuamummert.com/)
* [LinkedIn](https://www.linkedin.com/in/jmummert/)
