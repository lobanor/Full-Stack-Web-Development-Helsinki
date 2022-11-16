# Exercise 0.4 Create a diagram on new note

depicting the situation where the user creates a new note on page https://studies.cs.helsinki.fi/exampleapp/notes when writing something into the text field and clicking the submit button.

```mermaid
 
 sequenceDiagram
browser->>server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
Note over browser:browser starts executing a HTTP POST Request which initiate a redirect to notes
server-->>browser: The server responds with HTTP status code 302. This is a URL redirect
 
browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->>browser: HTML-code
Note over browser:browser executes three more HTTP GET Request 
browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->>browser: main.css
browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->>browser: main.js
browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->>browser: data.json
note over browser: browser executes the event handler that renders notes to display 
 
 
```

![04](https://user-images.githubusercontent.com/58258155/201875503-c9c6643b-d6be-4182-a0ca-26c7aec0c53a.jpg)
