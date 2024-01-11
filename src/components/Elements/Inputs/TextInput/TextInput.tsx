import { ElementType } from '@/types';
import { Input } from '..';
import { DefaultInputType } from '../inputs.types';

export type TextInputProps = {
  value: string;
  setValue: (value: string) => void;
} & ElementType<HTMLInputElement> &
  DefaultInputType;

export function TextInput({
  value,
  setValue,
  placeholder = '',
  className,
  wrapperClassName,
  leftSection,
}: TextInputProps) {
  return (
    <Input
      type="text"
      value={value}
      setValue={setValue}
      wrapperClassName={wrapperClassName}
      className={className}
      leftSection={leftSection}
      placeholder={placeholder}
    />
  );
}
