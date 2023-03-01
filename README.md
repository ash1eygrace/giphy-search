# Giphy Search

Welcome to the Giphy Search repository!

## Live demo

A live demo of the app is available at https://giphy.ash1eygrace.com


https://user-images.githubusercontent.com/29527450/222156214-5b9ba704-aad7-4859-8f7d-f44b27c17124.mov


## Purpose of this App 🤖

The purpose of this app is to provide an easy and user-friendly way to search for GIFs on Giphy. 

## App Features:

- Displays default GIFs of cats on the homepage on the initial load
- Inlcudes a earch bar that accepts a user input.
- Uses [Axios](https://axios-http.com/docs/example) to get response of user's query from Giphy's [API search endpoint](https://developers.giphy.com/docs/api/endpoint/#search) upon search submit.
- Handles race conditions for quick consecutive searches.
- Displays a loading screen while we await the response on slower screens. (Use Chrome Dev Tools to throttle to fast 3G) 
- Replaces default homepage GIFs with the results of user query.

## Installation: 

1. Clone the repository to your local machine. git clone git@github.com:ash1eygrace/scoreboard.git
2. Install the dependencies. npm install
3. Start the app. npm start
