# Advertyzement 
### Project Description:
In this repository we will look at the API call to get the user data and display on profile card and show a loader while the API fetches the data.

**Demo:** <https://sushantgk11.github.io/Advertyzement/>

### Steps followed:  
1.	Created new React app using “**npx create-react-app <app-name>**”
2.	Created **‘Navbar’** and **‘Card’**  components for reuse and used Glassmorphism style for Card.
3.	Created **'Userprofile'** component.
4.	In Userprofile component,  created **userData** and **isLoading** states  using **"useState"**  hooks.
5.	In userprofile component defined  **gerUserData()** function to return “fetch()” function to make http requests to an API & It returns a promise!
6.	Tthis fetch request, We're making a request to **‘https://reqres.in/api/users?page=1'** and adding **.then()** to take the server's successful response and returning that response converted into JSON.
7.	Before fetching an API set the loader to **‘true’** state for display loading screen.
8.	what have our data converted into JSON we want to display that data. To do this we can chain another **.then()** method onto our first one, to set our data into **userData**  variable using useState hook.
9.	After the setting the userData state then set the loader to **‘false’** state.
10. Installed react–loading  using **“npm i react-loading”**
11. Imported react-loading in **'Userprofile'** component then returned loader in JSX when loader state is **'true'**
12.	Imported Navbar component which having **'Get Users'** button and retuned it in JSX.
13.	Passed  **getUserData()** function as props value into Navbar.
14.	Imported Card component then passed** userData**  as props value to the Card.
15.	Then this Userprofile component rendered in **index.js** .
16.	Now we can run this app.
