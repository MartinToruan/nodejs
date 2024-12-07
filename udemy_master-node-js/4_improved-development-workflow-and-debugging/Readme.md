# How to run
Based on the package.json file, you can start the server by several ways as mentioned below
## General scripts
```angular2html
$ npm start
```

## Custom scripts
```angular2html
$ npm run start-server
```

# Auto Restart Server
There are several options to install, which are Global, Development, and Production.
## Global
```angular2html
$npm install -g nodemon
```
## Development
```angular2html
# npm install nodemon --save-dev
```
## Production
```angular2html
# npm install nodemon --save
```

To use the nodemon library, you need to change your startup script to
```angular2html
"start": "nodemon app.js",
```

# Free Harddisk Space
If you're not working on the project at the moment, you can delete the node_modules folder.
Later, when you come back and want to work at this project, you can re-install all the dependencies using:
```angular2html
$ npm install
```
That comment will look all dependencies listed on package.json field `devDependencies` for development environment.