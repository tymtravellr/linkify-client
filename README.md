# Linkify

Linkify is a simple project that allows users to manage and share their social media links. Follow the instructions below to set up and run the project.

Before running the project, make sure you have `Node.js` and `npm` installed on your machine.

I have also developed a server for this project.You can check it if you want. You will find it [here](https://github.com/tymtravellr/linkify-server).

## Installation

To install and run, follow these steps:

1. Clone the repository:
```bash
   git clone https://github.com/tymtravellr/linkify-client.git
```

2. Change into the project directory:
```bash
   cd linkify-client
```

3. Install the project dependencies:
```bash
   npm install
```

4. Create a `.env.local` file in the root directory and add the following environment variable for the API route:

```bash
VITE_APP_API_ROUTE=https://linkify-server.vercel.app/
```

## Running the Application

To run the application, use the following command:

```bash
npm run dev
```
