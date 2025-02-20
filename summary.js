/*
API Endpoints Summary:

1. GET /properties
   - Description: Fetch all property listings
   - Parameters: None
   - Response: Array of property objects
   - Status: 200 OK

2. GET /properties/:id
   - Description: Fetch a single property by ID
   - Parameters: id (in URL)
   - Response: Single property object
   - Status: 200 OK, 404 Not Found

3. POST /properties
   - Description: Create a new property listing
   - Request Body: {
       title: String (required),
       address: String (required),
       price: Number (required),
       description: String (required),
       images: Array of Strings (optional),
       features: Array of Strings (optional)
     }
   - Response: Created property object
   - Status: 201 Created, 400 Bad Request

4. PUT /properties/:id
   - Description: Update an existing property
   - Parameters: id (in URL)
   - Request Body: Same as POST (all fields optional)
   - Response: Updated property object
   - Status: 200 OK, 404 Not Found, 400 Bad Request

5. DELETE /properties/:id
   - Description: Delete a property
   - Parameters: id (in URL)
   - Response: Success message
   - Status: 200 OK, 404 Not Found

Error Responses:
- 400: Bad Request - Invalid input data
- 404: Not Found - Property doesn't exist
- 500: Server Error - Internal server error
*/
