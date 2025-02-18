/*
Real Estate API Endpoints Summary:

1. GET /properties
   - Description: Retrieves all property listings
   - Request: No parameters required
   - Response: Array of property objects
   - Response format: [
       {
         id: number,
         title: string,
         description: string,
         price: number,
         imageUrl: string,
         createdAt: date
       }
     ]

2. GET /properties/:id
   - Description: Retrieves a single property by ID
   - Request parameters: id (number)
   - Response: Single property object
   - Response format: Same as above

3. POST /properties
   - Description: Creates a new property listing
   - Request body: {
       title: string (required),
       description: string (required),
       price: number (required),
       imageUrl: string (optional)
     }
   - Response: Created property object
   - Response format: Same as GET response

4. PUT /properties/:id
   - Description: Updates an existing property
   - Request parameters: id (number)
   - Request body: Any of {
       title: string,
       description: string,
       price: number,
       imageUrl: string
     }
   - Response: Updated property object

5. DELETE /properties/:id
   - Description: Deletes a property
   - Request parameters: id (number)
   - Response: 204 No Content

Error Responses:
- 400: Bad Request (Missing required fields)
- 404: Not Found (Invalid ID or route)
- 500: Internal Server Error
*/
