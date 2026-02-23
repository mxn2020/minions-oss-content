/**
 * Minions Oss-content SDK
 *
 * Blog post drafts, README updates, social announcements, and demo scripts
 *
 * @module @minions-oss-content/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Oss-content.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
