# Contributing

## Setup

```bash
git clone https://github.com/froggy1014/whatsapp-ui
cd whatsapp-ui
pnpm install
pnpm storybook   # component development
pnpm dev         # demo site
```

## Adding a component

1. Create `components/ui/whatsapp/your-component.tsx`
2. Add a story in `stories/whatsapp/`
3. Register in `registry.json`
4. Run `pnpm registry:build` to update `public/r/`

## Guidelines

- UI-only — no business logic, no external state
- All values via `--wa-*` CSS tokens (see `DESIGN.md`)
- Dark mode: every token needs a light + dark value in `whatsapp.css`
- Use `@base-ui/react` primitives where possible (`Button`, `Toggle`, `Menu`…)
- Polymorphism via `render` prop — avoid forking `<button>` vs `<a>`

## Pull requests

Open a PR against `main`. Keep each PR focused on one component or fix.
