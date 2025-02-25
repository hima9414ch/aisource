/*
API Endpoints Summary:

User Authentication:
1. POST /api/register
   - Request: { email: string, password: string, name: string }
   - Response: { token: string }

2. POST /api/login
   - Request: { email: string, password: string }
   - Response: { token: string }

Property Management:
1. GET /api/properties
   - Description: Fetch all properties
   - Response: Array of property objects

2. POST /api/properties/new
   - Auth Required: Yes
   - Request: { title: string, description: string, price: number, location: string }
   - Response: Created property object

3. GET /api/properties/:id
   - Description: Fetch single property details
   - Response: Property object

4. PUT /api/properties/:id
   - Auth Required: Yes
   - Request: { title?: string, description?: string, price?: number, location?: string }
   - Response: Updated property object

5. DELETE /api/properties/:id
   - Auth Required: Yes
   - Response: { message: string }

Note: All authenticated routes require Bearer token in Authorization header
*/
