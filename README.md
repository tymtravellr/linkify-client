# Linkify

Linkify is a simple project that allows users to manage and share their social media links. Follow the instructions below to set up and run the project.

## Installation

To install and run the Linkify client locally, follow these steps:

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

4. Create a .env.local file in the root directory and add the following environment variable for the API route:

```bash
VITE_APP_API_ROUTE=https://linkify-server.vercel.app/
```

## Running the Application

To run the application locally, use the following command:

```bash
npm run dev
```