
# _Ted Leary's Beep Booper_

#### _This site provides a user with the opportunity to translate numbers into beeps and boops._

#### _By Ted Leary_

## _Behavior Driven Development Breakdown_

* _1. Program takes in a value and outputs numbers from 0 up to the inputted value.
input: 8
output: [1, 2, 3, 4, 5, 6, 7, 8]_

* _2. Program replaces 0 with "Beep"
input: [0]
output "Beep"_

* _3. Program replaces 1 with "Boop"
input: [0, 1]
output: "Beep, Boop"_

* _4. Program identifies a string or number containing 0 and replaces with "Beep"
input: [ .... 10]
output: "...Beep"_

* _5. Program identifies a string or number containing a 1 and replaces with "Boop"
input: [....12]
output: "...Boop"_

* _6. Numbers divisible by three will be replaced with "I'm sorry Dave, I'm afraid I can't do that."
input: [0, 1, 2, 3]
output: "Beep, Boop, 2, I'm sorry Dave, I'm afraid I can't do that."_

* _7. Program should determine which action to take on a number with both 1's, 0's and numbers divisible by 3 in an order of importance.
input: [0...10, ... 13, ....30]
output "Beep, ...Boop, ...Boop, I'm sorry Dave, I'm afraid I can't do that.""



## The purpose of this website is to allow the user to input a number to be translated into beeps and boops.

* _clone the repository from github_

## Known Bugs

_None_

## Support and contact details

_If you have any questions or concerns regarding this application, please feel free to email the author at markeleary@gmail.com_

## Technologies Used

_This site uses HTML, CSS, and Bootstrap version 3.3.7, Jquery version 3.3.1, and JS_

## Site repository

https://github.com/1stBoltCrux/beepboop.git

### License

*MIT License

Copyright (c) [year] [fullname]

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
SOFTWARE.*
