// src/utils/validation.ts
// Common validation utilities

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate URL format
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate that a string is not empty
 */
export function isNotEmpty(value: string): boolean {
  return value.trim().length > 0;
}

/**
 * Sanitize HTML content to prevent XSS
 */
export function sanitizeHtml(html: string): string {
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
}

/**
 * Validate form data object
 */
export function validateFormData(data: Record<string, any>, rules: Record<string, (value: any) => boolean>): {
  isValid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  for (const [field, validator] of Object.entries(rules)) {
    if (!validator(data[field])) {
      errors[field] = `Invalid ${field}`;
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
