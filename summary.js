// API Endpoints Summary

/*
Authentication Endpoints:
1. POST /signup
   - Request body: { username: string, password: string }
   - Response: { message: string } or { error: string }

2. POST /login
   - Request body: { username: string, password: string }
   - Response: { token: string } or { error: string }

Property Endpoints:
1. GET /properties
   - No request body needed
   - Response: Array of property objects

2. GET /properties/:id
   - URL parameter: id
   - Response: Property object or { error: string }

3. POST /properties
   - Headers: Authorization: Bearer <token>
   - Request body: { name: string, price: number, location: string, description: string }
   - Response: Created property object or { error: string }

4. PUT /properties/:id
   - Headers: Authorization: Bearer <token>
   - URL parameter: id
   - Request body: Updated property fields
   - Response: Updated property object or { error: string }

5. DELETE /properties/:id
   - Headers: Authorization: Bearer <token>
   - URL parameter: id
   - Response: 204 No Content or { error: string }
*/
