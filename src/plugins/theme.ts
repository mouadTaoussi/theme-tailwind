// import type { OrugaOptions, ComponentProps } from "@oruga-ui/oruga-next";
// import { isTrueish } from "@oruga-ui/oruga-next";

const tailwindConfig = {
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
    Autocomplete: {},
    Breadcrumb: {},
    Button: {},
    Carousel: {},
    Checkbox: {},
    Collapse: {},
    Datepicker: {},
    Datetimepicker: {},
    Dropdown: {},
    Field: {},
    Icon: {},
    Input: {},
    Loading: {},
    Menu: {},
    Modal: {},
    Notification: {},
    Pagination: {},
    Radio: {},
    Select: {},
    Sidebar: {},
    Skeleton: {},
    Slider: {},
    Steps: {},
    Switch: {},
    Table: {},
    Tabs: {},
    Taginput: {},
    Timepicker: {},
    Tooltip: {},
    Upload: {},
};

export { tailwindConfig as config };
