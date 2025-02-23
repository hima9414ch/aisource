/*
API Endpoints Summary:

1. Authentication Endpoints:
   - POST /register
     Request body: { username: string, password: string }
     Response: { message: string } or { error: string }

   - POST /login
     Request body: { username: string, password: string }
     Response: { token: string } or { error: string }

2. Property Endpoints:
   - GET /properties
     Response: Array of property objects
     No authentication required

   - GET /properties/:id
     Response: Single property object or 404 error
     No authentication required

   - POST /properties
     Request body: {
       title: string,
       price: number,
       address: string,
       description?: string,
       bedrooms?: number,
       bathrooms?: number,
       area?: number,
       imageUrls?: string[]
     }
     Response: Created property object
     Requires authentication

   - PUT /properties/:id
     Request body: Same as POST /properties
     Response: Updated property object
     Requires authentication

   - DELETE /properties/:id
     Response: { message: string }
     Requires authentication

Authentication:
- Protected routes require a JWT token in the Authorization header
- Format: 'Bearer <token>'

Error Responses:
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error
*/