import * as React from "react";
import { DropProps } from "../Drop";
import { A11yTitleType, AlignSelfType, MarginType } from "../../utils";

export interface SelectProps {
  a11yTitle?: A11yTitleType;
  alignSelf?: AlignSelfType;
  gridArea?: string;
  margin?: MarginType;
  children?: ((...args: any[]) => any);
  closeOnChange?: boolean;
  disabled?: boolean | (number | string | object)[];
  disabledKey?: string | ((...args: any[]) => any);
  dropAlign?: { top?: "top" | "bottom", bottom?: "top" | "bottom", right?: "left" | "right", left?: "left" | "right" };
  dropHeight?: "xsmall" | "small" | "medium" | "large" | "xlarge" | string;
  dropTarget?: object;
  dropProps?: DropProps;
  focusIndicator?: boolean;
  icon?: boolean | ((...args: any[]) => any) | React.ReactNode;
  id?: string;
  labelKey?: string | ((...args: any[]) => any);
  messages?: { multiple?: string };
  multiple?: boolean;
  name?: string;
  onChange?: ((...args: any[]) => any);
  onClose?: ((...args: any[]) => any);
  onMore?: ((...args: any[]) => any);
  onOpen?: ((...args: any[]) => any);
  onSearch?: ((...args: any[]) => any);
  options: (string | boolean | number | JSX.Element | object)[];
  open?: boolean;
  placeholder?: string | React.ReactNode | JSX.Element;
  plain?: boolean;
  replace?: boolean;
  searchPlaceholder?: string;
  selected?: number | number[];
  size?: "small" | "medium" | "large" | "xlarge" | string;
  value?: string | JSX.Element | object | (string | object)[];
  valueLabel?: React.ReactNode;
  valueKey?: string | ((...args: any[]) => any);
  emptySearchMessage?: string;
}

declare const Select: React.ComponentClass<SelectProps>;

export { Select };
