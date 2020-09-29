# Eat-Da-Burger [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Eat-Da-Burger is a MySQL/Node.js application that allows the user to add a "burger" to a database, returns all burgers that were created, and allows the user to update whether the burger was devoured ot not. The application utilizes handlebars to display html elements onto the page dynamically depending on whether the burger has been devoured or has yet to be eaten. 

This project was a tough one for me. If I didn't have the weekly activities as a refernece then it would not have been a good time. Luckily I got the application to run locally. Then the bigger issue was deploying to Heroku. No matter what I tried I kept getting a 503 error. I initially used clearDB MySql to link Heroku to my databse. But that was a mistake. There were many moving pieces to that connection. After about a day and a half of trying tp debug I stumbled across a video on JawsDB MySQL which is much simpler than clearDB; at least in my opinion. I was finally abke to get the Heroku deploy up and running after utilizing JawsDB; highly recommend.

## Installation

* Download application from Git repository
* Follow link to Heroku deploy
* Open/download MySql Workbench
* Application can be ran locally/on Heroku
* Copy and paste schema and seed in Workbench

## Links to Heroku Deploy

* https://dashboard.heroku.com/apps/eat-da-burger-dl/deploy/github
* https://eat-da-burger-dl.herokuapp.com/burgers

## Screenshots

## License

MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) 2020 David Lindner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
