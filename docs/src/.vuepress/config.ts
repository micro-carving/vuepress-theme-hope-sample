import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Byte Micro Carving",
      description: "Byte Micro Carving",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "字节微雕",
      description: "字节微雕",
    },
  },

  theme,

  shouldPrefetch: false,
});
