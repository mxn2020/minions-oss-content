"""
Minions Oss-content Python SDK

Blog post drafts, README updates, social announcements, and demo scripts
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Oss-content.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
