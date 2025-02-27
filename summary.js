/*
API Endpoints Summary:

1. User Management:
   - POST /api/register
     Request: { email, password, name, phone }
     Response: { token }

   - POST /api/login
     Request: { email, password }
     Response: { token }

   - GET /api/user
     Headers: { Authorization: 'Bearer <token>' }
     Response: { _id, email, name, phone, createdAt }

   - PUT /api/user
     Headers: { Authorization: 'Bearer <token>' }
     Request: { name, phone, email }
     Response: { _id, email, name, phone, createdAt }

2. Property Management:
   - POST /api/properties
     Headers: { Authorization: 'Bearer <token>' }
     Request: { title, description, price, location, bedrooms, bathrooms, area, images }
     Response: Property object

   - GET /api/properties
     Query params: minPrice, maxPrice, location
     Response: Array of property objects

   - GET /api/properties/:id
     Response: Property object with owner details

   - PUT /api/properties/:id
     Headers: { Authorization: 'Bearer <token>' }
     Request: { title, description, price, location, bedrooms, bathrooms, area, images }
     Response: Updated property object

   - DELETE /api/properties/:id
     Headers: { Authorization: 'Bearer <token>' }
     Response: { message: 'Property deleted successfully' }
*/