/*
API Endpoints Summary:

User Management:
1. POST /api/register
   - Request: { email, password, name, phone }
   - Response: { token, user: { id, email, name } }

2. POST /api/login
   - Request: { email, password }
   - Response: { token, user: { id, email, name } }

3. GET /api/user
   - Headers: Authorization: Bearer {token}
   - Response: User object (excluding password)

4. PUT /api/user
   - Headers: Authorization: Bearer {token}
   - Request: Updated user fields
   - Response: Updated user object

Property Management:
1. GET /api/properties
   - Query Parameters: Any property field for filtering
   - Response: Array of property objects

2. GET /api/properties/:id
   - Response: Single property object

3. POST /api/properties
   - Headers: Authorization: Bearer {token}
   - Request: Property details (title, description, price, location, features, images)
   - Response: Created property object

4. PUT /api/properties/:id
   - Headers: Authorization: Bearer {token}
   - Request: Updated property fields
   - Response: Updated property object

5. DELETE /api/properties/:id
   - Headers: Authorization: Bearer {token}
   - Response: Success message

All endpoints return appropriate error messages and status codes when needed.
*/
