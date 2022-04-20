# SocialBytes
Whatever you’re looking to do this year, SocialBytes can help. People have turned to SocialBytes to meet people, make friends, find support, grow a business, and explore their interests. Join new people who share your interests through SocialBytes events. Events are happening on just about any topic you can think of, from online gaming and photography to yoga and hiking. It’s free to create an account. Thousands of events are happening every day—join the fun.

# Tech Stack
Front End - ReactJS
<br> Back End - Go

# Team Members
SNO | Name                          | Github username| Type of development|
--- | -------------                 |:-------------: | :------------------:
1   | Chinmai Sai Eshwar Reddy Kasi   | ChinmaiSaiEshwarReddyKasi       | Backend (Go lang)  |
2   | Sohith Raja Buggaveeti                   | SohithRajaBuggaveeti    | Backend (Go lang)    |
3   | Venkata Vynatheya Jangal                  | VenkataVynatheya         | Frontend(React)    |
4   | Krishna Murthy Takkillapti               | krish0307 | Frontend (React)

# Project Info

In the final version of this project, the functions we implemented are listed below.
1. Registeration
2. Login 
3. Sign out
4. Create Event Pages
5. View the event pages
6. Search the event pages
7. Delete the events
8. Location feature in the events
9. Dark and light mode for whole website
10. Adding attendees to the events
11. Updating the user account details

## How to run the app?

### Start Backend

1. run the backend by typing
```
cd backend
go build && ./main
```
### Start Frontend
1. run the frontend by typing
```
cd frontend
npm install
npm start
```
2. open a browser and jump to http://127.0.0.1:3000

## Frontend Info
* frontend/src/pages/Home.tsx- Home page of the website which shows basic information about the website.
* frontend/src/pages/CreateEvent.tsx- Page with a form of details required to create event. User must be logged in to create the event. Event details include- event name, description, image, location and interests of the event.
* frontend/src/pages/LoginComponent.tsx- Login page of the website. Takes email and password to authenticate the user using JWT token.
* frontend/src/pages/Register.tsx- Register page of the website. Takes details like email, password, confirm password and 
* frontend/src/pages/SearchEvent.tsx- Page where all the events are shown by default. And if a user makes a query, based on the words, answering will be filtered out
* frontend/src/service/eventService.ts- A service class with methods helping in making calls from frontend to backend. 
* frontend/src/utils/EventCard.tsx- Material UI card to show the details of an event in a eye catching way with image on top and description and time on the bottom. 

## Backend Info


## References

### Demo Functionality Video:
```

```

### Cypress Test Video:
```

```

### Backend Unit Test Video:
```

```

### Link to API Documentation:
```
https://krish0307.github.io/SocialBytes/#/
```

### Link to Project board:
```
https://github.com/krish0307/SocialBytes/projects
```

### Link to Sprint4 deliverables:
```
https://github.com/krish0307/SocialBytes/projects/4
```

## Application Demo
### SignUp
![signup](https://user-images.githubusercontent.com/17436125/164298219-d1a5e6bf-0a84-4f42-bb3c-055bf15cc968.gif)

### Create Event
![](gifs/createEvent.gif)

### Search Event
![search](https://user-images.githubusercontent.com/17436125/163258645-f659a877-87dd-423d-8afe-f54f3e9f306f.gif)

### Light-Dark Theme
![LightDarkMode](https://user-images.githubusercontent.com/17436125/164293199-b71dab89-4b70-4f98-97d6-eef7b558cc3b.gif)

## Issues Faced While Development
1. Issue with CORS- Ensure CORS headers are enabled in the backend for the frontend URL
2. Google API Key- Create .env file in frontend folder with key as 'REACT_APP_GOOGLE_API_KEY'
