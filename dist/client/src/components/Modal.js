"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const image_1 = require("next/image");
const link_1 = require("next/link");
const check_svg_1 = require("@/assets/check.svg");
const Modal = ({ modalTitle }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%]", children: (0, jsx_runtime_1.jsxs)("div", { className: "bg-slate-200 flex flex-col rounded-xl shadow-xl overflow-hidden py-10", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex justify-center", children: (0, jsx_runtime_1.jsx)("div", { className: "p-3 rounded-full", children: (0, jsx_runtime_1.jsx)(image_1.default, { src: check_svg_1.default, alt: "image description", className: 'h-10 w-10' }) }) }), (0, jsx_runtime_1.jsxs)("h3", { className: "text-2xl font-bold dark:text-white text-center", children: [modalTitle, " verification is successful"] }), (0, jsx_runtime_1.jsx)(link_1.default, { href: "", className: 'inline-block', children: (0, jsx_runtime_1.jsx)("button", { type: "button", className: "w-full py-2.5 px-5 me-2 mb-2 text-sm font-bold text-gray-900 focus:outline-none bg-transparent rounded-lg bg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer", children: "Go Back" }) })] }) }));
};
exports.default = Modal;
//# sourceMappingURL=Modal.js.map