# Experimental React + WASM using Webpack5

Emscripten's SDK kinda "takes over" NPM with its own version.
It's important to have 2 terminals,
1) will compile the C code into WASM,
2) for all other work.

Can likely get around this with Docker. https://emscripten.org/docs/getting_started/downloads.html
https://hub.docker.com/r/fabianonunes/emsdk/tags

As of March 18, 2020:
WASM module loading only works with Webpack 5's importAwait:
`npm install --save-dev webpack@beta`

Babel-loader doesn't like that. Originally, I thought that since it supports topLevelAwait, it may work and did the following:

`npm install "git://github.com/babel/babel-loader.git"`
    or add to devDependencies:  `"babel-loader": "git://github.com/babel/babel-loader.git",`
and then cd to  /node_modules/babel-loader/ and run: `yarn install` to install the package properly

Emscripten reference commands:
./emsdk activate latest
source ./emsdk_env.sh

emcc -Os math.cpp -o math.wasm
emcc test.c -s EXPORTED_FUNCTIONS=['_testing'] -s WASM=1 -O3 -o test.js
-O3 also valid
-s WASM=1
-s

Each time a change is made to a .c or .cpp file, in terminal 1 run one of the emscripten commands.