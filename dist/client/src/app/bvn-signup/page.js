'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BVNSignupPage;
const jsx_runtime_1 = require("react/jsx-runtime");
const BVNDetails_1 = require("@/components/BVNDetails");
const react_1 = require("react");
function BVNSignupPage() {
    const [toggle, setToggle] = (0, react_1.useState)(false);
    function handleClick() {
        setToggle(true);
    }
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: toggle ? (0, jsx_runtime_1.jsx)(BVNDetails_1.default, {})
            :
                (0, jsx_runtime_1.jsx)("div", { className: "min-h-screen flex items-center", children: (0, jsx_runtime_1.jsx)("div", { className: 'container px-4 mx-auto', children: (0, jsx_runtime_1.jsxs)("form", { className: "max-w-sm mx-auto", children: [(0, jsx_runtime_1.jsxs)("div", { className: "mb-5", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "nin-number", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Enter Your BVN number" }), (0, jsx_runtime_1.jsx)("input", { type: "number", id: "password", className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", required: true })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'space-y-3', children: [(0, jsx_runtime_1.jsx)("button", { type: "submit", className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800", onClick: handleClick, children: "Submit" }), (0, jsx_runtime_1.jsx)("button", { type: "submit", className: "text-black bg-transparent hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800", children: "Back" })] })] }) }) }) }));
}
//# sourceMappingURL=page.js.map