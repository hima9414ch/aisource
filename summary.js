/*
API Endpoints Summary:

1. User Authentication:
   - POST /api/user/register
     Request: { email, password, name }
     Response: { token }
   
   - POST /api/user/login
     Request: { email, password }
     Response: { token }
   
   - PUT /api/user/profile (Authenticated)
     Request: { name, email }
     Response: Updated user object

2. Properties:
   - GET /api/properties
     Query Parameters: Any property filter
     Response: Array of properties
   
   - GET /api/properties/:id
     Response: Single property object
   
   - POST /api/properties (Authenticated)
     Request: { title, description, price, location, images, features }
     Response: Created property object
   
   - PUT /api/properties/:id (Authenticated)
     Request: Property update fields
     Response: Updated property object
   
   - DELETE /api/properties/:id (Authenticated)
     Response: Success message

3. Contact:
   - POST /api/contact/submit
     Request: { name, email, message }
     Response: Success message

All authenticated routes require 'Authorization: Bearer {token}' header
All responses include appropriate HTTP status codes
*/