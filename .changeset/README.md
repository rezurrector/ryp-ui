# Changesets

This project uses [Changesets](https://github.com/changesets/changesets) for version management and changelog generation.

## Adding a Change

To add a change for a new feature, bug fix, or documentation update:

1. Run the changeset command:
   ```bash
   pnpm changeset
   ```

2. Follow the interactive prompts to:
   - Select the packages that have changed
   - Choose the version bump type (patch, minor, major)
   - Write a brief description of the change

3. This will create a new markdown file in the `.changeset/` directory

## Versioning

To update package versions based on changesets:

```bash
pnpm version
```

This will:
- Update the version in package.json
- Create/update the CHANGELOG.md file
- Remove consumed changesets

## Publishing

To publish the package to npm:

```bash
pnpm release
```

This will:
- Run `pnpm version`
- Publish to npm
- Create a Git tag
- Push to GitHub

## Configuration

The Changesets configuration is in `.changeset/config.json`.

## Types of Changes

- **patch**: Backwards-compatible bug fixes
- **minor**: Backwards-compatible new features
- **major**: Breaking changes