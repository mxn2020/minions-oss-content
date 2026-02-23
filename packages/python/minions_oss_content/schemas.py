"""
Minions Oss-content SDK — Type Schemas
Custom MinionType schemas for Minions Oss-content.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

release_post_type = MinionType(
    id="oss-content-release-post",
    name="Release post",
    slug="release-post",
    description="A blog post announcing a release.",
    icon="📝",
    schema=[
        FieldDefinition(name="releaseId", type="string", label="releaseId"),
        FieldDefinition(name="title", type="string", label="title"),
        FieldDefinition(name="body", type="string", label="body"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="publishedUrl", type="string", label="publishedUrl"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
        FieldDefinition(name="publishedAt", type="string", label="publishedAt"),
    ],
)

readme_update_type = MinionType(
    id="oss-content-readme-update",
    name="Readme update",
    slug="readme-update",
    description="A tracked update to a project README.",
    icon="📖",
    schema=[
        FieldDefinition(name="projectId", type="string", label="projectId"),
        FieldDefinition(name="section", type="string", label="section"),
        FieldDefinition(name="content", type="string", label="content"),
        FieldDefinition(name="reason", type="string", label="reason"),
        FieldDefinition(name="appliedAt", type="string", label="appliedAt"),
    ],
)

social_announcement_type = MinionType(
    id="oss-content-social-announcement",
    name="Social announcement",
    slug="social-announcement",
    description="A social media post for a release.",
    icon="📢",
    schema=[
        FieldDefinition(name="releaseId", type="string", label="releaseId"),
        FieldDefinition(name="platform", type="select", label="platform"),
        FieldDefinition(name="body", type="string", label="body"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="publishedAt", type="string", label="publishedAt"),
    ],
)

demo_script_type = MinionType(
    id="oss-content-demo-script",
    name="Demo script",
    slug="demo-script",
    description="A runnable demo for showcasing a project.",
    icon="🎬",
    schema=[
        FieldDefinition(name="projectId", type="string", label="projectId"),
        FieldDefinition(name="title", type="string", label="title"),
        FieldDefinition(name="script", type="string", label="script"),
        FieldDefinition(name="outputSample", type="string", label="outputSample"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
    ],
)

custom_types: list[MinionType] = [
    release_post_type,
    readme_update_type,
    social_announcement_type,
    demo_script_type,
]

