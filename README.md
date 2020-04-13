## About

This piece of code archives all of your WhatsApp Chats using WhatsApp Web.

## How to use

1. Go to [https://web.whatsapp.com/](https://web.whatsapp.com/) and make sure you're logged in
1. [Open the console](https://developer.mozilla.org/en-US/docs/Tools/Web_Console/Opening_the_Web_Console)
1. Paste the code from [index.js](index.js) and press Enter
1. If the script finishes too early, paste `archiveElementsWithDelay();` in to the console and press Enter. 

## Issues

- Due to the recursive timeouts, errors may occur. This could possibly be resolved in an alternative implementation with [Promises](https://stackoverflow.com/questions/45498873/add-a-delay-after-executing-each-iteration-with-foreach-loop/45500721#45500721)
- If you have too many broadcast lists (currently more than 20), increase the value of `modulo` in the function `archiveElementsWithDelay`.