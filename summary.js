/**
 * Real Estate API Endpoints Summary
 *
 * 1. GET /properties
 *    - Description: Retrieve all properties
 *    - Parameters: None
 *    - Response: Array of property objects
 *
 * 2. GET /properties/:id
 *    - Description: Retrieve a specific property
 *    - Parameters: id (URL parameter)
 *    - Response: Single property object
 *
 * 3. POST /properties
 *    - Description: Create a new property
 *    - Authentication: Required (JWT token in Authorization header)
 *    - Request Body: {
 *        address: string,
 *        price: number,
 *        description: string
 *      }
 *    - Response: Created property object
 *
 * 4. PUT /properties/:id
 *    - Description: Update an existing property
 *    - Authentication: Required (JWT token in Authorization header)
 *    - Parameters: id (URL parameter)
 *    - Request Body: {
 *        address?: string,
 *        price?: number,
 *        description?: string
 *      }
 *    - Response: Updated property object
 *
 * 5. DELETE /properties/:id
 *    - Description: Delete a property
 *    - Authentication: Required (JWT token in Authorization header)
 *    - Parameters: id (URL parameter)
 *    - Response: 204 No Content
 */
