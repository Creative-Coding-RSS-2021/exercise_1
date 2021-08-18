# Exercise 1


## Prepare it locally

First things first. Get this repository locally and start your own branch:
````
# clone it localy
git clone https://github.com/Creative-Coding-RSS-2021/exercise_1.git

# go to folder
cd exercise_1

# create/switch to your own branch: 
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



## Lesson 2: canvas

**Goal: learn basics of canvas drawing api.**

- add a `canvas` tag between `<body> ... </body>` in `src/index.html` like:

````
 <body>
    <canvas id="exercise_1"></canvas>
 </body>   
````


- go back to `src/script.js` and let javascript talk to this new HTML element:

````
const canvas = document.getElementById('exercise_1') 

````

- start an `CanvasRenderingContext2D` context in order to be able to draw smth.

````
const context = canvas.getContext('2d');
````


- now you can start drawing, for example like that:

````


````




