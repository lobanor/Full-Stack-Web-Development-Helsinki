# Exercise 0.6  New note ( SPA )

Create a diagram depicting the situation where the user creates a new note using the
single page version of the app.

```mermaid
 
 sequenceDiagram
browser->>server: HTTP POST Request https://studies.cs.helsinki.fi/exampleapp/new_note_spa


note over server: the server returns a HTTP Status 201 indicates that as a result of HTTP POST request, one or more new resources have been successfully created 

server-->>browser: The server responds with HTTP status code 201 (Resource created)

 
```


# Illustration

![05-a](https://user-images.githubusercontent.com/58258155/202223237-ca11922a-0998-4aa5-a374-a77dc9e1f3f1.jpg)

![05-b](https://user-images.githubusercontent.com/58258155/202223252-47699496-f3b4-4159-9508-e23b4e986ee4.jpg)

![05-c](https://user-images.githubusercontent.com/58258155/202223254-48dcc81a-8fae-44f0-bb3b-a001098180b0.jpg)
