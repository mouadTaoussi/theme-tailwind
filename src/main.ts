import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import Oruga from "@oruga-ui/oruga-next";
import Examples from "@oruga-ui/examples";

// add examples styles
import "@oruga-ui/examples/dist/examples.css";

// add theme
import "./assets/scss/tailwind.scss";

// add theme config
import { config as tailwindConfig } from "./plugins/theme";

createApp(App)
    .use(router)
    .use(Oruga, {
        iconPack: "fas",
        customIconPacks: {
            fas: {
                sizes: {
                    default: "",
                    small: "fa-sm",
                    medium: "fa-lg",
                    large: "fa-2x",
                },
            },
        },
        ...tailwindConfig,
    })
    .use(Examples)
    .mount("#app");
