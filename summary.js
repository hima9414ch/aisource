// API Endpoints Summary

/*
1. POST /api/auth/login
   Request body: { username: string, password: string }
   Response: { token: string }

2. GET /api/listings
   Response: Array of listing objects
   [{ id: string, title: string, description: string, price: number, imageURL: string }]

3. GET /api/listings/:id
   Response: Single listing object
   { id: string, title: string, description: string, price: number, imageURL: string }

4. POST /api/listings (Protected)
   Headers: Authorization: Bearer <token>
   Request body: { title: string, description: string, price: number, imageURL: string }
   Response: Created listing object

5. PUT /api/listings/:id (Protected)
   Headers: Authorization: Bearer <token>
   Request body: { title?: string, description?: string, price?: number, imageURL?: string }
   Response: Updated listing object

6. DELETE /api/listings/:id (Protected)
   Headers: Authorization: Bearer <token>
   Response: 204 No Content
*/
