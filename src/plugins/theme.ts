import type { ComponentProps } from "@oruga-ui/oruga-next";
// import { isTrueish } from "@oruga-ui/oruga-next";

const tailwindConfig = {
    button: {
        override: true,
        rootClass:
            "button duration-100 ease-in shadow-sm rounded focus:outline-offset-2 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500",
        wrapperClass: "button-wrapper",
        sizeClass: "is-",
        variantClass: "is-",
        roundedClass: "rounded-xl",
        expandedClass: "w-full",
        disabledClass: "disabled",
        // // loadingClass: "is-loading",
        outlinedClass: (variant: string): string => {
            if (!variant) return "border";
            return `is-${variant} border`;
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
    //         rounded-md shadow-sm overflow-hidden text-sm
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
        rootClass: "collapse-component rounded-lg my-4",
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
    icon: {
        override: true,
        rootClass: "icon flex justify-center items-center",
        variantClass: "text-",
        sizeClass: (position: string): string => {
            if (position == "small") return "text-xs";
            else if (position == "medium") return "text-md";
            else if (position == "large") return "text-xl";
            return "";
        },
        clickableClass: "clickable",
        spinClass: "animate-spin",
    },
    input: {
        override: true,
        rootClass: "input-component",
        inputClass: (_: string, props: ComponentProps): string => {
            const classes = ["input", "rounded", "shadow-sm", "focus:ring-2"];

            if (props.icon) classes.push("icon-left");
            if (props.iconRight) classes.push("icon-right");
            return classes.join(" ");
        },
        textareaClass: (_: string, props: ComponentProps): string => {
            const classes = ["input", "rounded", "shadow-sm", "focus:ring-2"];

            if (props.icon) classes.push("icon-left");
            if (props.iconRight) classes.push("icon-right");
            return classes.join(" ");
        },
        sizeClass: (_: string, props: ComponentProps): string => {
            if (props.size == "small") return "input-small";
            else if (props.size == "medium") return "input-medium";
            else if (props.size == "large") return "input-large";
            return "input-medium";
        },
        variantClass: "border-",
        expandedClass: "w-full",
        disabledClass: "disabled",
        roundedClass: "rounded-xl",
        iconLeftClass: "icon-left",
        iconRightClass: "icon-right",
        // iconLeftSpaceClass: 'input-group-text',
        // iconRightSpaceClass: 'input-group-text',
        counterClass: "help counter",
    },
    loading: {
        override: true,
        rootClass:
            "loading flex justify-center items-center absolute top-0 right-0 bottom-0 left-0",
        fullPageClass: "is-full-page",
        overlayClass: "loading-overlay absolute top-0 right-0 bottom-0 left-0",
        iconClass: "icon",
        scrollClipClass: "is-clipped",
    },
    menu: {},
    modal: {},
    notification: {
        override: true,
        rootClass:
            "notification alert flex items-center px-4 py-3 my-3 rounded space-x-2 shadow-sm duration-100 ease-in",
        variantClass: "is-",
        wrapperClass: "notifictation-wrapper flex items-center",
        contentClass: "notifictation-content",
        positionClass: "position-",
        iconClass: "media mr-3",
        closeClass: "close",
        noticeClass: "notifictations flex items-center",
        noticePositionClass: "position-",
    },
    pagination: {
        override: true,
        rootClass: (_: string, props: ComponentProps): string => {
            const classes = [
                "pagination",
                "text-gray-400",
                "text-center",
                "flex",
                "justify-between",
                "items-center",
            ];
            if (props.rounded) classes.push("rounded"); // doesn't work // position is not included
            return classes.join(" ");
        },
        sizeClass: "is-",
        simpleClass: "is-simple",
        orderClass: "is-",
        listClass: "pagination-list text-center",
        mobileClass: "is-mobile",
        buttonClass: "pagination-link",
        buttonCurrentClass: "is-current",
        buttonDisabledClass: "is-disabled",
        buttonNextClass: "pagination-next",
        buttonPrevClass: "pagination-previous",
        infoClass: "info",
    },
    radio: {
        override: true,
        rootClass: "radio",
        disabledClass: "is-disabled",
        inputClass: "check",
        labelClass: "control-label",
        variantClass: "is-",
        sizeClass: "is-",
    },
    select: {},
    sidebar: {},
    skeleton: {
        override: true,
        rootClass: "skeleton flex",
        itemClass: "rounded bg-gray-200 w-full h-2",
        itemRoundedClass: "rounded",
        animationClass: "animate-pulse",
        sizeClass: (position: string): string => {
            if (position == "small") return "h-2";
            else if (position == "medium") return "h-3";
            else if (position == "large") return "h-6";
            return "h-3";
        },
        positionClass: (position: string): string => {
            if (position == "left") return "items-start";
            else if (position == "centered") return "items-center";
            else if (position == "right") return "items-end";
            return "items-start";
        },
    },
    slider: {},
    steps: {},
    switch: {},
    table: {
        // @TODO: Integrate Tailwind
        override: true,
        rootClass: "table-wrapper",
        wrapperClass: "table-inner",
        tableClass: "table",
        borderedClass: "is-bordered",
        stripedClass: "is-striped",
        narrowedClass: "is-narrow",
        hoverableClass: "is-hoverable",
        emptyClass: "is-empty",
        detailedClass: "detail",
        footerClass: "table-footer",
        paginationWrapperClass: "level",
        scrollableClass: "table-container",
        stickyHeaderClass: "has-sticky-header",
        trSelectedClass: "is-selected",
        thSortableClass: "is-sortable",
        thCurrentSortClass: "is-current-sort",
        thSortIconClass: "th-wrap sort-icon",
        thUnselectableClass: "is-unselectable",
        thStickyClass: "is-sticky",
        thCheckboxClass: "th-checkbox",
        thDetailedClass: "th-chevron-cell",
        tdDetailedChevronClass: "chevron-cell",
        thPositionClass: "is-",
        tdPositionClass: "has-text-",
        mobileClass: "is-mobile",
        mobileSortClass: "table-mobile-sort",
    },
    tabs: {},
    taginput: {},
    timepicker: {},
    tooltip: {
        override: true,
        rootClass: "tooltip",
        contentClass: "tooltip-content shadow-sm",
        triggerClass: "tooltip-trigger",
        alwaysClass: "is-always",
        multilineClass: "is-multiline",
        variantClass: "is-",
        positionClass: "is-",
        teleportClass: "is-teleported",
    },
    upload: {
        override: true,
        rootClass: "upload control",
        draggableClass: "upload-draggable w-full",
        variantClass: "is-",
        expandedClass: "w-full",
        disabledClass: "is-disabled",
        hoveredClass: "is-hovered",
    },
};

export { tailwindConfig as config };
