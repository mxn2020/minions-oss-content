/**
 * @module @minions-oss-content/sdk/schemas
 * Custom MinionType schemas for Minions Oss-content.
 */

import type { MinionType } from 'minions-sdk';

export const releasepostType: MinionType = {
  id: 'oss-content-release-post',
  name: 'Release post',
  slug: 'release-post',
  description: 'A blog post announcing a release.',
  icon: '📝',
  schema: [
    { name: 'releaseId', type: 'string', label: 'releaseId' },
    { name: 'title', type: 'string', label: 'title' },
    { name: 'body', type: 'string', label: 'body' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'publishedUrl', type: 'string', label: 'publishedUrl' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
    { name: 'publishedAt', type: 'string', label: 'publishedAt' },
  ],
};

export const readmeupdateType: MinionType = {
  id: 'oss-content-readme-update',
  name: 'Readme update',
  slug: 'readme-update',
  description: 'A tracked update to a project README.',
  icon: '📖',
  schema: [
    { name: 'projectId', type: 'string', label: 'projectId' },
    { name: 'section', type: 'string', label: 'section' },
    { name: 'content', type: 'string', label: 'content' },
    { name: 'reason', type: 'string', label: 'reason' },
    { name: 'appliedAt', type: 'string', label: 'appliedAt' },
  ],
};

export const socialannouncementType: MinionType = {
  id: 'oss-content-social-announcement',
  name: 'Social announcement',
  slug: 'social-announcement',
  description: 'A social media post for a release.',
  icon: '📢',
  schema: [
    { name: 'releaseId', type: 'string', label: 'releaseId' },
    { name: 'platform', type: 'select', label: 'platform' },
    { name: 'body', type: 'string', label: 'body' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'publishedAt', type: 'string', label: 'publishedAt' },
  ],
};

export const demoscriptType: MinionType = {
  id: 'oss-content-demo-script',
  name: 'Demo script',
  slug: 'demo-script',
  description: 'A runnable demo for showcasing a project.',
  icon: '🎬',
  schema: [
    { name: 'projectId', type: 'string', label: 'projectId' },
    { name: 'title', type: 'string', label: 'title' },
    { name: 'script', type: 'string', label: 'script' },
    { name: 'outputSample', type: 'string', label: 'outputSample' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
  ],
};

export const customTypes: MinionType[] = [
  releasepostType,
  readmeupdateType,
  socialannouncementType,
  demoscriptType,
];

