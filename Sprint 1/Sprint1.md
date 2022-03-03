## Social Bytes - Sprint 1

As part of Sprint1, we had created a basic template page for our website which includes,
- A home page which displays the present events being hosted.
- Another page for creating an event by filling the details in the form. Once details are filled, request is sent to backend.
The backend parses the passed JSON data and stores in the database. Different endpoints are created for getting the event data and for posting the event data. 
The database used is sqlite3 and with the help of ORM library GORM, which helped in converting the object mapping into database and subsequent table for storing data. 
