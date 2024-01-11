'use client';

import { TextInput } from '@/components/Elements';
import { useState } from 'react';

const tabData = [
  {
    text: 'Lançamentos',
    value: 'releases',
  },
  {
    text: 'Despesas',
    value: 'expenses',
  },
  {
    text: 'Taxas',
    value: 'taxes',
  },
];

const selectData = [
  {
    text: 'Dia',
    value: 'day',
  },
  {
    text: 'Mês',
    value: 'month',
  },
  {
    text: 'Ano',
    value: 'year',
  },
];

export function HomeInfoSection() {
  const [activeTab, setActiveTab] = useState(tabData[0].value);
  const [activeSelectData, setActiveSelectData] = useState(selectData[0]);

  return (
    <>
      <TextInput />
    </>
  );
}
