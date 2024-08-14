# node-express-template

This is a simple express template

---

## Install

    $ git clone https://github.com/angeldeathz/node-express-template
    $ cd PROJECT_TITLE
    $ npm install

## Configure app

## Running the project

    $ npm run dev

## Build for production

    $ npm run build

# Run Database

    $ docker build -f Dockerfile.posgresql -t postgresql:latest .

# Run Database

    $ docker run --name postgresql -p 5432:5432 -d postgresql:latest
