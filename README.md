# 🗄️ Frontend

Techstack - NextJs, Typescript, tailwind.

Most of the code lives in the `src` folder and looks something like this:

````sh
src
|
+-- app               # application layer containing: route pages
|   +-- page.tsx       # main page component
|   +-- provider.tsx  # application provider that wraps the entire application with different global providers
|
+-- components        # shared components used across the entire application
|
+-- config            # global configurations, exported env variables etc.
|
+-- features          # feature based modules I used onboarding as the main feature for this app
|
+-- hooks             # shared hooks used across the entire application
|
+-- stores            # global state stores
|
+-- types             # shared types used across the application
|
+-- styles            # shared  styles such as globals.css
|
+-- utils             # shared utility functions

Each feature folder should contain code specific to that feature, keeping things neatly separated. I used a few different libraries
such as tanstack query for fetching data, zod for input validation
and shadecn for building some of the common components such as the forms and input fields.

improvements if i had more time i would of added unit tests to the frontend (react testing libray),
to test the components and the requests from the backend. I also could of added better error
handling for the websdk and more detailed response etc.
The current implementation uses a check status endpoint and polls that until status complete as this was quick to setup. If had more time
i could of setup the Webhooks for this to work.

# Frontend setup

create .env add

```bash

NEXT_PUBLIC_API_PATH="http://localhost:8080/api"
```

First, run the development server go to backend folder and

```bash

First, run the development server go to frontend folder and

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Frontend is deployed to Vercel [https://complycube-frotend.vercel.app]
I did not manage to deploy the backend but if you run the backend locally it should as i set the api to localhost:8080

### Tests

```sh
 npx cypress run

```

# 🗄️ Backend

Techstack: Nodejs, Express

```sh
src
|
+-- app.ts            # App entry point
|
+-- api               # All the endpoints of the app
|
+-- config            # Enviroment variables and config
|
+-- loaders           # Split the startup process into modules
|
+-- test              #  Tests go here
|
+--  services         # This is where buisness logic goes ie complycube services


```

# backend setup

create .env add

```bash
# Debug
LOG_LEVEL='debug'

COMPLY_CUBE_API_KEY="API_KEY"
```

First, run the development server go to backend folder and

```bash
npm  install

npm run start

```

Tests

```bash
npm run test

```

Improvments I didn't get a chance to look at the webhooks so i just have one endpoint that checks the status,
one endpoint creates the user and the other creates the verify check process.
I could of added my own api key to secure access to this backend too.
It also would of been nice to add documentation like openai. I added some basic tests and tried to seperate
logic out into different folders. As it said nodejs server
I picked express node backend otherwise for simplicity i could of used NextJs server actions and had everything in one repo
