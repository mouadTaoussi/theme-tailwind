// import type { OrugaOptions, ComponentProps } from "@oruga-ui/oruga-next";
// import { isTrueish } from "@oruga-ui/oruga-next";

// import theme style
import "../assets/scss/tailwind.scss";

const tailwindConfig = {
    // name: "Test",
    // componentName: {
    //     interneprops: "classe name",
    // },
    button: {
        override: true,
        rootClass:
            "text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800",
        // wrapperClass: "button-wrapper",
        // sizeClass: "is-",
        // variantClass: "is-",
        // roundedClass: "is-rounded",
        // expandedClass: "is-fullwidth",
        // // loadingClass: "is-loading",
        // outlinedClass: (variant) => {
        //     if (!variant) return "is-outlined";
        //     return `is-${variant} is-outlined`;
        // },
        // invertedClass: (variant) => {
        //     if (!variant) return "is-inverted";
        //     return `is-${variant} is-inverted`;
        // },
    },
};

export { tailwindConfig as config };
