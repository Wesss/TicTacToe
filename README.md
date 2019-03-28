# Tic-Tac-Toe

## Running the Game
In the email I used to submit this game, I've included a dist.tar bundle. Extract that, and then open the `index.html` file in your favorite browser.

If you want to build the game from source, then do the following:
1. clone or download this repository
2. install nodejs if you haven't already, following the instructions here: https://nodejs.org/en/download/
3. run the following in the repository's root directory
```
npm install npm@6.9.0
npm ci
npm run start
```

You may also run `npm run test` to run unit tests, or `npm run build` to build a production-ready release

## Discussion

The three most prominent product features of this game are colored X's and O's, showing a faded X/O when hovering over a blank tile, and having a large font size for the title and the buttons. The reason for these features are all in an effort to make the interface clear and self explanatory.
I decided to add more color/imagery to the game instead of something like adding directions because colors and imagery are much easier to take in by users. Leaving users to read directions, no matter how simple or straightforward they may be, still requires effort on their part and can be off-putting.

Two engineering features I'd like to point out are the unit test suite and the circleCI continuous integration. Both of these are essential when working with large scale applications, as the combination of the two prevents bugs and errors from going out over time and has the bonus of showing other engineers exactly what you're code it meant to do and how its meant to ship out to other environments. The CI here only runs a build and test, but even then its already helped me catch a small set of bugs.
