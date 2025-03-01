/*
API Endpoints Summary:

1. User Registration
   - Endpoint: POST /api/users/register
   - Request Body: { username, email, password }
   - Response: { message: 'User registered successfully' }

2. User Login
   - Endpoint: POST /api/users/login
   - Request Body: { email, password }
   - Response: { token: 'jwt-token' }

3. Get User Profile
   - Endpoint: GET /api/users/profile
   - Headers: Authorization: Bearer <token>
   - Response: { user profile data }

4. Update User Profile
   - Endpoint: PUT /api/users/profile/update
   - Headers: Authorization: Bearer <token>
   - Request Body: { username, email, phone }
   - Response: { updated user data }

5. Get Properties List
   - Endpoint: GET /api/properties
   - Query Parameters: location, price_range, type
   - Response: [{ property listings }]

6. Get Property Details
   - Endpoint: GET /api/properties/:id
   - Response: { property details }

7. Create Property (Admin)
   - Endpoint: POST /api/properties/create
   - Headers: Authorization: Bearer <token>
   - Request Body: { title, description, price, location, images, property_type }
   - Response: { created property data }

8. Update Property (Admin)
   - Endpoint: PUT /api/properties/update/:id
   - Headers: Authorization: Bearer <token>
   - Request Body: { title, description, price, location, images, property_type, availability }
   - Response: { updated property data }

9. Delete Property (Admin)
   - Endpoint: DELETE /api/properties/delete/:id
   - Headers: Authorization: Bearer <token>
   - Response: { message: 'Property deleted successfully' }
*/
