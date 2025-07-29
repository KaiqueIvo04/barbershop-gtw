# Barbershop API Gateway

## About

This project is an API Gateway for the Barbershop application, built using [Express Gateway](https://www.express-gateway.io/). It acts as a single entry point for all client requests and routes them to the appropriate microservices. The gateway is responsible for handling authentication, authorization, rate limiting, and other cross-cutting concerns.

## Features

* **Authentication and Authorization:** Secures endpoints using JWT-based authentication and scope-based authorization.
* **Rate Limiting:** Protects services from abuse by limiting the number of requests per user.
* **Plugin-Based Architecture:** Allows for easy extension and customization through custom plugins.
* **Centralized Configuration:** Manages all gateway settings, including API endpoints, service endpoints, and policies, in a single configuration file.
* **Dynamic Routing:** Routes requests to different microservices based on the request path.

## Generate Certificates and Keys
1. For development and testing environments the easiest and fastest way is to generate your own self-signed certificates. To do this, run the `generate-dev-certs.sh` script in the root of the repository.
```sh
chmod +x ./generate-dev-certs.sh
```

```sh
./generate-dev-certs.sh
```
The following files will be created: `ca_cert.pem`, `jwt.key.pub`, `server_cert.pem` and `server_key.pem`.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/KaiqueIvo04/barbershop-gtw.git
   cd barbershop-gtw
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory by copying the `.env.example` file:
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your specific configuration.

4. **Run the gateway:**
   ```bash
   npm run start:dev
   ```
   The gateway will be running at `http://localhost:8080`.

## Configuration

The main configuration files are located in the `config` directory:

* **`gateway.config.yml`:** This file defines the gateway's core configuration, including:
    * `http` and `https` server settings.
    * `apiEndpoints`: The public-facing endpoints of the gateway.
    * `serviceEndpoints`: The backend services that the gateway proxies to.
    * `policies`: The policies that are applied to requests.
    * `pipelines`: The pipelines that connect API endpoints to service endpoints and apply policies.

* **`system.config.yml`:** This file contains system-level configurations, such as database connections and plugin settings.

### Environment Variables

The following environment variables are used to configure the gateway:

* `PORT_HTTP`: The port for the HTTP server (default: 8080).
* `PORT_HTTPS`: The port for the HTTPS server (default: 8081).
* `API_GATEWAY_HOSTNAME`: The hostname of the API gateway.
* `ACCOUNT_SERVICE`: The URL of the account microservice.
* `SCHEDULE_MANAGEMENT_SERVICE`: The URL of the schedule management microservice.
* `JWT_PUBLIC_KEY_PATH`: The path to the JWT public key.
* `SSL_KEY_PATH`: The path to the SSL key.
* `SSL_CERT_PATH`: The path to the SSL certificate.
* `EMULATE_REDIS`: Whether to emulate Redis (default: false).
* `HOST_REDIS`: The Redis host (default: localhost).
* `PORT_REDIS`: The Redis port (default: 6379).

## API Endpoints

The API endpoints are defined in the `gateway.config.yml` file. They are grouped into pipelines, which apply a set of policies to the requests.

### Public Endpoints

* **`accountPublicApi`:** Handles public authentication-related endpoints.

### Private Endpoints

* **`accountPrivateApi`:** Handles private account-related endpoints.
* **`scheduleManagementPrivateApi`:** Handles private schedule management-related endpoints.

## Database

This project uses Redis as a database for persisting data. Make sure you have a Redis instance running and configured correctly.

## Plugins

The gateway uses a plugin-based architecture to extend its functionality. The `plugin-barbershop` is a custom plugin that provides the following policies:

* **`auth-policy`:** Handles user authentication.
* **`jwt-policy`:** Validates JWT tokens.
* **`jwtScopes-policy`:** Checks for the required scopes in the JWT token.
* **`body-parser-policy`:** Parses the request body.

## License

This project is licensed under the [MIT License](LICENSE).