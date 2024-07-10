/* eslint-disable import/no-extraneous-dependencies */
import base64SVG from "../build-icons/utils/base64SVG.mjs";
import { toCamelCase } from "./helpers.mjs";

export default ({
  componentName,
  children,
  getSvg,
  customAttributes,
}) => {
  const svgContents = getSvg();
  const svgBase64 = base64SVG(svgContents);

  const formattedCustomAttributes = Object.keys(customAttributes).reduce((acc, key)=>({
      ...acc,
      [toCamelCase(key)]: customAttributes[key]
    }),{});

  return `
import createIcon from '../createIcon';

/**
 * @component @name ${componentName}
 * @description IMQA SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,${svgBase64})
 *
 * @param {Object} props - IMQA icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ${componentName} = createIcon({ iconName: '${componentName}', iconNode: ${JSON.stringify(children)}, customAttributes: ${JSON.stringify(formattedCustomAttributes)}});

export default ${componentName};
`;
};
