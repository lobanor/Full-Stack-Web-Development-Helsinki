# Exercise 0.5: Single page app

Create a diagram depicting the situation where the user goes to the single page
app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa.

```mermaid
 
 sequenceDiagram
browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
server-->>browser: HTML-code
browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->>browser: main.css
browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server-->>browser: spa.js

note over browser: browser starts executing js-code that requests JSON data from server 
                      
browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->>browser: [{ content: "HTML is easy", date: "2022-11-14T10:37:49.123Z"}, ...]

note over browser: browser executes the event handler that renders notes to display 



 
 
 
```




# Ilustration
![05-0](https://user-images.githubusercontent.com/58258155/202227664-bc023b9d-613e-4bef-a215-adf3cba0bd18.jpg)

