'use client';

import { Select, Tabs, TextInput } from '@/components/Elements';
import { ElementType } from '@/types';
import { categories } from '@/values/data';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import { ExpensesTab, ReleasesTab, TaxesTab } from '..';

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
    name: 'Dia',
    value: 'day',
  },
  {
    name: 'Mês',
    value: 'month',
  },
  {
    name: 'Ano',
    value: 'year',
  },
];

type HomeInfoSectionProps = {
  search: string;
  setSearch: (value: string) => void;
} & ElementType;

export function HomeInfoSection({ search, setSearch }: HomeInfoSectionProps) {
  const [activeTab, setActiveTab] = useState(tabData[1].value);
  const [activeSelectData, setActiveSelectData] = useState(selectData[0]);

  return (
    <>
      <TextInput
        value={search}
        setValue={setSearch}
        placeholder="Pode perguntar"
        leftSection={<IconSearch size={20} className="absolute right-4 top-0 translate-y-3" />}
      />
      <div className="flex flex-row flex-wrap justify-between gap-5 mt-10">
        <Tabs items={tabData} setActive={setActiveTab} active={activeTab} />
        <Select
          active={activeSelectData}
          setActive={setActiveSelectData}
          items={selectData}
          className="w-[100px]"
        />
      </div>
      <div className="w-full">
        {activeTab === 'expenses' ? (
          <ExpensesTab data={categories} />
        ) : activeTab === 'releases' ? (
          <ReleasesTab />
        ) : activeTab === 'taxes' ? (
          <TaxesTab />
        ) : null}
      </div>
    </>
  );
}
