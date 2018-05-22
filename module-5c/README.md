# Module 5 - Real-life TDD

Module 5 gives you experience with applying TDD to real-life problems. It is broken into three submodules: [5a. Mocking Dependencies](../module-5ab/README.md#module-5a-mocking-dependencies), [5b. Business Logic](../module-5ab/README.md#module-5b-business-logic), and [5c. Fixing Bugs](#module-5c-fixing-bugs).

## Module 5c: Fixing bugs

One of the best places to introduce TDD into a project is by fixing bugs. This submodule will show you how to fix bugs with TDD, giving you confidence to introduce it into your projects.

### Background

For this module, we've got bug reports for our "✨JavaScript Unicorn 🦄 Name Generator ✨".

TDD is useful for fixing bugs. You can write a test that proves the bug exists, and therefore fails, and then fix the bug by making the test pass. 

### Bugs

#### 1. Lower-case not supported

People who don't use capital letters for their first name, middle name, last name, or birth month are not getting expected results.

&#128073; Write more tests against the name-generator translators, to make sure you are getting the correct names for lower case values provided for first name, middle name, last name, and birth month.

#### 2. Error when no middle name is provided

People who don't have middle names are getting an error. We don't want to exclude them!

&#128073; Write a test for a person with no middle name, and make it pass.

#### 3. Full month-names are required

Someone tried calling our unicorn-name-generator api with 'Jan' instead of 'January', and got an error. 

We should probably support month abbreviations.

&#128073; Write some tests that use abbreviations for month names, and make them pass.

We probably should also support lowercase month names/abbreviations, if we aren't already. 

&#128073; Write tests to support lowercase month abbreviations, and make them pass if they don't already.

#### 4. Zeke gets the wrong name

According to the table, a user named Zeke get Dashing, but we got a report that he is getting Piercing instead. 

&#128073; Write a test against the first-name-translator for Zeke. Find & fix the bug, resulting in a passing test.

#### 5. Alex Puccio gets the wrong name

Alex Puccio calls to tell us she's getting the wrong name. We tell her that can't be possible, we even wrote a test specifically for her. You can find this test in `module-5c/name-generator/index.spec.js`.

Look again [at the generation rule table](#generation-rules). We're generating the wrong name for her. 

&#128073; Correct the name in the test. This will result in a failing test.

&#128073; Figure out why her test was incorrectly passing. Correct the behavior, so that the updated test passes.

Tests aren't infallible. Sometimes we get them wrong, and in doing so, we miss bugs. Test-Driven Development can't help you escape bugs, but it can help you document requirements exactly as you understand them.

### Generation Rules

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
