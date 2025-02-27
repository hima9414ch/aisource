/*
API Endpoints Summary:

User Management:
1. POST /api/register
   - Request: { email, password, name, phone }
   - Response: { token }

2. POST /api/login
   - Request: { email, password }
   - Response: { token }

3. GET /api/user
   - Headers: Authorization: Bearer {token}
   - Response: User details (excluding password)

4. PUT /api/user
   - Headers: Authorization: Bearer {token}
   - Request: Updated user fields
   - Response: Updated user details

Property Management:
1. GET /api/properties
   - Query Parameters: Any property filter
   - Response: Array of properties

2. GET /api/properties/:id
   - Response: Single property details

3. POST /api/properties
   - Headers: Authorization: Bearer {token}
   - Request: Property details (title, description, price, location, features, images)
   - Response: Created property

4. PUT /api/properties/:id
   - Headers: Authorization: Bearer {token}
   - Request: Updated property fields
   - Response: Updated property

5. DELETE /api/properties/:id
   - Headers: Authorization: Bearer {token}
   - Response: Success message
*/
