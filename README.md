# Cone Generator — 3D Parametric Cone

Interactive 3D cone generator with parametric controls. Geometry is computed server-side via an API route and rendered on the client with Three.js.

## Features

- **Server-side geometry generation** — vertices are calculated in a Next.js API Route, not on the client
- **Raw BufferGeometry** — built from a flat Float32Array without using Three.js built-in ConeGeometry
- **React Three Fiber** — declarative 3D scene composition within React components
- **Wireframe rendering** — white wireframe on gray background with a technical aesthetic
- **Rotation animation** — smooth continuous rotation via useFrame

## Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| Height | 1 | Cone height |
| Radius | 1 | Base radius |
| Segments | 32 | Number of segments |

## Tech Stack

- **Next.js 13** (App Router)
- **React Three Fiber** + **Three.js**
- **TypeScript**
- **Tailwind CSS**
