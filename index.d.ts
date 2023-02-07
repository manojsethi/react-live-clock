import React, { Component } from "react";

interface Props {
  readonly blinking?: boolean | string;
  readonly className?: string;
  readonly date?: number | string;
  readonly element?: string;
  readonly filter?: () => void;
  readonly format?: string;
  readonly interval?: number;
  readonly locale?: string;
  readonly onChange?: () => void;
  readonly onReady?: () => void;
  readonly style?: CSSProperties;
  readonly ticking?: boolean;
  readonly timezone?: string;
  readonly noSsr?: boolean;
  readonly children?: string;
}

declare class SimpleSelect extends Component<Props, any> {}

export default SimpleSelect;
