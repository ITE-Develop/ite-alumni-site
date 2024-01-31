# Getting Started
## Project Setup
Instrall Required Package:
```
npm install
```
Create a copy of `.env.example` file and rename it to `.env` define the required variables as shown below:
```
VITE_API_BASE_URL=<your-api-base-url>/v1
```

Example:
```
VITE_API_BASE_URL=http://localhost:8000/v1
```

## Local Server
To run localhost server, Please run the following command:
```
npm run dev
```

## Production
To run a production site, Please run the following command:
```
npm run build
```

## Remote Virtual Server
To run a remote virtual server, Please run the setup the configuration in `.env`:
```
# DEV SERVER
VITE_DEV_SERVER_URL="http://softbankdpline.com"
VITE_DEV_SERVER_PORT="8080"
VITE_DEV_SERVER_CLIENT_PORT="80"
```

After configure these variable. Please run the following command:
```
npm run dev
```