import "clsx";
import { A as push, I as ensure_array_like, J as spread_attributes, K as clsx, M as element, D as pop, N as spread_props, G as escape_html, O as bind_props, P as fallback, Q as attr, R as store_get, S as unsubscribe_stores, T as copy_payload, U as assign_payload } from "../../chunks/index.js";
import { w as writable } from "../../chunks/index2.js";
/**
 * @license @lucide/svelte v0.513.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Icon($$payload, $$props) {
  push();
  const {
    name,
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth = false,
    iconNode = [],
    children,
    $$slots,
    $$events,
    ...props
  } = $$props;
  const each_array = ensure_array_like(iconNode);
  $$payload.out += `<svg${spread_attributes(
    {
      ...defaultAttributes,
      ...props,
      width: size,
      height: size,
      stroke: color,
      "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      class: clsx([
        "lucide-icon lucide",
        name && `lucide-${name}`,
        props.class
      ])
    },
    null,
    void 0,
    void 0,
    3
  )}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let [tag, attrs] = each_array[$$index];
    element($$payload, tag, () => {
      $$payload.out += `${spread_attributes({ ...attrs }, null, void 0, void 0, 3)}`;
    });
  }
  $$payload.out += `<!--]-->`;
  children?.($$payload);
  $$payload.out += `<!----></svg>`;
  pop();
}
function Camera($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "path",
      {
        "d": "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
      }
    ],
    [
      "circle",
      { "cx": "12", "cy": "13", "r": "3" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "camera" },
    props,
    {
      iconNode,
      children: ($$payload2) => {
        props.children?.($$payload2);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
function Github($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "path",
      {
        "d": "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
      }
    ],
    ["path", { "d": "M9 18c-4.51 2-5-2-7-2" }]
  ];
  Icon($$payload, spread_props([
    { name: "github" },
    props,
    {
      iconNode,
      children: ($$payload2) => {
        props.children?.($$payload2);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
function Sun($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "4" }
    ],
    ["path", { "d": "M12 2v2" }],
    ["path", { "d": "M12 20v2" }],
    ["path", { "d": "m4.93 4.93 1.41 1.41" }],
    ["path", { "d": "m17.66 17.66 1.41 1.41" }],
    ["path", { "d": "M2 12h2" }],
    ["path", { "d": "M20 12h2" }],
    ["path", { "d": "m6.34 17.66-1.41 1.41" }],
    ["path", { "d": "m19.07 4.93-1.41 1.41" }]
  ];
  Icon($$payload, spread_props([
    { name: "sun" },
    props,
    {
      iconNode,
      children: ($$payload2) => {
        props.children?.($$payload2);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
function AppBar($$payload, $$props) {
  push();
  let title = fallback($$props["title"], "My App");
  $$payload.out += `<nav class="bg-calico-secondary dark:bg-dark-secondary text-calico-black dark:text-dark-black mb-4 px-4 py-3"><div class="container mx-auto flex items-center justify-between"><div class="flex items-center gap-2 text-xl font-semibold">`;
  Camera($$payload, { size: "24" });
  $$payload.out += `<!----> <span class="text-xl font-semibold">${escape_html(title)}</span></div> <div class="flex items-center gap-6"><button aria-label="切換主題顏色" class="flex cursor-pointer items-center gap-2 hover:text-gray-500">`;
  {
    $$payload.out += "<!--[!-->";
    Sun($$payload, { size: "24" });
  }
  $$payload.out += `<!--]--></button> <a href="https://github.com/th0225/camera-selector" class="block flex items-center gap-2 hover:text-gray-500" aria-label="GitHub" target="_blank" rel="noopener noreferrer">`;
  Github($$payload, { size: "24" });
  $$payload.out += `<!----></a></div></div></nav>`;
  bind_props($$props, { title });
  pop();
}
function LensSelector($$payload, $$props) {
  let lensType = fallback($$props["lensType"], "telecentric");
  $$payload.out += `<div class="bg-calico-secondary dark:bg-dark-secondary rounded-lg p-6 shadow"><p class="text-calico-black dark:text-dark-orange mb-2 font-semibold">選擇鏡頭類型：</p> <label class="inline-flex cursor-pointer items-center" for="telecentric"><input type="radio" id="telecentric"${attr("checked", lensType === "telecentric", true)} value="telecentric" class="form-radio"/> <span class="text-calico-text dark:text-dark-text ml-2">遠心鏡頭</span></label> <label class="ml-4 inline-flex cursor-pointer items-center" for="normal"><input type="radio" id="normal"${attr("checked", lensType === "normal", true)} value="normal" class="form-radio"/> <span class="text-calico-text dark:text-dark-text ml-2">一般鏡頭</span></label></div>`;
  bind_props($$props, { lensType });
}
let parameterData = writable({
  pixelWidth: "",
  pixelHeight: "",
  pixelSize: "",
  magnification: "",
  focalLength: "",
  workingDistance: ""
});
let resultData = writable({
  fieldWidthMM: "",
  fieldHeightMM: "",
  resolutionUm: "",
  fieldWidthInch: "",
  fieldHeightInch: "",
  resolutionInch: ""
});
function LensParameter($$payload, $$props) {
  push();
  var $$store_subs;
  let isTelecentric = fallback($$props["isTelecentric"], true);
  $$payload.out += `<form class="bg-calico-secondary dark:bg-dark-secondary flex flex-col justify-center gap-4 rounded-lg p-6 shadow"><label class="block" for="pixelWidth"><span class="input-text-style">相機長邊解析度 (pixel)</span> <input type="text" id="pixelWidth" placeholder="2448"${attr("value", store_get($$store_subs ??= {}, "$parameterData", parameterData).pixelWidth)} class="input-style"/></label> <label class="block" for="pixelHeight"><span class="input-text-style">相機短邊解析度 (pixel)</span> <input type="text" id="pixelHeight" placeholder="2048"${attr("value", store_get($$store_subs ??= {}, "$parameterData", parameterData).pixelHeight)} class="input-style"/></label> <label class="block" for="pixelSize"><span class="input-text-style">像素尺寸 (um)</span> <input type="text" id="pixelSize" placeholder="3.45"${attr("value", store_get($$store_subs ??= {}, "$parameterData", parameterData).pixelSize)} class="input-style"/></label> `;
  if (isTelecentric) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<label class="block" for="magnification"><span class="input-text-style">遠心鏡頭倍率</span> <input type="text" id="magnification" placeholder="0.8"${attr("value", store_get($$store_subs ??= {}, "$parameterData", parameterData).magnification)} class="input-style"/></label>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<label class="block" for="focalLength"><span class="input-text-style">鏡頭焦距 (mm)</span> <input type="text" id="focalLength" placeholder="25"${attr("value", store_get($$store_subs ??= {}, "$parameterData", parameterData).focalLength)} class="input-style"/></label> <label class="block" for="workingDistance"><span class="input-text-style">工作距離 (mm)</span> <input type="text" id="workingDistance" placeholder="100"${attr("value", store_get($$store_subs ??= {}, "$parameterData", parameterData).workingDistance)} class="input-style"/></label>`;
  }
  $$payload.out += `<!--]--> <div class="mt-4 flex justify-end gap-3"><button type="submit" class="bg-calico-orange dark:bg-dark-orange text-calico-text dark:text-dark-bg rounded px-4 py-2 hover:bg-[#ff9944] active:bg-[#e88433] dark:hover:bg-[#ff9d55] dark:active:bg-[#dd7b2b]">計算</button> <button type="reset" class="rounded bg-gray-200 px-4 py-2 text-gray-800 transition transition-transform duration-100 hover:bg-gray-300 active:bg-gray-400">重置</button></div></form>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { isTelecentric });
  pop();
}
function LensResult($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<div class="flex flex-col gap-4"><div class="bg-calico-secondary dark:bg-dark-secondary flex flex-col gap-4 rounded-lg p-6 shadow"><label class="block" for="fieldWidthMM"><span class="input-text-style">長邊視野範圍 (mm)</span> <input type="text" id="fieldWidthMM"${attr("value", store_get($$store_subs ??= {}, "$resultData", resultData).fieldWidthMM)} class="input-style" readonly/></label> <label class="block" for="fieldHeightMM"><span class="input-text-style">短邊視野範圍 (mm)</span> <input type="text" id="fieldHeightMM"${attr("value", store_get($$store_subs ??= {}, "$resultData", resultData).fieldHeightMM)} class="input-style" readonly/></label> <label class="block" for="resolutionUm"><span class="input-text-style">像素精度 (um)</span> <input type="text" id="resolutionUm"${attr("value", store_get($$store_subs ??= {}, "$resultData", resultData).resolutionUm)} class="input-style" readonly/></label></div> <div class="bg-calico-secondary dark:bg-dark-secondary flex flex-col gap-4 rounded-lg p-6 shadow"><label class="block" for="fieldWidthInch"><span class="input-text-style">長邊視野範圍 (inch)</span> <input type="text" id="fieldWidthInch"${attr("value", store_get($$store_subs ??= {}, "$resultData", resultData).fieldWidthInch)} class="input-style" readonly/></label> <label class="block" for="fieldHeightInch"><span class="input-text-style">短邊視野範圍 (inch)</span> <input type="text" id="fieldHeightInch"${attr("value", store_get($$store_subs ??= {}, "$resultData", resultData).fieldHeightInch)} class="input-style" readonly/></label> <label class="block" for="resolutionInch"><span class="input-text-style">像素精度 (inch)</span> <input type="text" id="resolutionInch"${attr("value", store_get($$store_subs ??= {}, "$resultData", resultData).resolutionInch)} class="input-style" readonly/></label></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload) {
  let selectedLensType = "telecentric";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="bg-calido-bg dark:bg-dark-bg min-h-screen">`;
    AppBar($$payload2, { title: "Lens Selector" });
    $$payload2.out += `<!----> <div class="mx-auto max-w-4xl space-y-6 px-4">`;
    LensSelector($$payload2, {
      get lensType() {
        return selectedLensType;
      },
      set lensType($$value) {
        selectedLensType = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> <div class="flex flex-col gap-4 md:flex-row md:justify-between">`;
    LensParameter($$payload2, {
      isTelecentric: selectedLensType === "telecentric"
    });
    $$payload2.out += `<!----> `;
    LensResult($$payload2);
    $$payload2.out += `<!----></div></div></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
}
export {
  _page as default
};
