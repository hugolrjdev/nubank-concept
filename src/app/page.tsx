'use client';
import { Button, CreditCard } from '@/components/Elements';
import { HomeInfoSection } from '@/components/Layout';
import { IconArrowRight, IconInfoCircle } from '@tabler/icons-react';
import { useState } from 'react';

export default function Home() {
  const [search, setSearch] = useState('');

  return (
    <div className="flex flex-row w-full xl:max-w-[calc(50%-60px)]">
      <div className="flex flex-col flex-1 p-6 pt-10">
        <div className="flex flex-col items-start justify-start mb-20">
          <h1 className="text-3xl font-bold">Olá Mateus!</h1>
          <span className="max-w-[320px]">
            Bem-vindo de volta. Aqui está uma visão geral da sua conta.
          </span>
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
                <h3 className="text-1xl font-bold ml-2 text-xl">Info</h3>
              </div>
              <span className="text-sm">
                Seu vencimento é no dia <span className="font-bold">20/01/2024</span>{' '}
              </span>
              <Button
                variant="subtle"
                rightSection={<IconArrowRight style={{ rotate: '-45deg' }} />}
                tooltip="Saiba mais"
                className="mt-2 min-w-0 w-fit"
              >
                Saiba mais
              </Button>
            </div>
          </div>
          <div className="flex flex-row gap-5 xs:gap-10 mt-10">
            <Button>Pagar fatura</Button>
            <Button
              variant="subtle"
              rightSection={<IconArrowRight style={{ rotate: '-45deg' }} />}
              size={20}
            >
              Saiba mais
            </Button>
          </div>
        </div>
        <div className="flex flex-row mt-20">
          <h2 className="text-2xl font-bold mb-4">Transações recentes</h2>
        </div>
      </div>
      <div className="bg-constrast flex-1 h-screen py-6 px-20 w-fit">
        <HomeInfoSection />
      </div>
    </div>
  );
}
