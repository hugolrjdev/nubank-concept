'use client';

import { ReactNode, useState } from 'react';
import { Header, Navbar } from '..';

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Navbar opened={opened} setOpened={setOpened} />
      <Header setOpened={setOpened} />
      {children}
    </>
  );
}
