/**
 * Package Manager
 * Hello World
 * Project strucure.
 * Global Module
 * Run and Debug
 * Import Export Local Module Management
 * File System Module
 * Working With Databases
 * Collections
 * Promise
 * Async Await
 * Typescript - Module Managment
 * Working with Database
 * Express JS
 * Express JS with Database
 */
const World = require("./2");
const three = require("./3");
const four = require("./4");

class Hello {
  static main() {
    console.log("Hello World");
    const output = World.getWorld();
    console.log(output);

    console.log(three.id, three.title, three);
    console.log(four);
  }
}

Hello.main();
