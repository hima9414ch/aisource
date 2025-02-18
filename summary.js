/**
 * Real Estate Backend API Summary
 *
 * 1. GET /properties
 *    - Description: Retrieve all properties
 *    - Request: No parameters required
 *    - Response: Array of property objects
 *      [{
 *        id: number,
 *        title: string,
 *        description: string,
 *        price: number,
 *        location: string
 *      }]
 *
 * 2. POST /properties
 *    - Description: Add a new property
 *    - Request Body: {
 *        title: string,
 *        description: string,
 *        price: number,
 *        location: string
 *      }
 *    - Response: Created property object
 *
 * 3. PUT /properties/:id
 *    - Description: Update existing property
 *    - URL Parameters: id (number)
 *    - Request Body: Any property fields to update
 *    - Response: Updated property object
 *
 * 4. DELETE /properties/:id
 *    - Description: Delete a property
 *    - URL Parameters: id (number)
 *    - Response: Success message
 *
 * Error Responses:
 * - 400: Bad Request
 * - 404: Not Found
 * - 500: Server Error
 */
