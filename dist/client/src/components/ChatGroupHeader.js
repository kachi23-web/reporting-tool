"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChatGroupHeader;
const jsx_runtime_1 = require("react/jsx-runtime");
const image_1 = require("next/image");
const google_logo_png_1 = require("@/assets/google-logo.png");
const fa_1 = require("react-icons/fa");
function ChatGroupHeader() {
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("div", { className: 'flex items-center justify-around bg-white py-3 ', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'flex items-center gap-3', children: [(0, jsx_runtime_1.jsx)(fa_1.FaChevronLeft, {}), (0, jsx_runtime_1.jsx)(image_1.default, { src: google_logo_png_1.default, alt: '', className: 'rounded-full h-14 w-14' })] }), (0, jsx_runtime_1.jsx)("p", { className: 'text-lg font-semibold dark:text-white', children: "Abuja Elelction Monitoring" }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex gap-2', children: [(0, jsx_runtime_1.jsx)(fa_1.FaBell, { size: 20 }), (0, jsx_runtime_1.jsx)(fa_1.FaEllipsisV, { size: 20 })] })] }) }));
}
//# sourceMappingURL=ChatGroupHeader.js.map