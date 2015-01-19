# [Style Components](http://amindunited.github.io/style_components)

A simple scaffoling and workflow for getting example components up on github / and github pages.


## Getting started

 1. Clone this repo

 2. run 
   ```bash
   npm install
   ```

 3. run 
   ```bash
   bower install
   ```

## Use

 1. run 
  ```bash
  broccoli serve
  ```

 2. point your browser to localhost:4200

 3. Edit your files in the src/ folder

 4. When you are happy, commit

 5. to deploy github pages:

 	a. delete the public directory:
  ```bash
  rm -r public/
  ```

 	b. build you public folder:
  ```bash
 	broccoli build 'public'
 	```

 	c. commit to your github pages
 	```bash
 	grunt deploy
 	```
