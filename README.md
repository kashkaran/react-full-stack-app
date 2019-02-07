# Install docker
[Official Get Started](https://www.docker.com/get-started)

## Download Mongo image
```bash 
$ docker pull mongo
```
### Create mongo data folder
```bash
#linux/mac/windows
$ cd <to-appropriate-directory>
$ mkdir data
```

### Create Docker container
```bash
$ docker run -p 27017:27017 -v <path-to-your-data-folder> mongo
```

### learn more about running mongoDb as a Docker container [here](https://www.thachmai.info/2015/04/30/running-mongodb-container/). 


# Setup the app

## Clone repository

```bash
$ git clone git@github.com:kashkaran/react-full-stack-app.git
```

## Initial setup
```bash
$ npm run setup
```

## Running the app
```bash
$ npm start
```
