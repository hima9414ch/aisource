/*
API Endpoints Summary:

1. Authentication Endpoints:
   - POST /api/register
     Request body: { email: string, password: string, name: string }
     Response: { token: string }

   - POST /api/login
     Request body: { email: string, password: string }
     Response: { token: string }

2. Property Endpoints:
   - GET /api/properties/list
     Query parameters: type, location, minPrice, maxPrice
     Response: Array of property objects

   - GET /api/properties/detail/:id
     URL parameters: id (property ID)
     Response: Single property object

3. Contact Endpoint:
   - POST /api/contact/send
     Request body: { name: string, email: string, message: string }
     Response: { message: string }

All error responses follow the format:
{ message: string }
*/