'use client'
import { useState } from "react";
import { CreditCard } from "../components/Elements/CreditCard";
import { IconInfoCircle } from "@tabler/icons-react";

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
]

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
]

export default function Home() {

  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState(tabData[0].value);
  const [activeSelectData, setActiveSelectData] = useState(selectData[0]);

  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-col flex-1 p-6">
        <div className="flex flex-col item-start justify-start mb-20">
            <h1 className="text-3xl font-bold">Olá Mateus!</h1>
            <span>Bem-vindo de volta. Aqui está uma visão geral da sua conta.</span>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Cartão de Crédito</h2>
          <div className="flex flex-row flex-wrap gap-x-10 gap-y-5 items-center w-full">
            <CreditCard
            name="Mateus Queirós"
            logo="/icons/nubank_logo.svg"
            brand="/icons/mastercard.svg"
            />
              <div className="max-w-[200px]">
                <div className="flex flex-row items-center">
                  <IconInfoCircle />
                  <h3 className="text-1xl font-bold ml-2 text-xl ">Info</h3>
                </div>
                <span className="text-sm">
                  Seu vencimento é no dia <span className="font-bold">20/01/2024</span>{' '}
                </span>
                {/* Aqui virá o Button */}
              </div>
          </div>
        </div>
        <div className="flex fle-row mt-20">
          <h2 className="text-2xl font-bold mb-4">Transações recentes</h2>
        </div>

      </div>
      <div className="bg-bg-constrast flex-1 h-screen py-6 px-20 w-fit"></div>
    </div>
  );
}
