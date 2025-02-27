/*
API Endpoints Summary:

1. User Management:
   - POST /api/register
     Request: { email, password, name, phone }
     Response: { message: 'User registered successfully' }

   - POST /api/login
     Request: { email, password }
     Response: { token: 'jwt_token' }

   - GET /api/user
     Headers: { Authorization: 'Bearer token' }
     Response: { user details excluding password }

   - PUT /api/user
     Headers: { Authorization: 'Bearer token' }
     Request: { name, phone }
     Response: { updated user details }

2. Property Management:
   - GET /api/properties
     Query params: status, location (optional)
     Response: [{ property listings }]

   - GET /api/properties/:id
     Response: { property details }

   - POST /api/properties
     Headers: { Authorization: 'Bearer token' }
     Request: { title, description, price, location, features, images }
     Response: { created property details }

   - PUT /api/properties/:id
     Headers: { Authorization: 'Bearer token' }
     Request: { updated property fields }
     Response: { updated property details }

   - DELETE /api/properties/:id
     Headers: { Authorization: 'Bearer token' }
     Response: { message: 'Property deleted successfully' }
*/