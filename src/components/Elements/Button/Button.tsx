import { cn } from '@/lib/utils';
import { ElementType } from '@/types';
import { ReactElement } from 'react';

export type ButtonProps = {
  variant?: 'default' | 'subtle';
  leftSection?: ReactElement;
  rightSection?: ReactElement;
  tooltip?: string;
} & ElementType<HTMLButtonElement>;

export function Button({
  variant = 'default',
  leftSection,
  rightSection,
  className = '',
  wrapperClassName,
  children,
  tooltip,
}: ButtonProps) {
  let defaultStyle = 'btn btn-sm py-3 px-10 h-fit min-h-11 rounded-full shadow-none border-none';
  const content = (
    <>
      {leftSection && <div className="mr-2">{leftSection}</div>}
      {children}
      {rightSection && <div className="mr-2">{rightSection}</div>}
    </>
  );

  if (variant === 'default') {
    return (
      <button
        className={cn([
          defaultStyle,
          'text-white bg-primary hover:bg-tertiary',
          className,
          tooltip && 'tooltip',
        ])}
        data-tip={tooltip}
      >
        {content}
      </button>
    );
  }

  if (variant === 'subtle') {
    return (
      <div className={cn([tooltip && 'tooltip', wrapperClassName])} data-tip={tooltip}>
        <button
          className={cn([
            defaultStyle,
            'text-primary bg-transparent hover:bg-primary hover:text-white',
            className,
          ])}
        >
          {content}
        </button>
      </div>
    );
  }
}
