
![node js basics](https://github.com/chloe0524/holbertonschool-javascript-coding/assets/127857895/ba890fdc-1b7c-4573-bb28-56b904b7a2e0)

### 0. Executing basic javascript with Node JS :computer:

In the file `0-console.js`, create a function named `displayMessage` that prints in `STDOUT` the string argument.

### 1. Using Process stdin :keyboard:

Create a program named `1-stdin.js` that will be executed through the command line. It should:

- Display the message `Welcome to Holberton School, what is your name?` (followed by a new line)
- Allow the user to input their name on a new line
- Display `Your name is: [INPUT]`
- When the user ends the program, display `This important software is now closing` (followed by a new line)

### 2. Reading a file synchronously with Node JS :book:

Using the provided `database.csv` file, create a function `countStudents` in `2-read_file.js` that:

- Accepts a path as an argument
- Reads the database file synchronously
- Logs the number of students and the number of students per field, along with their names

### 3. Reading a file asynchronously with Node JS :hourglass:

Similar to task 2, but create a function `countStudents` in `3-read_file_async.js` that:

- Reads the database file asynchronously
- Returns a Promise
- Logs the same information as task 2

### 4. Create a small HTTP server using Node's HTTP module :globe_with_meridians:

In `4-http.js`, create a small HTTP server using the `http` module that:

- Listens on port 1245
- Displays `Hello Holberton School!` in the page body for any endpoint

### 5. Create a more complex HTTP server using Node's HTTP module :rocket:

In `5-http.js`, create a small HTTP server using the `http` module that:

- Listens on port 1245
- Displays `Hello Holberton School!` when the URL path is `/`
- Displays the list of students when the URL path is `/students`

### 6. Create a... small HTTP server using Express :sparkles:

Install Express and create a small HTTP server in `6-http_express.js` that:

- Listens on port 1245
- Displays `Hello Holberton School!` for the endpoint `/`

### 7. Create a more complex HTTP server using Express :muscle:

In `7-http_express.js`, recreate the small HTTP server using Express that:

- Listens on port 1245
- Displays `Hello Holberton School!` when the URL path is `/`
- Displays the list of students when the URL path is `/students`

### 8. Organize a complex HTTP server using Express :building_construction:

Organize a full server in the `full_server` directory with the following structure:

- `utils.js`: Function to read the database asynchronously
- `controllers/AppController.js`: Class with a static method to handle the homepage
- `controllers/StudentsController.js`: Class with static methods to handle student routes
- `routes/index.js`: Link routes to controllers
- `server.js`: Create an Express server using the defined routes

The server should handle the following routes:

- `/`: Display `Hello Holberton School!`
- `/students`: Display the list of students
- `/students/:major`: Display the list of students for the specified major (CS or SWE)
