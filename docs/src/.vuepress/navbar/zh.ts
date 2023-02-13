import {navbar} from "vuepress-theme-hope";

// https://theme-hope.vuejs.press/zh/guide/layout/navbar.html#%E7%9B%B8%E5%85%B3%E5%8A%A9%E6%89%8B%E4%B8%8E%E7%B1%BB%E5%9E%8B
export const zhNavbar = navbar([
    {
        text: "编程",
        icon: "computer",
        prefix: "/zh/programming/",
        children: [
            {
                text: "Java 体系",
                icon: "java",
                prefix: "java/",
                children: [
                    {text: "面向对象基础", icon: "", link: "object-oriented.md"},
                    {text: "集合与 IO 流", icon: "", link: "collection-and-io.md"},
                    {text: "高并发 JUC", icon: "", link: "high-concurrency.md"},
                    {text: "JVM 底层原理", icon: "", link: "jvm-theory.md"},
                ]
            },
            {
                text: "前端体系",
                icon: "page",
                prefix: "front-end/",
                children: [
                    {text: "HTML 与 CSS", icon: "", link: "html-and-css/README.md"},
                    {text: "JavaScript 与 TypeScript", icon: "", link: "js-and-ts/README.md"},
                    {text: "Vue 渐进式框架", icon: "", link: "framework/vue/README.md"},
                ]
            }
        ]
    },
    {
        text: "关于",
        icon: "like",
        prefix: "/zh/about/",
        children: [
            {text: "关于个人", icon: "", link: "about-me.md"},
            {text: "关于学习", icon: "", link: "about-learning.md"},
            {text: "关于职场", icon: "", link: "about-career.md"},
        ]
    },
]);
