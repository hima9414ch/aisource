// API Endpoints Summary

/*
1. Authentication Endpoints:

POST /auth/register
- Request body: { email: string, password: string }
- Response: { message: string } or { error: string }

POST /auth/login
- Request body: { email: string, password: string }
- Response: { token: string } or { error: string }

2. Property Endpoints:

GET /properties
- Description: Retrieve all properties
- Response: Array of property objects or { error: string }

GET /properties/:id
- Description: Retrieve a single property by ID
- Response: Property object or { error: string }

POST /properties (Requires Authentication)
- Headers: Authorization: Bearer <token>
- Request body: {
    title: string,
    location: string,
    price: number,
    description: string,
    imageURL: string
  }
- Response: Created property object or { error: string }

PUT /properties/:id (Requires Authentication)
- Headers: Authorization: Bearer <token>
- Request body: Same as POST, all fields optional
- Response: Updated property object or { error: string }

DELETE /properties/:id (Requires Authentication)
- Headers: Authorization: Bearer <token>
- Response: { message: string } or { error: string }
*/
