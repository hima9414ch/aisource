/*
API Endpoints Summary:

1. Authentication Endpoints:
   POST /auth/register
   - Request: { username: string, email: string, password: string }
   - Response: { message: string }

   POST /auth/login
   - Request: { email: string, password: string }
   - Response: { token: string }

2. Blog Post Endpoints:
   GET /posts
   - Response: Array of blog posts

   GET /posts/:id
   - Response: Single blog post object

   POST /posts (requires authentication)
   - Request: { title: string, content: string }
   - Response: Created post object

   PUT /posts/:id (requires authentication)
   - Request: { title?: string, content?: string }
   - Response: Updated post object

   DELETE /posts/:id (requires authentication)
   - Response: { message: string }

All authenticated routes require Bearer token in Authorization header
*/
