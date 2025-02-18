/**
 * Real Estate Backend API Summary
 *
 * Authentication Endpoints:
 * 1. POST /register
 *    - Request: { email: string, password: string }
 *    - Response: { message: string } or { error: string }
 *
 * 2. POST /login
 *    - Request: { email: string, password: string }
 *    - Response: { token: string } or { error: string }
 *
 * Property Endpoints:
 * 1. GET /properties
 *    - Response: Array of property objects
 *    - No authentication required
 *
 * 2. GET /properties/:id
 *    - Response: Single property object or { error: string }
 *    - No authentication required
 *
 * 3. POST /properties
 *    - Request: { title: string, price: number, location: string, propertyType: string, description: string }
 *    - Response: Created property object
 *    - Requires authentication token in header
 *
 * 4. PUT /properties/:id
 *    - Request: { title?: string, price?: number, location?: string, propertyType?: string, description?: string }
 *    - Response: Updated property object
 *    - Requires authentication token in header
 *
 * 5. DELETE /properties/:id
 *    - Response: 204 No Content
 *    - Requires authentication token in header
 *
 * Authentication:
 * - Protected routes require Bearer token in Authorization header
 * - Format: Authorization: Bearer <token>
 */
