# SBA308A
This is my Skills based Assesment for Advanced JavaScript Module.
Here you can see that i have made a web weather application.
First to get the web application to run you want to clone with repo  from my GitHub and in the terminal type (npm install) and then (npm start).
Here i will walk you through how my application runs.

index.html - 

This file has the  input and submit input button for you zip code.
It also has a Paragraph tag that tells the user to enter zip code.
Lastly, a video that loops when the user interacts with it on the page.
Hoping that in the future this video will change as the weather is told. For example if it is raining in San Fransico the location/zipcode that the user has looks up. You would then be presented a rainy video. 

styles.css - 

Here is a few styles that I did to make it engaging for user experience. 
google font which is displayed here in the body element and also is attached in the index.html in the header tag.
button:hover so that when it user goes to click the button it changes.
and a weather table which you will see was built in the get.js file.

script.js-

Here we are adding an eventListner to the search button.
Also added an eventListener to the file that is being imported.
Making sure that if a file is uploaded that is it a Jsonfile.


get.js
This is my GET request.

Using the API/fetch method storing the data in json and going into index 0 to grab the ParentCity key which will be the location of what forcast the users wanted to get.

Again, using the API/fetch method to use that location to get a five day forcast for the user.
Once we have the data for both the location and forcast for five days I started to build a table using the DOM.

put.js
This is my PUT requset.

The json file checker was so that I could meet and fulfill all  requiredments for this assissment. Lets the users upload a json file.

In this repository I used Html,Css and JavaScript.


