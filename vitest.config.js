/// <reference types="vitest"/>

import { defineConfig } from "vite";

 export default defineConfig({
    test:{
        include:[ "src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        exclude:  ["**/node_modules/**", "**/dist/**", "**/cypress/**", "**/.{idea,git,cache,output,temp}"]
    },
 })