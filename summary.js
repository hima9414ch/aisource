/*
API Endpoints Summary:

User Management:
1. Register User (POST /api/register)
   - Request: { email, password, name, phone }
   - Response: { token }

2. Login (POST /api/login)
   - Request: { email, password }
   - Response: { token }

3. Get User Details (GET /api/user)
   - Headers: Authorization: Bearer {token}
   - Response: { _id, email, name, phone, createdAt }

4. Update Profile (PUT /api/user)
   - Headers: Authorization: Bearer {token}
   - Request: { name, phone, email }
   - Response: Updated user object

Property Management:
1. Add Property (POST /api/properties)
   - Headers: Authorization: Bearer {token}
   - Request: { title, description, price, location, type, bedrooms, bathrooms, area }
   - Response: Created property object

2. List Properties (GET /api/properties)
   - Query Parameters: type, location, minPrice, maxPrice
   - Response: Array of property objects

3. Get Property Details (GET /api/properties/:id)
   - Response: Property object with owner details

4. Update Property (PUT /api/properties/:id)
   - Headers: Authorization: Bearer {token}
   - Request: Property fields to update
   - Response: Updated property object

5. Delete Property (DELETE /api/properties/:id)
   - Headers: Authorization: Bearer {token}
   - Response: 204 No Content
*/