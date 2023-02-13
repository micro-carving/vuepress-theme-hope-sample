import {sidebar} from "vuepress-theme-hope";

// https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html#%E4%BE%8B%E5%AD%90
export const zhSidebar = sidebar({
    "/zh/programming/":[
        {
            // 必要的，分组的标题文字
            text: "Java 体系",
            // 可选的，会添加到每个 item 链接地址之前
            prefix: "java/",
            // 可选的, 分组标题对应的链接
            link: "/zh/programming/java/",
            // 可选的, 分组标题对应的图标
            icon: "java",
            // 可选的, 设置分组是否可以折叠，默认值是 false,
            collapsible: true,
            // 必要的，分组的子项目
            children: [
                "object-oriented",
                "collection-and-io",
                "high-concurrency",
                "jvm-theory",
            ],
        },
        {
            text: "前端体系",
            prefix: "front-end/",
            link: "/zh/programming/front-end/",
            icon: "java",
            // 可选的, 设置分组是否可以折叠，默认值是 false,
            collapsible: true,
            children: [
                "html-and-css/",
                "js-and-ts/",
                "framework/vue/",
            ],
        }
    ],
    "/zh/about/": "structure",
});
