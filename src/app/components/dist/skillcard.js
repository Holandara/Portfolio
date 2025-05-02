"use strict";
exports.__esModule = true;
exports.SkillCard = void 0;
// components/skillcard.tsx
var framer_motion_1 = require("framer-motion");
var image_1 = require("next/image");
exports.SkillCard = function (_a) {
    var title = _a.title, icon = _a.icon, items = _a.items;
    return (React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, whileHover: { scale: 1.04 }, className: "group relative rounded-xl p-px bg-gradient-to-br from-purple-500 to-danger aspect-auto" },
        React.createElement("div", { className: "relative rounded-xl h-full" },
            React.createElement("div", { className: "absolute -inset-px bg-gradient-to-br from-purple-500 to-danger rounded-xl -z-10 " }),
            React.createElement("div", { className: "group-hover:bg-black bg-[#1E1E1E] h-full px-4 py-7 flex flex-col items-start gap-1 rounded-xl border border-transparent" },
                React.createElement("span", { className: "font-heading text-2xl font-semibold text-gray-200 leading-none flex flex-col gap-3" },
                    React.createElement(image_1["default"], { src: icon, alt: title, width: 48, height: 48, className: "inline-block object-contain" }),
                    title),
                React.createElement("ul", { className: " text-sm text-gray-300 leading-none text-justify mt-2" }, items.map(function (item, index) { return (React.createElement("li", { key: index, className: "mb-1" },
                    "\u2022 ",
                    item)); }))))));
};
