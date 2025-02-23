API Endpoints Summary:

1. Authentication Endpoints:
   - POST /register
     Request body: { email: string, password: string }
     Response: { message: string } or { error: string }

   - POST /login
     Request body: { email: string, password: string }
     Response: { token: string } or { error: string }

2. Property Endpoints:
   - GET /properties
     Response: Array of property objects
     No authentication required

   - GET /properties/:id
     Response: Single property object
     No authentication required

   - POST /properties
     Request headers: Authorization: Bearer {token}
     Request body: { title: string, description: string, price: number, imageUrl: string, location: string }
     Response: Created property object

   - PUT /properties/:id
     Request headers: Authorization: Bearer {token}
     Request body: { title?: string, description?: string, price?: number, imageUrl?: string, location?: string }
     Response: Updated property object

   - DELETE /properties/:id
     Request headers: Authorization: Bearer {token}
     Response: { message: string }

All endpoints return appropriate error messages with proper status codes when something goes wrong.