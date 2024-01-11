import { cn } from '@/lib/utils';
import { ElementType } from '@/types';
import { DefaultInputType } from '../inputs.types';

export type InputProps = {
  value: any;
  setValue: (value: any) => void;
  type: string;
} & ElementType<HTMLInputElement> &
  DefaultInputType;

export function Input({
  wrapperClassName,
  type,
  className,
  value,
  setValue,
  leftSection,
}: InputProps) {
  return (
    <div className={cn(['relative text-primary font-normal', wrapperClassName])}>
      <input
        type={type}
        className={cn(
          [
            'input w-full border-2 border-primary bg-transparent text-primary rounded-full placeholder:text-primary',
          ],
          className
        )}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div
        className={cn([
          'absolute flex justify-center items-center top-0 right-0 h-full translate-y-0.5',
        ])}
      >
        {leftSection}
      </div>
    </div>
  );
}
