# Russian Bible Church Website

Built using `astro.build` static site generator.

## DNS Configuration

- **onovlennya.org A** Record pointing to Github servers IP set
  ```
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```
- **onovlennya.org AAAA** Record pointing to Github servers IPv6 set
  ```
  2606:50c0:8000::153
  2606:50c0:8001::153
  2606:50c0:8002::153
  2606:50c0:8003::153
  ```
- **www.onovlennya.org CNAME** Record to redirect traffic to the apex domain
  ```
  rccalmaty.com.
  ```

## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:8081`  |
| `npm run build`   | Build your production site to `./docs/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
