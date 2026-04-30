// src/api/services/blog.ts
// Blog API service - handles all blog-related API calls

import apiClient from '../client';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  updated?: string;
  tags: string[];
  image?: string;
  readTime: number;
}

/**
 * Fetch all blog posts
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    return await apiClient.get<BlogPost[]>('/blog');
  } catch (error) {
    console.warn('Failed to fetch blog posts from API', error);
    return [];
  }
}

/**
 * Fetch a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost> {
  return apiClient.get<BlogPost>(`/blog/${slug}`);
}

/**
 * Search blog posts
 */
export async function searchBlogPosts(query: string): Promise<BlogPost[]> {
  return apiClient.get<BlogPost[]>(`/blog/search?q=${encodeURIComponent(query)}`);
}

/**
 * Get blog posts by tag
 */
export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
  return apiClient.get<BlogPost[]>(`/blog/tag/${tag}`);
}

/**
 * Create a new blog post (admin only)
 */
export async function createBlogPost(data: Omit<BlogPost, 'id'>): Promise<BlogPost> {
  return apiClient.post<BlogPost>('/blog', data);
}

/**
 * Update a blog post
 */
export async function updateBlogPost(id: string, data: Partial<BlogPost>): Promise<BlogPost> {
  return apiClient.put<BlogPost>(`/blog/${id}`, data);
}

/**
 * Delete a blog post
 */
export async function deleteBlogPost(id: string): Promise<void> {
  await apiClient.delete(`/blog/${id}`);
}
