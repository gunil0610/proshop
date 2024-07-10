import {
  ReactSVG,
  SVGProps,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react";

export type IconNode = [
  elementName: keyof ReactSVG,
  attrs: Record<string, string>,
][];

export type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ElementAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;

export interface IconProps extends ElementAttributes {
  size?: string | number;
  absoluteStrokeWidth?: boolean;
  customAttributes? :SVGAttributes;
}

export type IMQAIcon = ForwardRefExoticComponent<
  Omit<IconProps, "ref"> & RefAttributes<SVGSVGElement>
>;
