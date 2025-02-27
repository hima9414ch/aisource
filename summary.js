/*
API Endpoints Summary:

User Management:
1. POST /api/register
   - Request: { email, password, name }
   - Response: { message: 'User registered successfully' }

2. POST /api/login
   - Request: { email, password }
   - Response: { token }

3. GET /api/user
   - Headers: Authorization: Bearer {token}
   - Response: { _id, email, name, createdAt }

4. PUT /api/user
   - Headers: Authorization: Bearer {token}
   - Request: { name, email }
   - Response: { _id, email, name, createdAt }

Property Management:
1. POST /api/properties
   - Headers: Authorization: Bearer {token}
   - Request: { title, description, price, location }
   - Response: Property object

2. GET /api/properties
   - Query Parameters: Any property field
   - Response: Array of property objects

3. GET /api/properties/:id
   - Response: Property object

4. PUT /api/properties/:id
   - Headers: Authorization: Bearer {token}
   - Request: Any property field to update
   - Response: Updated property object

5. DELETE /api/properties/:id
   - Headers: Authorization: Bearer {token}
   - Response: { message: 'Property deleted successfully' }
*/
