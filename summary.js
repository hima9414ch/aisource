/**
 * API Endpoints Summary
 *
 * 1. GET /properties
 *    - Description: Retrieve all properties with optional filtering
 *    - Query Parameters:
 *      - city (optional): Filter by city
 *      - minPrice (optional): Filter by minimum price
 *      - maxPrice (optional): Filter by maximum price
 *    - Response: Array of property objects
 *
 * 2. POST /properties
 *    - Description: Add a new property
 *    - Authentication: Required (JWT token in Authorization header)
 *    - Request Body: Property object with title, description, price, address, contact email
 *    - Response: Created property object with ID
 *
 * 3. GET /properties/:id
 *    - Description: Get specific property by ID
 *    - Parameters: property ID
 *    - Response: Property object
 *
 * 4. PUT /properties/:id
 *    - Description: Update specific property
 *    - Authentication: Required (JWT token in Authorization header)
 *    - Parameters: property ID
 *    - Request Body: Updated property fields
 *    - Response: Updated property object
 *
 * 5. DELETE /properties/:id
 *    - Description: Delete specific property
 *    - Authentication: Required (JWT token in Authorization header)
 *    - Parameters: property ID
 *    - Response: 204 No Content
 *
 * 6. POST /users/register
 *    - Description: Register new user
 *    - Request Body: { email, password }
 *    - Response: { token: JWT_TOKEN }
 *
 * 7. POST /users/login
 *    - Description: Authenticate user
 *    - Request Body: { email, password }
 *    - Response: { token: JWT_TOKEN }
 */
