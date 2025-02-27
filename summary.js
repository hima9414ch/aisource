/*
API Endpoints Summary:

User Management:
1. Register User
   - Endpoint: POST /api/register
   - Body: { email, password, name }
   - Response: { token, user: { id, email, name } }

2. Login User
   - Endpoint: POST /api/login
   - Body: { email, password }
   - Response: { token, user: { id, email, name } }

3. Get User Details
   - Endpoint: GET /api/user
   - Headers: Authorization: Bearer {token}
   - Response: { id, email, name, createdAt }

4. Update User Profile
   - Endpoint: PUT /api/user
   - Headers: Authorization: Bearer {token}
   - Body: { name, email }
   - Response: { id, email, name, createdAt }

Property Management:
1. List Properties
   - Endpoint: GET /api/properties
   - Response: Array of properties

2. Get Single Property
   - Endpoint: GET /api/properties/:id
   - Response: Property details

3. Add Property
   - Endpoint: POST /api/properties
   - Headers: Authorization: Bearer {token}
   - Body: { title, description, price, location }
   - Response: Created property object

4. Update Property
   - Endpoint: PUT /api/properties/:id
   - Headers: Authorization: Bearer {token}
   - Body: { title, description, price, location }
   - Response: Updated property object

5. Delete Property
   - Endpoint: DELETE /api/properties/:id
   - Headers: Authorization: Bearer {token}
   - Response: { message: 'Property deleted successfully' }
*/
