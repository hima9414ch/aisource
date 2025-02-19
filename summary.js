/*
Real Estate API Endpoints Summary

1. Authentication
   POST /api/auth/login
   - Request: { username: string, password: string }
   - Response: { token: string }

2. Get All Listings
   GET /api/listings
   - Response: Array of listing objects

3. Get Single Listing
   GET /api/listings/:id
   - Response: Single listing object

4. Create Listing (Requires Authentication)
   POST /api/listings
   - Headers: Authorization: Bearer <token>
   - Request: {
       title: string,
       description: string,
       price: number,
       image: string,
       agent: string
     }
   - Response: Created listing object

5. Update Listing (Requires Authentication)
   PUT /api/listings/:id
   - Headers: Authorization: Bearer <token>
   - Request: Any listing properties to update
   - Response: Updated listing object

6. Delete Listing (Requires Authentication)
   DELETE /api/listings/:id
   - Headers: Authorization: Bearer <token>
   - Response: 204 No Content
*/
