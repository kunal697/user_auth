# User Management API

This API provides endpoints for user authentication and management, including user registration, login, and searching for users.

## Base URL

```
https://toposel.vercel.app/api
```

## Endpoints

### 1. Register User
**Endpoint:**
```
POST /auth/register
```

**Description:**
Registers a new user.

**Request Headers:**
- `Content-Type: application/json`

**Request Body (JSON):**
```json
{
  "username": "kunal_test",
  "email": "kunal_test@example.com",
  "password": "SecurePass123",
  "fullName": "Kunal Bodke",
  "gender": "Male",
  "dob": "2000-05-15",
  "country": "India"
}
```

**Response:**
- `201 Created` on success
- `400 Bad Request` if input validation fails

---

### 2. Login User
**Endpoint:**
```
POST /auth/login
```

**Description:**
Authenticates a user and returns a JWT token.

**Request Headers:**
- `Content-Type: application/json`

**Request Body (JSON):**
```json
{
  "email": "kunal_test@example.com",
  "password": "SecurePass123"
}
```

**Response:**
- `200 OK` on success with a JWT token
- `401 Unauthorized` if credentials are incorrect

---

### 3. Search User
**Endpoint:**
```
GET /user/search
```

**Description:**
Searches for a user by username.

**Request Headers:**
- `Authorization: Bearer <JWT_TOKEN>`

**Query Parameters:**
- `username` (string) - Username to search for

**Example Request:**
```
GET /user/search?username=kunal
```

**Response:**
- `200 OK` with user data
- `401 Unauthorized` if the token is missing or invalid
- `404 Not Found` if no user is found

## Authentication
For protected routes, include the `Authorization` header with a Bearer token:
```
Authorization: Bearer <JWT_TOKEN>
```

## Notes
- Ensure to use a valid JWT token for protected routes.
- Use raw JSON format in the request body for `POST` requests.
- The API follows standard HTTP response codes for errors.

---

## Contact
For any issues or inquiries, reach out to the development team.

## Installation and Usage
### Prerequisites
- Node.js
- npm or yarn

### Setup
```sh
git clone https://github.com/your-repo/user-management-api.git
cd user-management-api
npm install
```

### Running the Server
```sh
npm start
```

### Environment Variables
Create a `.env` file in the root directory and add:
```
PORT=5000
JWT_SECRET=your_secret_key
DATABASE_URL=your_database_url
```

### Testing with Postman or cURL
Use the endpoints as described above with Postman or the following cURL commands:
```sh
curl -X POST https://toposel.vercel.app/api/auth/register \
-H "Content-Type: application/json" \
-d '{"username": "kunal_test", "email": "kunal_test@example.com", "password": "SecurePass123", "fullName": "Kunal Bodke", "gender": "Male", "dob": "2000-05-15", "country": "India"}'
```

