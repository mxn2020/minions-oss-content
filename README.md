![CI](https://github.com/mxn2020/minions-oss-content-workspace/actions/workflows/ci.yml/badge.svg) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# minions-oss-content

**Blog post drafts, README updates, social announcements, and demo scripts**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-oss-content/sdk minions-sdk

# Python
pip install minions-oss-content

# CLI (global)
npm install -g @minions-oss-content/cli
```

---

## CLI

```bash
# Show help
oss-content --help
```

---

## Python SDK

```python
from minions_oss_content import create_client

client = create_client()
```

---

## Project Structure

```
minions-oss-content/
  packages/
    core/           # TypeScript core library (@minions-oss-content/sdk on npm)
    python/         # Python SDK (minions-oss-content on PyPI)
    cli/            # CLI tool (@minions-oss-content/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [oss-content.minions.help](https://oss-content.minions.help)
- Blog: [oss-content.minions.blog](https://oss-content.minions.blog)
- App: [oss-content.minions.wtf](https://oss-content.minions.wtf)

---

## License

[MIT](LICENSE)
