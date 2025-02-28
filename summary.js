/*
API Endpoints Summary:

1. User Management APIs:

   POST /api/users/login
   - Description: Authenticate users and return a token
   - Request Body: { username: string, password: string }
   - Response: { token: string, user: { id: string, username: string, email: string } }

   POST /api/users/register
   - Description: Register a new user
   - Request Body: { username: string, email: string, password: string }
   - Response: { message: string }

   PUT /api/users/update
   - Description: Update user profile information
   - Request Body: { userId: string, name: string, phone: string, address: string }
   - Response: { message: string, user: Object }

2. Property Management APIs:

   GET /api/properties/list
   - Description: Retrieve list of properties based on search and filters
   - Query Parameters: type, location, minPrice, maxPrice
   - Response: Array of property objects

   POST /api/properties/add
   - Description: Add a new property listing
   - Request Body: { title: string, description: string, price: number, location: string, type: string, features: array, owner: string }
   - Response: Created property object

   PUT /api/properties/update
   - Description: Update existing property details
   - Request Body: { propertyId: string, ...updates }
   - Response: Updated property object

   DELETE /api/properties/delete
   - Description: Delete a property listing
   - Request Body: { propertyId: string }
   - Response: { message: string }
*/
