
unicorn name generator as a service

command line tool that takes inputs & calls unicorn name generator

mock out unicorn name generator 


fix a bug - middle name doesn't work if i give it an entire name? or what if I don't have a middle name?
  people who don't send capital letters are not getting results
    hint: you should write more tests against the name-generator translators, to make sure you are getting back names for lower case!
  can't send abbreviation for birth month?
  birth month is off by one?
  zeke gets the wrong name (copypasta)
  do this in a test- 
      birthDate: 'January',
      birthDate: 26,
    and make it pass. 
    we get a call that it's generating the wrong name for this person.
      this shows that sometimes your tests are wrong, and you need to fix THEM.
  integration test - UI sends '26', but we're looking for 26
