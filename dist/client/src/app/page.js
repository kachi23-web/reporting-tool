"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const jsx_runtime_1 = require("react/jsx-runtime");
const image_1 = require("next/image");
const cuate_png_1 = require("@/assets/cuate.png");
const link_1 = require("next/link");
function Home() {
    return ((0, jsx_runtime_1.jsx)("div", { className: "bg-purple-400 min-h-[100vh]", children: (0, jsx_runtime_1.jsxs)("div", { className: "container px-4 mx-auto", children: [(0, jsx_runtime_1.jsxs)("div", { className: "space-y-16", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-3xl font-bold dark:text-white text-center", children: "Bridges" }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center", children: (0, jsx_runtime_1.jsx)(image_1.default, { src: cuate_png_1.default, alt: "hero image" }) }), (0, jsx_runtime_1.jsx)("h5", { className: "text-xl font-bold dark:text-white text-center", children: "Connect easily with your community" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: [(0, jsx_runtime_1.jsx)(link_1.default, { href: "login", children: (0, jsx_runtime_1.jsx)("button", { type: "button", className: "text-white min-w-80 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800", children: "Start messaging" }) }), (0, jsx_runtime_1.jsx)(link_1.default, { href: "", className: "w-full", children: (0, jsx_runtime_1.jsx)("button", { type: "button", className: "py-2.5 min-w-80 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-500 rounded-lg bg  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700", children: "Terms & Privacy Policy" }) })] })] }) }));
}
//# sourceMappingURL=page.js.map