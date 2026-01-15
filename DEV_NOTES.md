# DEV_NOTES 

## Early Stages
- Create a field for AI question
- Create a button for AI to generate question
- Create a field for user to type response
- Create a button for user to submit response

- Generate a question
- Submit a response, simultaneously query Open AI
- Receive response

## Laster Stages
- Query Data set of questions
- Convert chosen question into voice and play it to user
- Record and transcribe audio response
- Receive, convert and play feedback to user

## 


## Learning Documentation

### Component Structure and Organization
- Learning to break the application into smaller, reusable components.
- Using helper files to separate logic and utility functions from main components.

### CORS
- CORS allows my frontend to communicate with a backend running on a different port.
- Without it, the browser blocks cross-origin requests by default.

### Fetch Headers
- `headers` is a separate key in the `fetch` request options object.
- It tells the server how to interpret the request data, such as JSON.

### Request Body and JSON
- `req.body` contains the parsed request data on the backend.
- `JSON.stringify()` converts a JavaScript object into a JSON string so it can be sent in a request.

### Nodemon
- Nodemon automatically restarts the server when files change.
- This lets me see updates without manually restarting the backend.

### Running Full Stack Apps
- Both the backend and frontend must be running at the same time.
- Each runs on its own port and communicates over HTTP.
