// import type { OrugaOptions, ComponentProps } from "@oruga-ui/oruga-next";
// import { isTrueish } from "@oruga-ui/oruga-next";

// import theme style
import "../assets/scss/tailwind-build.scss";

const tailwindConfig = {
    // name: "Test",
    // componentName: {
    //     interneprops: "classe name",
    // },
    button: {
        override: true,
        rootClass: "font-medium transition-colors duration-200 focus:outline-none bg-blue-500",
        // wrapperClass: "button-wrapper",
        // sizeClass: "is-",
        // variantClass: "is-",
        // roundedClass: "is-rounded",
        // expandedClass: "is-fullwidth",
        // loadingClass: "is-loading",
        outlinedClass: (variant) => {
            if (!variant) return "is-outlined";
            return `is-${variant} is-outlined`;
        },
        invertedClass: (variant) => {
            if (!variant) return "is-inverted";
            return `is-${variant} is-inverted`;
        },
    },
};

export { tailwindConfig as config };
