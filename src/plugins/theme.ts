import type { ComponentProps } from "@oruga-ui/oruga-next";
import { isTrueish } from "@oruga-ui/oruga-next";

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
    carousel: {
        // override: true,
        // rootClass: "carousel relative w-full",
        // overlayClass: "is-overlay",
        // wrapperClass: "carousel-scene relative h-56 overflow-hidden rounded-lg md:h-96",
        // itemsClass: "carousel-items relative h-56 overflow-hidden rounded-lg md:h-96",
        // itemsDraggingClass: "is-dragging",
        // arrowIconClass: "carousel-arrow",
        // arrowIconPrevClass: "has-icons-left",
        // arrowIconNextClass: "has-icons-right",
        // indicatorsClass: "indicator-item absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse",
        // indicatorClass: "w-3 h-3 rounded-full",
        // // indicatorsInsideClass: "is-inside",
        // // indicatorsInsidePositionClass: "is-",
        // // indicatorItemClass: "w-3 h-3 rounded-full",
        // // indicatorItemActiveClass: "is-active",
        // // indicatorItemStyleClass: "is-",
        // itemClass: "hidden duration-700 ease-in-out",
        // itemActiveClass: "is-active",
        override: true,
        rootClass: "carousel",
        overlayClass: "is-overlay",
        wrapperClass: "carousel-scene",
        itemsClass: "carousel-items",
        itemsDraggingClass: "is-dragging",
        arrowIconClass: "carousel-arrow",
        arrowIconPrevClass: "has-icons-left",
        arrowIconNextClass: "has-icons-right",
        indicatorsClass: "carousel-indicator",
        indicatorClass: "indicator-item",
        indicatorsInsideClass: "is-inside",
        indicatorsInsidePositionClass: "is-",
        indicatorItemClass: "indicator-style",
        indicatorItemActiveClass: "is-active",
        indicatorItemStyleClass: "is-",
        itemClass: "carousel-item",
        itemActiveClass: "is-active",
    },
    checkbox: {
        override: true,
        rootClass: "checkbox",
        disabledClass: "is-disabled",
        inputClass: "check rounded",
        labelClass: "control-label",
        variantClass: "is-",
        sizeClass: "is-",
    },
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
        overlayClass: "dropdown-backdrop",
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
        mobileClass: "is-mobile-modal",
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
    input: { // TTTT
        override: true,
        rootClass: (_: string, props: ComponentProps): string => {
            const classes = ["input-component"];
            if (isTrueish(props.icon)) classes.push("has-icons-left");
            return classes.join(" ");
        },
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
        hasIconRightClass: "has-icons-right",
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
    select: { // TTTT
        override: true,
        rootClass: (_: string, props: ComponentProps): string => {
            const classes = ["select-component", "control"];
            if (isTrueish(props.icon)) classes.push("has-icons-left");
            if (isTrueish(props.iconRight)) classes.push("has-icons-right");
            return classes.join(" ");
        },
        selectClass: (_: string, props: ComponentProps): string => {
            const classes = [
                "select",
                "rounded",
                "shadoww-sm",
                "focus:ring-2",
                "w-full",
            ];
            if (isTrueish(props.size)) classes.push(`input-${props.size}`);
            if (isTrueish(props.rounded)) classes.push("rounded-xl");
            if (isTrueish(props.multiple)) classes.push("is-multiple");
            if (isTrueish(props.disabled)) classes.push("disabled");
            return classes.join(" ");
        },
        rootVariantClass: "border-",
        expandedClass: "w-full",
        iconLeftClass: "icon-left",
        iconRightClass: "icon-right",
        placeholderClass: "is-empty",
        iconRightSpaceClass: "has-icons-right",
        iconLeftSpaceClass: "has-icons-left",
        arrowClass: "has-arrow",
    }, 
    sidebar: {
        override: true,
        rootClass: "sidebar",
        overlayClass: "sidebar-background",
        contentClass: "sidebar-content",
        activeClass: "is-active",
        positionClass: "is-",
        expandOnHoverClass: "is-expanded",
        fullheightClass: "is-fullheight",
        fullwidthClass: "is-fullwidth",
        reduceClass: "is-mini",
        inlineClass: "is-inline",
        mobileClass: "is-",
        scrollClipClass: "is-clipped",
    },
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
    slider: {
        override: true,
        rootClass: "slider",
        disabledClass: "is-disabled",
        trackClass: "slider-track",
        fillClass: "slider-fill",
        thumbWrapperClass: "slider-thumb-wrapper",
        thumbWrapperDraggingClass: "is-dragging",
        thumbRoundedClass: "is-rounded",
        variantClass: "is-",
        sizeClass: "is-",
        thumbClass: "slider-thumb",
        tickLabelClass: "slider-tick-label",
        tickHiddenClass: "is-tick-hidden",
        tickClass: "slider-tick",
    },
    steps: {},
    switch: {
        override: true,
        rootClass: "switch",
        // switchClass: "check",
        inputClass: "check",
        positionClass: (value: string): string => `has-${value}-label`,
        roundedClass: "is-rounded",
        labelClass: "control-label",
        sizeClass: "is-",
        variantClass: "is-",
        passiveVariantClass: "is-",
        disabledClass: "is-disabled",
    },
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
    taginput: {
        override: true,
        rootClass: "taginput control",
        containerClass: "taginput-container rounded",
        closeClass: "delete is-small",
        itemClass: "tag rounded bg-gray-100",
        variantClass: "is-",
        expandedClass: "w-full",
    },
    timepicker: {
        override: true,
        rootClass: "timepicker",
        boxClass: "dropdown-item block px-4 py-2 cursor-pointer",
        separatorClass: "is-colon control",
        footerClass: "timepicker-footer",
        sizeClass: "is-",
        selectClasses: {
            rootClass: "select control",
        },
    },
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
