import type { ComponentProps } from "@oruga-ui/oruga";
import { isTrueish } from "@oruga-ui/oruga";

const tailwindConfig = {
    button: {
        override: true,
        rootClass:
            "button duration-100 ease-in rounded-lg shadow-xs focus:outline-offset-2 focus:outline-2 focus:outline-offset-2 focus:outline-gray-500",
        wrapperClass: "button-wrapper",
        sizeClass: "is-",
        variantClass: "is-",
        roundedClass: "!rounded-3xl",
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
        override: true,
        rootClass: "carousel relative overflow-hidden w-full",
        overlayClass:
            "is-overlay flex flex-col items-center justify-center fixed",
        wrapperClass: "carousel-scene w-full relative",
        itemsClass: "carousel-items flex",
        itemsDraggingClass: "is-dragging",
        iconClass: "carousel-arrow transition duration-200 ease-in-out",
        iconPrevClass: "has-icons-left",
        iconNextClass: "has-icons-right",
        indicatorsClass:
            "carousel-indicator w-full flex items-center justify-center absolute bottom-0",
        indicatorClass: "indicator-item [&_img]:cursor-default",
        indicatorsInsideClass: "is-inside absolute",
        indicatorsInsidePositionClass: "is-",
        indicatorItemClass:
            "indicator-style block outline-none transition duration-200 ease-in-out",
        indicatorItemActiveClass: "is-active",
        indicatorItemStyleClass: "is-",
        itemClass:
            "carousel-item flex-shrink-0 w-full border-2 border-transparent",
        itemActiveClass: "is-active",
    },
    checkbox: {
        override: true,
        rootClass: "checkbox flex items-center align-top",
        disabledClass:
            "is-disabled pointer-events-none cursor-not-allowed opacity-50",
        inputClass: "check rounded outline-none text-inherit flex-shrink-0",
        labelClass:
            "control-label select-none text-sm font-medium text-heading ml-2",
        variantClass: "is-",
        sizeClass: "is-",
    },
    collapse: {
        override: true,
        rootClass: "collapse-component rounded-lg my-4",
        triggerClass: "collapse-component-trigger cursor-pointer inline-block",
        contentClass: "collapse-component-content [display:inherit]",
    },
    datepicker: {
        override: true,
        rootClass: "datepicker",
        headerClass: "datepicker-header",
        footerClass: "datepicker-footer",
        boxClass: "dropdown-item m-4",
        tableClass: "datepicker-table",
        tableHeadClass: "datepicker-header",
        tableHeadCellClass: "datepicker-cell hover:bg-gray-100 rounded",
        headerButtonsClass: "pagination field flex justify-center",
        prevButtonClass: "pagination-previous",
        nextButtonClass: "pagination-next",
        listsClass: "pagination-list flex [&_.select-component]:mr-2",
        tableBodyClass: (_: string, props: ComponentProps) => {
            const classes = ["datepicker-body"];
            if (props.events) classes.push(`has-events`);
            return classes.join(" ");
        },
        tableRowClass: "datepicker-row",
        tableCellClass: "datepicker-cell hover:bg-gray-100 rounded",
        tableCellSelectableClass: "is-selectable",
        tableCellUnselectableClass:
            "unselectable opacity-50 cursor-not-allowed",
        tableCellTodayClass: "is-today bg-blue-100 text-blue-500",
        tableCellSelectedClass: "is-selected bg-blue-500 text-white",
        //
        tableCellWithinHoveredClass: "is-within-hovered",
        tableCellFirstHoveredClass: "is-first-hovered",
        tableCellLastHoveredClass: "is-last-hovered",
        tableCellFirstSelectedClass: "is-first-selected",
        tableCellLastSelectedClass: "is-last-selected",
        tableCellWithinSelectedClass: "is-within-selected",
        tableCellInvisibleClass: "",
        tableCellNearbyClass: "is-nearby",
        tableCellEventsClass: "has-event",
        tableEventIndicatorsClass: "is-",
        tableEventVariantClass: "is-",
        tableEventsClass: "events",
        tableEventClass: "event",
        monthBodyClass: "datepicker-body",
        monthCellClass: "datepicker-cell",
        monthCellFirstHoveredClass: "is-first-hovered",
        monthCellFirstSelectedClass: "is-first-selected",
        monthCellLastHoveredClass: "is-last-hovered",
        monthCellLastSelectedClass: "is-last-selected",
        monthCellSelectableClass: "is-selectable",
        monthCellSelectedClass: "is-selected",
        monthCellTodayClass: "is-today",
        monthCellUnselectableClass:
            "unselectable opacity-50 cursor-not-allowed",
        monthCellWithinHoveredClass: "is-within-hovered",
        monthCellWithinSelectedClass: "is-within-selected",
        monthClass: "datepicker-table",
        monthTableClass: "datepicker-months",
    },
    datetimepicker: {},
    dropdown: {
        override: true,
        rootClass: "dropdown relative btn-group inline-block align-middle",
        triggerClass: "dropdown-trigger",
        disabledClass: "disabled opacity-50 cursor-not-allowed",
        expandedClass: "w-full",
        inlineClass: "inline",
        menuMobileOverlayClass:
            "dropdown-backdrop fixed top-0 left-0 w-screen h-screen",
        overlayClass: "dropdown-backdrop fixed top-0 left-0 w-screen h-screen z-40 bg-black/80 backdrop-blur-sm",
        menuClass: (): string => {
            const classes = [
                "dropdown-menu",
                "absolute",
                "z-10",
                "bg-white",
                "divide-y",
                "divide-gray-100",
                "rounded-lg",
                "shadow-lg",
                "w-44",
                "w-auto",
                "p-2",
                "text-gray-600",
            ];
            return classes.join(" ");
        },
        menuPositionClass: "position-",
        menuActiveClass: "show",
        itemTag: "a",
        itemClass:
            "dropdown-item rounded-lg block px-4 py-2 font-medium hover:bg-gray-100 cursor-pointer",
        itemActiveClass: "active",
        itemClickableClass: "clickable",
        itemDisabledClass: "disabled opacity-50 cursor-not-allowed",
        mobileClass: "is-mobile-modal",
        teleportClass: "teleported",
    },
    field: {
        override: true,
        rootClass: "field",
        labelClass: "label block text-gray-500 mb-2",
        labelSizeClass: "is-",
        messageClass: "help block",
        messageVariantClass: "is-",
        bodyClass: "field-body",
        addonsClass: "has-addons flex justify-start",
        groupedClass:
            "is-grouped flex gap-3 justify-start [&_input]:m-0 [&_select]:m-0 [&_button]:m-0",
        groupMultilineClass: "is-grouped-multiline flex-wrap",
        horizontalClass: "is-horizontal flex",
        horizontalLabelClass:
            "field-label flex-basis-0 flex-grow me-6 text-right",
        horizontalBodyClass: "field-body",
    },
    icon: {
        override: true,
        rootClass: "icon inline-flex justify-center items-center",
        variantClass: "text-",
        sizeClass: (position: string): string => {
            if (position == "small") return "text-sm";
            else if (position == "medium") return "text-md";
            else if (position == "large") return "text-lg";
            return "";
        },
        clickableClass: "clickable cursor-pointer pointer-events-auto",
        spinClass: "animate-spin",
    },
    input: {
        override: true,
        rootClass: (_: string, props: ComponentProps): string => {
            const classes = ["input-component", "[&_.icon]:text-gray-500"];
            if (isTrueish(props.icon)) classes.push("has-icons-left");
            return classes.join(" ");
        },
        inputClass: (_: string, props: ComponentProps): string => {
            const classes = [
                "input",
                "rounded-lg",
                "shadow-xs",
                "focus:ring-2",
                "w-full",
                "!bg-gray-50",
            ];

            if (props.icon) classes.push("icon-left");
            if (props.iconRight) classes.push("icon-right");
            return classes.join(" ");
        },
        textareaClass: (_: string, props: ComponentProps): string => {
            const classes = [];

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
        disabledClass:
            "disabled pointer-events-none cursor-not-allowed opacity-50",
        roundedClass: "!rounded-3xl",
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
    menu: {
        override: true,
        rootClass: "menu text-sm font-medium text-heading",
        listClass: "menu-list",
        listLabelClass: "menu-label my-2 text-gray-500",
        itemButtonClass: "menu-item [&_.icon]:mr-2 [&_.icon]:ml-1",
        itemButtonActiveClass: "active",
        itemButtonDisabledClass:
            "disabled pointer-events-none cursor-not-allowed opacity-50",
        itemSubmenuClass: "submenu border-l border-gray-200",
    },
    modal: {
        override: true,
        rootClass:
            "modal flex flex-col justify-center items-center w-screen h-screen relative top-0 left-0",
        activeClass: "is-active",
        overlayClass: "modal-background w-full h-full bg-black/80 backdrop-blur-sm",
        contentClass:
            "modal-content bg-white w-auto absolute top-[10%] left-[50%] -translate-x-1/2 overflow-auto",
        closeClass: "modal-close absolute top-0 left-0",
        fullScreenClass: "is-full-screen",
        scrollClipClass: "is-clipped",
    },
    notification: {
        override: true,
        rootClass:
            "notification alert relative flex items-center px-4 py-3 my-3 rounded-lg space-x-2 duration-100 ease-in",
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
            "pagination-list text-center flex justify-start items-center flex-wrap grow shrink order-1 list-none m-0 p-0",
        mobileClass: "is-mobile",
        buttonClass: "pagination-link",
        buttonCurrentClass: "is-current pointer-events-none cursor-not-allowed",
        buttonDisabledClass: "is-disabled",
        buttonNextClass: "pagination-next",
        buttonPrevClass: "pagination-previous",
        infoClass: "info",
    },
    radio: {
        override: true,
        rootClass: "radio flex justify-start items-center relative",
        disabledClass:
            "is-disabled pointer-events-none cursor-not-allowed opacity-50",
        inputClass: "check",
        labelClass:
            "control-label select-none text-sm font-medium text-heading ml-2",
        variantClass: "is-",
        sizeClass: "is-",
    },
    select: {
        override: true,
        rootClass: (_: string, props: ComponentProps): string => {
            const classes = [
                "select-component",
                "control",
                "relative",
                "inline-block",
            ];
            if (isTrueish(props.icon)) classes.push("has-icons-left");
            if (isTrueish(props.iconRight)) classes.push("has-icons-right");
            return classes.join(" ");
        },
        selectClass: (_: string, props: ComponentProps): string => {
            const classes = [
                "select",
                "rounded-lg",
                "shadow-xs",
                "focus:ring-2",
                "w-full",
                "!bg-gray-50",
            ];
            if (isTrueish(props.size)) classes.push(`input-${props.size}`);
            if (isTrueish(props.rounded)) classes.push("!rounded-3xl");
            if (isTrueish(props.multiple)) classes.push("is-multiple");
            if (isTrueish(props.disabled))
                classes.push(
                    "disabled pointer-events-none cursor-not-allowed opacity-50",
                );
            return classes.join(" ");
        },
        rootVariantClass: "border-",
        expandedClass: "w-full",
        iconLeftClass: "icon-left",
        iconRightClass: "icon-right",
        placeholderClass: "is-empty",
        iconRightSpaceClass: "has-icons-right appearance-none",
        iconLeftSpaceClass: "has-icons-left",
        arrowClass: "has-arrow",
    },
    sidebar: {
        override: true,
        rootClass: "sidebar absolute",
        overlayClass:
            "sidebar-background relative top-0 left-0 w-full h-full z-40 bg-black/80 backdrop-blur-sm",
        contentClass: "sidebar-content shadow-sm bg-white !w-auto !h-auto z-41",
        activeClass: "is-active",
        positionClass: "is-",
        expandOnHoverClass: "!w-full",
        fullheightClass: "!h-full",
        fullwidthClass: "!w-full",
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
        disabledClass:
            "is-disabled pointer-events-none cursor-not-allowed opacity-50",
        trackClass: "slider-track relative",
        fillClass: "slider-fill absolute",
        thumbWrapperClass:
            "slider-thumb-wrapper inline-flex flex-col items-center absolute top-1/2 cursor-grab",
        thumbWrapperDraggingClass: "is-dragging",
        thumbRoundedClass: "is-rounded",
        variantClass: "is-",
        sizeClass: "is-",
        thumbClass: "slider-thumb bg-white cursor-grab",
        tickLabelClass: "slider-tick-label absolute left-1/2",
        tickHiddenClass: "is-tick-hidden",
        tickClass: "slider-tick absolute top-0",
    },
    steps: {
        override: true,
        rootClass: "steps-wrapper",
        navClass: (_: string, props: ComponentProps): string => {
            const classes = ["steps"];
            if (props.labelPosition === "left") classes.push("has-label-left");
            if (props.labelPosition === "right")
                classes.push("has-label-right");
            return classes.join(" ");
        },
        verticalClass: "is-vertical",
        animatedClass: "is-animated",
        positionClass: "is-",
        sizeClass: "is-",
        navItemClass: "step",
        navItemVariantClass: "is-",
        navItemActiveClass: "is-active",
        navItemPreviousClass: "is-previous",
        stepClass: "step-link",
        stepLabelClass: "step-title",
        stepClickableClass: "is-clickable",
        markerClass: "step-marker",
        markerRoundedClass: "is-rounded",
        contentClass: "step-content",
        transitioningClass: "is-transitioning",
        stepPanelClass: "step-item",
        navigationClass: "step-navigation",
    },
    switch: {
        override: true,
        rootClass: "switch flex items-center align-top",
        // switchClass: "check",
        inputClass: "check flex items-center flex-shrink-0 cursor-pointer",
        positionClass: (value: string): string => `has-${value}-label`,
        roundedClass: "is-rounded",
        labelClass:
            "control-label select-none text-sm font-medium text-heading ml-2",
        sizeClass: "is-",
        variantClass: "is-",
        passiveVariantClass: "is-",
        disabledClass:
            "is-disabled pointer-events-none cursor-not-allowed opacity-50",
    },
    table: {
        override: true,
        rootClass: "table-wrapper",
        wrapperClass: "table-inner v relative",
        tableClass:
            "table min-w-full divide-y divide-gray-200 [&_th]:text-left [&_tr]:border-t [&_tr]:border-gray-200 [&_td]:px-3 [&_td]:py-2 [&_th]:px-3 [&_th]:py-2",
        borderedClass: "border border-gray-200",
        stripedClass: "[&>tbody>tr:nth-child(even)]:bg-gray-50",
        narrowedClass: "is-narrowed",
        hoverableClass: "[&>tbody>tr:hover]:bg-gray-100",
        emptyClass: "text-center py-8 text-gray-500",
        detailedClass: "bg-gray-50",
        footerClass: "footer bg-gray-50 py-3 border-t",
        paginationWrapperClass: "py-3 border-t",
        scrollableClass: "overflow-scroll",
        stickyHeaderClass:
            "[&_thead]:sticky-header [&_thead]:sticky [&_thead]:top-0 [&_thead]:bg-white [&_thead]:z-99",
        trSelectedClass: "bg-blue-50",
        thSortableClass: "cursor-pointer hover:bg-gray-100",
        thCurrentSortClass: "bg-gray-100 font-semibold",
        thSortIconClass: "ml-1",
        thUnselectableClass: "select-none",
        thStickyClass: "sticky-th sticky left-0",
        tdStickyClass: "sticky-td sticky left-0",
        thCheckboxClass: "w-12",
        thDetailedClass: "w-16",
        tdDetailedChevronClass: "",
        thPositionClass: "left-0",
        tdPositionClass: "left-0",
        mobileClass: "table-mobile block overflow-x-auto",
        mobileSortClass: "",
    },
    tabs: {
        override: true,
        rootClass: "tabs-wrapper",
        contentClass: "tabs-content p-4 flex-1",
        multilineClass: "is-multiline",
        expandedClass: "[&_.tab-link]:flex-1",
        verticalClass: "flex [&_.tabs]:block [&_.tab-link]:w-full",
        positionClass: (position: string): string => {
            if (position == "left") return "[&_.tabs]:justify-start";
            else if (position == "centered") return "[&_.tabs]:justify-center";
            else if (position == "right")
                return "[&_.tabs]:justify-end flex-row-reverse";
            return "left";
        },
        listClass: "tabs flex font-medium flex-wrap",
        typeClass: (type: string): string => {
            if (type == "toggle")
                return "toggle text-gray-500 [&_.tab-link]:border-default [&_.tab-link]:border [&_.tab-link]:border-gray-200";
            else if (type == "boxed")
                return "boxed text-gray-500 [&_.tabs]:border-default [&_.tabs]:border-b [&_.tabs]:border-gray-200";
            else if (type == "pills") return "pills text-gray-500";
            else
                return "default text-gray-500 [&_.tabs]:border-default [&_.tabs]:border-b [&_.tabs]:border-gray-200";
        },
        sizeClass: (size: string): string => {
            if (size == "small") return "text-sm";
            else if (size == "medium") return "text-md";
            else if (size == "large") return "text-lg";
            return "text-sm";
        },
        tabPanelClass: "tab-item",
        tabClass: "tab-link flex",
        tabIconClass: "tab-icon me-2",
        tabLabelClass: "tab-title",
        tabActiveClass: "active",
        tabDisabledClass:
            "is-disabled pointer-events-none cursor-not-allowed opacity-50",
        transitioningClass: "is-transitioning",
    },
    taginput: {
        override: true,
        rootClass: "taginput relative control shadow-xs",
        containerClass:
            "taginput-container rounded flex items-center justify-start p-0 h-auto",
        closeClass: "delete is-small",
        itemClass: "tag rounded bg-gray-100 inline-flex",
        variantClass: "is-",
        expandedClass: "w-full",
    },
    timepicker: {
        override: true,
        rootClass: "timepicker w-auto",
        boxClass:
            "dropdown-item block px-4 py-2 cursor-pointer flex items-center",
        separatorClass: "is-colon control",
        footerClass: "timepicker-footer flex",
        sizeClass: "is-",
        selectClasses: {
            rootClass: "select control",
        },
    },
    tooltip: {
        override: true,
        rootClass: "tooltip relative inline-flex",
        contentClass:
            "tooltip-content shadow-lg absolute w-auto whitespace-nowrap font-normal",
        triggerClass: "tooltip-trigger w-full",
        alwaysClass: "is-always opacity-100 visible",
        multilineClass: "is-multiline text-center whitespace-normal",
        variantClass: "is-",
        positionClass: "is-",
        teleportClass: "is-teleported",
    },
    upload: {
        override: true,
        rootClass: "upload control rounded-xl",
        draggableClass: "upload-draggable w-full",
        variantClass: "is-",
        expandedClass: "w-full",
        disabledClass:
            "is-disabled pointer-events-none cursor-not-allowed opacity-50",
        draggableHoveredClass: "is-hovered",
    },
};

export { tailwindConfig as config };
