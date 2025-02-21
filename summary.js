/*
API Endpoints Summary:

Authentication Endpoints:
1. POST /api/auth/register
   - Request: { username: string, email: string, password: string }
   - Response: { token: string }

2. POST /api/auth/login
   - Request: { email: string, password: string }
   - Response: { token: string }

Blog Post Endpoints:
1. GET /api/posts
   - Response: Array of all posts with author details

2. GET /api/posts/:id
   - Response: Single post object with author details

3. POST /api/posts
   - Headers: x-auth-token: string
   - Request: { title: string, content: string }
   - Response: Created post object

4. PUT /api/posts/:id
   - Headers: x-auth-token: string
   - Request: { title?: string, content?: string }
   - Response: Updated post object

5. DELETE /api/posts/:id
   - Headers: x-auth-token: string
   - Response: { message: 'Post deleted' }

All endpoints return error responses in format:
{ message: string }
*/