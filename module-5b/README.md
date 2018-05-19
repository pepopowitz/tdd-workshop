# Module 5 - Real-life TDD

## Fixing bugs

Fixing bugs - 
  1. People who don't use capital letters are not getting results.
    Write more tests against the name-generator translators, to make sure you are getting back names for lower case.
  2. People who don't have middle names are getting an error. We don't want to exclude them!
    Write a test for a person with no middle name, and make it pass.
    You can write this test against the middle-name-translator, or against the unicorn-names/controller. You decide which one makes more sense!
  3. Someone tried calling our unicorn-name-generator api with 'Jan' instead of 'January', and got an error. 
    We should probably support month abbreviations. Write some tests that use abbreviations, and make them pass.
    a. We probably should also support lowercase month names/abbreviations, if we aren't already. Write tests and make them pass.
  4. Zeke gets the wrong first name.
    According to the table, he should get Dashing, but he gets Piercing instead. 
    Write a test against the first-name-translator for Zeke, and see if that helps you find the bug.
  5. Alex Puccio calls to tell us she's getting the wrong name. We tell her that can't be possible, we even wrote a test specifically for her.
    Look again [at the generation rule table](#generation-rules). We're generating the wrong name for her. 
    See if you can figure out why her test (in module-5b/name-generator/index.spec.js) is incorrectly passing, correct the test, and then correct the behavior.

    Tests aren't infallible. Sometimes we get them wrong, and in doing so, we miss bugs. Test-Driven Development can't help you escape bugs, but it can help you document requirements exactly as you understand them.


## Generation Rules

This table lists the rules for generating a JavaScript unicorn name.

| First Initial     | Middle Initial     | Last Initial       | Birth Month           | Birth Date                         |
|-------------------|--------------------|--------------------|-----------------------|------------------------------------|
| **A**: Emerald    | **A**: Royal       | **A**: Hooves      | **Jan**: Tamer of     | **1**: Associative Arrays          |
| **B**: Sunny      | **B**: Sugar       | **B**: Bubbles     | **Feb**: Wielder of   | **2**: JavaScript Fatigue          |
| **C**: Snowy      | **C**: Magic       | **C**: Dream       | **Mar**: Breath of    | **3**: Yak Shaving                 |
| **D**: Whispering | **D**: Sparkle     | **D**: Jewels      | **Apr**: Whisperer of | **4**: No Semicolons               |
| **E**: Elegant    | **E**: Spotted     | **E**: Twirly-Tail | **May**: Face of      | **5**: Webpack                     |
| **F**: Silly      | **F**: Happy       | **F**: Starshine   | **Jun**: Conjurer of  | **6**: Bananas in Boxes            |
| **G**: Fluffy     | **G**: Golden      | **G**: Toes        | **Jul**: Harvester of | **7**: Linting rules               |
| **H**: Ruby       | **H**: Princess    | **H**: Briar       | **Aug**: Heart of     | **8**: JSX                         |
| **I**: Tiny       | **I**: Serene      | **I**: Socks       | **Sep**: Healer of    | **9**: Object.assign               |
| **J**: Rising     | **J**: Crystal     | **J**: Glimmer     | **Oct**: Seeker of    | **10**: filter/map/reduce          |
| **K**: Perky      | **K**: Silver      | **K**: Kisses      | **Nov**: Avenger of   | **11**: Bikeshedding               |
| **L**: Dancing    | **L**: Lovely      | **L**: Sunrise     | **Dec**: Harbinger of | **12**: Angular                    |
| **M**: Whirling   | **M**: Prince      | **M**: Wings       |                       | **13**: React                      |
| **N**: Shiny      | **N**: Peaceful    | **N**: Starfire    |                       | **14**: Immutability               |
| **O**: Enchanted  | **O**: Rainbow     | **O**: Sunset      |                       | **15**: Functional programming     |
| **P**: Merry      | **P**: Regal       | **P**: Comet       |                       | **16**: .babelrc                   |
| **Q**: Shimmering | **Q**: Starry      | **Q**: Heart       |                       | **17**: Promises                   |
| **R**: Cloudy     | **R**: Flowing     | **R**: Dandelions  |                       | **18**: Closures                   |
| **S**: Sassy      | **S**: Cuddly      | **S**: Moonbeam    |                       | **19**: The virtual DOM            |
| **T**: Soaring    | **T**: Forever     | **T**: Darkness    |                       | **20**: Electron                   |
| **U**: Fuzzy      | **U**: Glitter     | **U**: Thunder     |                       | **21**: Type-safety                |
| **V**: Fancy      | **V**: Cascading   | **V**: Starlight   |                       | **22**: Variable hoisting          |
| **W**: Bedazzled  | **W**: Tender      | **W**: Brambles    |                       | **23**: The event loop             |
| **X**: Prancing   | **X**: Sweet       | **X**: Twinkle     |                       | **24**: npm                        |
| **Y**: Piercing   | **Y**: Feisty      | **Y**: Fairy       |                       | **25**: CSS-in-JS                  |
| **Z**: Dashing    | **Z**: Spirit      | **Z**: Miracle     |                       | **26**: IIFEs                      |
|                   |                    |                    |                       | **27**: Pure functions             |
|                   |                    |                    |                       | **28**: TypeScript                 |
|                   |                    |                    |                       | **29**: Cross-site Request Forgery |
|                   |                    |                    |                       | **30**: Memoization                |
|                   |                    |                    |                       | **31**: Vue                        |
