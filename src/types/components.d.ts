import * as React from 'react';

declare module 'react' {
  interface IRobotMessage extends React.HTMLProps<HTMLDivElement> {
    positionX: string;
    positionY: string;
    text: ReactNode | ReactNode[];
    scale?: string;
  }
}
