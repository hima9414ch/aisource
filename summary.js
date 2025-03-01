/*
API Endpoints Summary:

1. Authentication APIs:
   - POST /api/auth/register
     Request: { username: string, password: string }
     Response: { message: string }

   - POST /api/auth/login
     Request: { username: string, password: string }
     Response: { token: string }

   - GET /api/auth/logout
     Response: { message: string }

2. Product APIs:
   - GET /api/products
     Query params: category?, search?
     Response: Array of products

   - GET /api/products/:id
     Response: Single product object

   - POST /api/products (Admin only)
     Request: { name: string, description: string, price: number, category: string, stock: number, imageUrl?: string }
     Response: Created product object

   - PUT /api/products/:id (Admin only)
     Request: { name?, description?, price?, category?, stock?, imageUrl? }
     Response: Updated product object

   - DELETE /api/products/:id (Admin only)
     Response: { message: string }

3. Order APIs:
   - POST /api/orders
     Request: { products: Array<{ product: ObjectId, quantity: number }>, totalAmount: number }
     Response: Created order object

   - GET /api/orders/:id
     Response: Single order object with populated products

   - GET /api/orders/user/:userId
     Response: Array of orders for specific user

All protected routes require Authorization header with Bearer token.
*/