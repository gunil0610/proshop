import { createElement, forwardRef } from "react";
import { mergeClasses, toKebabCase } from "./utils";
import { IconNode, IconProps, SVGAttributes } from "./types";
import Icon from "./Icon";

type createIconProps = {
  iconName: string;
  iconNode: IconNode;
  customAttributes?:SVGAttributes;
};

/**
 * Create a IMQA icon component
 * @param {string} iconName
 * @param {array} iconNode
 * @returns {ForwardRefExoticComponent} IMQAIcon
 */
const createIcon = ({iconName, iconNode, customAttributes}:createIconProps) => {
  const Component = forwardRef<SVGSVGElement, IconProps>(
    ({ className, ...props }, ref) =>
      createElement(Icon, {
        ref,
        iconNode,
        className: mergeClasses(`imqa-${toKebabCase(iconName)}`, className),
        customAttributes,
        ...props,
      })
  );

  Component.displayName = `${iconName}`;

  return Component;
};

export default createIcon;
