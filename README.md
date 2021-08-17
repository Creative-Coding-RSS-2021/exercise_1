# Exercise 1

## Prepare it locally

First things first. Get this repository locally and start your own branch:
````
# clone it localy
git clone git@github.com:Creative-Coding-RSS-2021/exercise_1.git

# create your own branch: 
git checkout -b my_very_special_branch_name
````

after that install dependencies and start the project:

````
# install dependencies
yarn

# start development server 
yarn dev
````

## Lesson 1: console.log

**Goal: learn to call javascript function and a basic git routines.**

go to `src/script.js` and add your own `console.log` function call. For example:

````
console.log("it's so easy")
````

after that go to [Google Chrome Javascript Console](https://developer.chrome.com/docs/devtools/console/javascript/) and check whether you see this messege (for example "it\'s so easy") there.

when everything is fine, push your current branch state back to repository.

````
# stage your changes
git add .

# commit your changes
git commit -m "lesson 1"

# push it to repository
get push -u origin my_very_special_branch_name
````



