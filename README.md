## Backend Setup

```bash
cd backend
npm install
```

## Set up the .env file in the backend folder:
Create a new file named .env and add the following environment variables:

```bash
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=your-db-user
DATABASE_PASSWORD=your-db-password
DATABASE_NAME=your-db-name
JWT_SECRET=your-secret-key
API_URL=your-frontend-url
```

## Start the backend server:

```bash
npm run start
```

The application will be hosted on port 3000 at local enviornment http://localhost:3000/.