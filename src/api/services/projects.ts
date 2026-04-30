// src/api/services/projects.ts
// Projects API service - handles all project-related API calls

import apiClient from '../client';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
  image: string;
}

/**
 * Fetch all projects from the API
 * Falls back to local data if API is unavailable
 */
export async function getProjects(): Promise<Project[]> {
  try {
    return await apiClient.get<Project[]>('/projects');
  } catch (error) {
    console.warn('Failed to fetch projects from API, using local data', error);
    // Fallback to imported JSON data
    const projectsData = await import('../../data/projects.json');
    return projectsData.default.projects;
  }
}

/**
 * Fetch a single project by ID
 */
export async function getProjectById(id: string): Promise<Project> {
  return apiClient.get<Project>(`/projects/${id}`);
}

/**
 * Create a new project (admin only)
 */
export async function createProject(data: Omit<Project, 'id'>): Promise<Project> {
  return apiClient.post<Project>('/projects', data);
}

/**
 * Update an existing project
 */
export async function updateProject(id: string, data: Partial<Project>): Promise<Project> {
  return apiClient.put<Project>(`/projects/${id}`, data);
}

/**
 * Delete a project
 */
export async function deleteProject(id: string): Promise<void> {
  await apiClient.delete(`/projects/${id}`);
}
