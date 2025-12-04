import { KarinFactory } from "@project-karin/core";
import { H3Adapter } from "@project-karin/platform-h3";

const app = await KarinFactory.create(new H3Adapter(), {
  scan: "./src/**/*.controller.ts",
});

await app.init();

const fetch = (app.getHttpAdapter() as any).fetch;

// Support for Deno Deploy
// @ts-ignore
if (typeof Deno !== "undefined" && typeof Deno.serve === "function") {
  // @ts-ignore
  Deno.serve(fetch);
}

export default { fetch };
