// import type { ComponentProps } from "@oruga-ui/oruga-next";
// import { isTrueish } from "@oruga-ui/oruga-next";

const tailwindConfig = {
    button: {
        override: true,
        rootClass: "button",
        wrapperClass: "button-wrapper",
        sizeClass: "is-",
        variantClass: "is-",
        roundedClass: "rounded",
        expandedClass: "w-full",
        disabledClass: "disabled",
        // // loadingClass: "is-loading",
        outlinedClass: (variant: string): string => {
            if (!variant) return "outlined";
            return `is-${variant} outlined`;
        },
        invertedClass: (variant: string): string => {
            if (!variant) return "inverted";
            return `is-${variant} inverted`;
        },
    },
    // autocomplete: {
    //     override: true,
    //     rootClass: `
    //         autocomplete
    //         w-full max-w-md bg-white border border-gray-300
    //         rounded-md shadow-md overflow-hidden text-sm
    //         focus-within:ring-2 focus-within:ring-indigo-500
    //         focus-within:border-indigo-500 transition-all
    //     `,
    //     itemClass: `px-4 py-2 text-gray-700 cursor-pointer hover:bg-indigo-100 transition-colors`,
    //     itemHoverClass: `bg-indigo-100 text-indigo-800`,
    //     itemEmptyClass: `px-4 py-2 text-gray-400 italic text-sm`,
    //     itemGroupTitleClass: `px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider bg-gray-50`,
    // },

    breadcrumb: {},
    carousel: {},
    checkbox: {},
    collapse: {
        override: true,
        rootClass: "collapse-component rounded my-4",
        triggerClass: "collapse-component-trigger",
        contentClass: "collapse-component-content",
    },
    datepicker: {},
    datetimepicker: {},
    // dropdown: {
    //     override: true,
    //     rootClass: "dropdown btn-group",
    //     triggerClass: "dropdown-trigger",
    //     disabledClass: "disabled",
    //     expandedClass: "expanded",
    //     inlineClass: "inline",
    //     menuMobileOverlayClass: "dropdown-backdrop",
    //     menuClass: (_: string, { computed }: ComponentProps): string => {
    //         const classes = ["dropdown-menu"];
    //         if (computed.hoverable) classes.push("show");
    //         return classes.join(" ");
    //     },
    //     menuPositionClass: "position-",
    //     menuActiveClass: "show",
    //     itemTag: "a",
    //     itemClass: "dropdown-item",
    //     itemActiveClass: "active",
    //     itemClickableClass: "clickable",
    //     itemDisabledClass: "disabled",
    //     mobileClass: "dropdown-modal",
    //     teleportClass: "teleported",
    // },
    field: {},
    icon: {},
    // input: {
    //     override: true,
    //     rootClass: "input",
    //     inputClass: (_: string, { props }: ComponentProps): string => {
    //         const classes = ["form-control"];
    //         if (props.icon) classes.push("icon-left");
    //         if (props.iconRight) classes.push("icon-right");
    //         return classes.join(" ");
    //     },
    //     textareaClass: (_: string, { props }: ComponentProps): string => {
    //         const classes = ["form-control"];
    //         if (props.icon) classes.push("icon-left");
    //         if (props.iconRight) classes.push("icon-right");
    //         return classes.join(" ");
    //     },
    //     sizeClass: (_: string, { props }: ComponentProps): string => {
    //         if (props.size == "small") return "form-control-sm";
    //         else if (props.size == "medium") return "form-control-md";
    //         else if (props.size == "large") return "form-control-lg";
    //         return "form-control-md";
    //     },
    //     variantClass: "border-",
    //     expandedClass: "expanded",
    //     disabledClass: "disabled",
    //     roundedClass: "rounded-pill",
    //     iconLeftClass: "icon-left",
    //     iconRightClass: "icon-right",
    //     // iconLeftSpaceClass: 'input-group-text',
    //     // iconRightSpaceClass: 'input-group-text',
    //     counterClass: "help counter",
    // },
    loading: {},
    menu: {},
    modal: {},
    notification: {
        override: true,
        rootClass:
            "notification alert flex items-center px-4 py-3 my-3 rounded space-x-2",
        variantClass: "is-",
        wrapperClass: "notifictation-wrapper flex items-center",
        contentClass: "notifictation-content",
        positionClass: "position-",
        iconClass: "media mr-3",
        closeClass: "close",
        noticeClass: "notifictations",
        noticePositionClass: "position-",
    },
    pagination: {},
    radio: {},
    select: {},
    sidebar: {},
    skeleton: {},
    slider: {},
    steps: {},
    switch: {},
    table: {},
    tabs: {},
    taginput: {},
    timepicker: {},
    tooltip: {},
    upload: {},
};

export { tailwindConfig as config };
