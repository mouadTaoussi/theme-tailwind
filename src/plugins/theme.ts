import type { ComponentProps } from "@oruga-ui/oruga-next";
// import { isTrueish } from "@oruga-ui/oruga-next";

const tailwindConfig = {
    button: {
        override: true,
        rootClass:
            "button duration-100 ease-in shadoww-sm rounded focus:outline-offset-2 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500",
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
    autocomplete: {
        override: true,
        rootClass: `autocomplete`,
        // itemClass: ``,
        itemHoverClass: `bg-gray-50`,
        itemEmptyClass: `text-gray-400 italic text-sm`,
        itemGroupTitleClass: `text-xs font-bold text-gray-300 uppercase tracking-wider bg-gray-50`,
    },

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
    dropdown: {
        override: true,
        rootClass: "dropdown relative btn-group",
        triggerClass: "dropdown-trigger",
        disabledClass: "disabled",
        expandedClass: "w-full",
        inlineClass: "inline",
        menuMobileOverlayClass: "dropdown-backdrop",
        menuClass: (): string => {
            const classes = [
                "dropdown-menu",
                "absolute",
                "z-10",
                "bg-white",
                "divide-y",
                "divide-gray-100",
                "rounded-lg",
                "shadoww-sm",
                "w-44",
                "w-full",
            ];
            return classes.join(" ");
        },
        menuPositionClass: "position-",
        menuActiveClass: "show",
        itemTag: "a",
        itemClass:
            "dropdown-item block px-4 py-2 hover:bg-gray-50 cursor-pointer",
        itemActiveClass: "active",
        itemClickableClass: "clickable",
        itemDisabledClass: "disabled",
        mobileClass: "dropdown-modal",
        teleportClass: "teleported",
    },
    field: {
        override: true,
        rootClass: "field",
        labelClass: "label",
        labelSizeClass: "is-",
        messageClass: "help",
        messageVariantClass: "is-",
        bodyClass: "field-body",
        addonsClass: "has-addons",
        groupedClass: "is-grouped",
        groupMultilineClass: "is-grouped-multiline",
        horizontalClass: "is-horizontal",
        horizontalLabelClass: "field-label",
        horizontalBodyClass: "field-body",
    },
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
            const classes = [
                "input",
                "rounded",
                "shadoww-sm",
                "focus:ring-2",
                "w-full",
            ];

            if (props.icon) classes.push("icon-left");
            if (props.iconRight) classes.push("icon-right");
            return classes.join(" ");
        },
        textareaClass: (_: string, props: ComponentProps): string => {
            const classes = [
                "input",
                "rounded",
                "shadoww-sm",
                "focus:ring-2",
                "w-full",
            ];

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
            "loading flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 overflow-hidden",
        fullPageClass: "is-full-page fixed",
        overlayClass: "loading-overlay absolute top-0 right-0 bottom-0 left-0",
        iconClass: "icon",
        scrollClipClass: "is-clipped",
    },
    menu: {},
    modal: {
        override: true,
        rootClass: "modal",
        activeClass: "is-active",
        overlayClass: "modal-background",
        contentClass: "modal-content",
        closeClass: "modal-close",
        fullScreenClass: "is-full-screen",
        scrollClipClass: "is-clipped",
    },
    notification: {
        override: true,
        rootClass:
            "notification alert relative flex items-center px-4 py-3 my-3 rounded space-x-2 shadoww-sm duration-100 ease-in",
        variantClass: "is-",
        wrapperClass: "notifictation-wrapper flex items-center",
        contentClass: "notifictation-content",
        positionClass: "position-",
        iconClass: "media mr-3 ",
        closeClass: "close",
        noticeClass:
            "notifictations fixed top-0 right-0 bottom-0 left-0 overflow-hidden flex items-center",
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
        listClass:
            "pagination-list text-center flex justify-start items-center flex-wrap grow shrink order-1",
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
        rootClass: "radio flex justify-start items-center relative",
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
        contentClass: "tooltip-content shadoww-sm",
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
