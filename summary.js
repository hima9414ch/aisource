/*
API Endpoints Summary:

User Management:
1. POST /api/register
   - Request: { email, password, name, phone }
   - Response: { user, token }

2. POST /api/login
   - Request: { email, password }
   - Response: { user, token }

3. GET /api/user
   - Headers: Authorization: Bearer {token}
   - Response: { user details }

4. PUT /api/user
   - Headers: Authorization: Bearer {token}
   - Request: { updated user fields }
   - Response: { updated user details }

Property Management:
1. POST /api/properties
   - Headers: Authorization: Bearer {token}
   - Request: { title, description, price, location, bedrooms, bathrooms, area, images }
   - Response: { property details }

2. GET /api/properties
   - Query params: location, minPrice, maxPrice
   - Response: [{ property details }]

3. GET /api/properties/:id
   - Response: { property details with owner info }

4. PUT /api/properties/:id
   - Headers: Authorization: Bearer {token}
   - Request: { updated property fields }
   - Response: { updated property details }

5. DELETE /api/properties/:id
   - Headers: Authorization: Bearer {token}
   - Response: { message: 'Property deleted successfully' }
*/