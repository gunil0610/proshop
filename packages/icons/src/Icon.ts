import { createElement, forwardRef } from "react";
import defaultAttributes from "./defaultAttributes";
import { IconNode, IconProps, SVGAttributes } from "./types";
import { mergeClasses } from "./utils";

interface IconComponentProps extends IconProps {
  iconNode: IconNode; 
}

/**
 * IMQA Custom icon component
 *
 * @component Icon
 * @param {object} props
 * @param {string} props.color - The color of the icon
 * @param {number} props.size - The size of the icon
 * @param {number} props.strokeWidth - The stroke width of the icon
 * @param {boolean} props.absoluteStrokeWidth - Whether to use absolute stroke width
 * @param {SVGAttributes} props.customAttributes - Whether to use absolute stroke width
 * @param {string} props.className - The class name of the icon
 * @param {IconNode} props.children - The children of the icon
 * @param {IconNode} props.iconNode - The icon node of the icon
 *
 * @returns {ForwardRefExoticComponent} IMQA Custom Icon
 */
const Icon = forwardRef<SVGSVGElement, IconComponentProps>(
  (
    {
      color = "currentColor",
      size = 20,
      absoluteStrokeWidth,
      customAttributes = {},
      className = "",
      children,
      iconNode,
      ...rest
    },
    ref
  ) => {
    return createElement(
      "svg",
      {
        ref,
        ...defaultAttributes,
        ...customAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: customAttributes.strokeWidth ? absoluteStrokeWidth
          ? (Number(customAttributes.strokeWidth) * 20) / Number(size)
          : customAttributes.strokeWidth: undefined,
        className: mergeClasses("imqa-icons", className),
        ...rest,
      },
      [
        ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
        ...(Array.isArray(children) ? children : [children]),
      ]
    );
  }
);

export default Icon;
