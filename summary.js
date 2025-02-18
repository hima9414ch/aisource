/**
 * API Endpoints Summary
 *
 * 1. POST /login
 *    - Request: { username: string, password: string }
 *    - Response: { token: string } or { error: string }
 *
 * 2. GET /properties
 *    - Request: No parameters
 *    - Response: Array of property objects
 *
 * 3. GET /properties/:id
 *    - Request Parameters: id (number)
 *    - Response: Property object or { error: string }
 *
 * 4. POST /properties
 *    - Headers: Authorization: Bearer <token>
 *    - Request Body: Property details object
 *    - Response: Created property object
 *
 * 5. PUT /properties/:id
 *    - Headers: Authorization: Bearer <token>
 *    - Request Parameters: id (number)
 *    - Request Body: Updated property details
 *    - Response: Updated property object
 *
 * 6. DELETE /properties/:id
 *    - Headers: Authorization: Bearer <token>
 *    - Request Parameters: id (number)
 *    - Response: 204 No Content
 */
