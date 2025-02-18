/*
Real Estate Backend API Summary

1. GET /properties
   - Description: Retrieve all property listings
   - Request: No parameters required
   - Response: Array of property objects

2. GET /properties/:id
   - Description: Retrieve a specific property by ID
   - Request Parameters: id (number)
   - Response: Single property object or 404 error

3. POST /properties
   - Description: Add a new property listing
   - Authentication: Required (JWT token in Authorization header)
   - Request Body: {
       title: string,
       description: string,
       price: number,
       location: string,
       type: string
     }
   - Response: Created property object with ID

4. PUT /properties/:id
   - Description: Update an existing property
   - Authentication: Required (JWT token in Authorization header)
   - Request Parameters: id (number)
   - Request Body: Same as POST /properties
   - Response: Updated property object

5. DELETE /properties/:id
   - Description: Delete a property listing
   - Authentication: Required (JWT token in Authorization header)
   - Request Parameters: id (number)
   - Response: 204 No Content

6. POST /inquiries
   - Description: Submit a property inquiry
   - Request Body: {
       propertyId: number,
       name: string,
       email: string,
       message: string
     }
   - Response: Created inquiry object with ID
*/
