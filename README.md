<h1 align="center">Streamily</h1></br>

<p align="center">
:notes: A full stack web app to stream lossless FLAC music off of your Google drive. :musical_note:
</p>
<br>

<p align="center">
  <a href="#"><img alt="TypeScript Language Badge" src="https://badgen.net/badge/icon/typescript?icon=typescript&label"/></a>
  <a href="#"><img alt="chrome Badge" src="https://badgen.net/badge/icon/chrome?icon=chrome&label"/></a>
  <a href="https://github.com/k4u5h4L"><img alt="k4u5h4L GitHub badge" src="https://badgen.net/badge/GitHub/k4u5h4L?icon=github&color=24292e"/></a>
</p>

<br>
<p align="center">
<img width="360px" src="assets/logo.png" alt="offthepan logo"></img>
</p><br>

## To run:

-   Clone and cd into the repo.

```
git clone https://github.com/k4u5h4L/Streamily.git && cd Streamily
```

-   Install the required dependencies for both client and server.

```
cd client && npm install
```

```
cd .. && cd server && npm install
```

-   Start the development server by running

```
npm run devStart
```

This will start the [server on port 8000](http://localhost:8000). We will now start the client too.<br>
On another terminal navigate to the `client` directory and run:

```
npm start
```

This should spin up the site on [localhost:3000](http://localhost:3000). You can now visit the site.

## Note:

-   You can keep the TypeScript compiler on watch mode and use nodemon to execute the build files. This will be faster than using `ts-node` which is triggered by running `npm run devStart`. To run your server in watch mode:<br><br>

    Open another terminal and navigate to the `server` directory and run:

    ```
    npm run watch
    ```

    Now in your primary terminal run:

    ```
    npm run dev
    ```

    Now your server is running the same way except it's much faster.<br>

-   This project is made as a hobby and is <b>NOT</b> a commercial application.

-   Any contribution is welcome. You can fork and submit a pull request.
