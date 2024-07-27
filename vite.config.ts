import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { BootstrapVueNextResolver } from "bootstrap-vue-next";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  // expose .env as process.env instead of import.meta since jest does not import meta yet
  const envWithProcessPrefix = Object.entries(env).reduce(
    (prev, [key, val]) => {
      return {
        ...prev,
        ["process.env." + key]: `"${val}"`,
      };
    },
    {}
  );

  return {
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => tag.startsWith("hanko-"),
          },
        },
      }),
      Components({
        resolvers: [BootstrapVueNextResolver()],
      }),
    ],
    build: {
      target: "es2022",
    },
    esbuild: {
      target: "es2022",
    },
    optimizeDeps: {
      esbuildOptions: {
        target: "es2022",
      },
    },
    define: envWithProcessPrefix,
  };
});

// export default defineConfig({
//   plugins: [
//     vue({
//       template: {
//         compilerOptions: {
//           isCustomElement: (tag) => tag.startsWith("hanko-"),
//         },
//       },
//     }),
//     Components({
//       resolvers: [BootstrapVueNextResolver()],
//     }),
//   ],
//   build: {
//     target: "es2022",
//   },
//   esbuild: {
//     target: "es2022",
//   },
//   optimizeDeps: {
//     esbuildOptions: {
//       target: "es2022",
//     },
//   },
// });
