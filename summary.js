/**
 * API Endpoints Summary
 *
 * User Routes:
 * POST /api/user/register
 * - Request: { email, password, name, phone }
 * - Response: { token }
 *
 * POST /api/user/login
 * - Request: { email, password }
 * - Response: { token }
 *
 * PUT /api/user/profile (Auth Required)
 * - Request: { name, phone, email }
 * - Response: Updated user object
 *
 * Property Routes:
 * GET /api/properties
 * - Query params: type, location, minPrice, maxPrice
 * - Response: Array of properties
 *
 * GET /api/properties/:id
 * - Response: Single property object with owner details
 *
 * POST /api/properties (Auth Required)
 * - Request: { title, description, price, location, type, bedrooms, bathrooms, area, images }
 * - Response: Created property object
 *
 * PUT /api/properties/:id (Auth Required)
 * - Request: Property fields to update
 * - Response: Updated property object
 *
 * DELETE /api/properties/:id (Auth Required)
 * - Response: Success message
 *
 * Contact Routes:
 * POST /api/contact/submit
 * - Request: { name, email, message, propertyId }
 * - Response: Success message
 */
