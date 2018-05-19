# Module 5 - Real-life TDD

## Mocking dependencies

Route finder

Sport: cycling, mountain biking, running, trail running, hiking

Hills: Easy, Medium, Hard


mock out api

## Business logic

One great place to introduce TDD into your app is business logic. Business logic is generally not related to UI, which is harder to test. It can also be easily isolated to small functions, which makes it easier to write, read, and maintain tests. 

>> Write tests to handle the `distance` parameter being passed into our trails API controller (`/module-5a/api/trails/controller.js`).

We get a query parameter passed into the api for handling distances. It's named 'distance', and it contains a number that reflects the approximate number of miles we want to search for.

Depending on the value, the range of results will vary.

* If the distance is less than 10, it should return trails within a mile of the value passed in. For example, if the value passed in is 3, it should return results from 2 to 4 miles long.
* If the distance is more than 10 but less than 20, it should return trails within 2 miles of the value passed in. For example, if the value passed in is 15, we should see results from 13 to 17 miles long.
* If the distance is more than 20, it should rturn trails within 3 miles of the value passed in. For example, if the value passed in is 24, we should see results from 21 - 27 miles long.

Once you've written tests and implemented this, you can verify the behavior in the app by entering a distance.




## Mocking

>> Read the examples

>> When the API returns no results, we should show a message that says "No results found."

>> When the API throws an error, we should show a message that says "Something went wrong."

