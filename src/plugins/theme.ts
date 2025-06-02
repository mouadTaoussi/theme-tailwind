// import type { OrugaOptions, ComponentProps } from "@oruga-ui/oruga-next";
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
        disabledClass: "disabled:opacity-75",
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
    autocomplete: {
        override: true,
        rootClass: "autocompleteeeeee control",
        itemClass: "teeeest",
        itemHoverClass: "hover:bg-sky-700",
        itemEmptyClass: "is-disabled",
        itemGroupTitleClass: "has-text-weight-bold",
    },
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
    notification: {
        override: true,
        rootClass: "notificationnnn",
        wrapperClass: "media",
        contentClass: "media-content",
        iconClass: "media-left",
        closeClass: "delete",
        positionClass: "is-",
        noticeClass: "notices",
        noticePositionClass: "is-",
        variantClass: "is-",
    },
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
    Tooltip: {
        override: true,
        rootClass: "tooltippppppp",
        contentClass: "tooltip-content",
        triggerClass: "tooltip-trigger",
        alwaysClass: "is-always",
        multilineClass: "is-multiline",
        variantClass: "is-",
        positionClass: "is-",
        teleportClass: "is-teleported",
    },
    Upload: {
        override: true,
        rootClass: "uploaddddddd control",
        draggableClass: "upload-draggable",
        variantClass: "is-",
        expandedClass: "is-expanded",
        disabledClass: "is-disabled",
        hoveredClass: "is-hovered",
    },
};

export { tailwindConfig as config };
