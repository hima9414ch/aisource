// API Endpoints Summary

/*
1. GET /properties
   - Description: Retrieves all properties
   - Request: No parameters required
   - Response: Array of property objects
   - Response Format: [
       {
           id: number,
           title: string,
           description: string,
           price: number,
           imageUrl: string
       }
     ]

2. GET /properties/:id
   - Description: Retrieves a specific property by ID
   - Request Parameters: id (number)
   - Response: Single property object
   - Response Format: {
       id: number,
       title: string,
       description: string,
       price: number,
       imageUrl: string
     }

3. POST /properties
   - Description: Creates a new property
   - Request Body: {
       title: string (required),
       description: string (required),
       price: number (required),
       imageUrl: string (optional)
     }
   - Response: Newly created property object

4. PUT /properties/:id
   - Description: Updates an existing property
   - Request Parameters: id (number)
   - Request Body: {
       title: string (optional),
       description: string (optional),
       price: number (optional),
       imageUrl: string (optional)
     }
   - Response: Updated property object

5. DELETE /properties/:id
   - Description: Deletes a property
   - Request Parameters: id (number)
   - Response: No content (204)
*/
