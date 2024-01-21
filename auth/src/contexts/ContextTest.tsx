'use client';
import { createContext } from "react";

type ContextTestType = {
    value: string;
}

export const ContextTest = createContext<ContextTestType>({value:'Valor Padrão'});

export const ContextTestProvider = ({children}: React.PropsWithChildren) => {
    const shareValue = 'Novo valor';
    return <ContextTest.Provider value={{value:shareValue}}>
        {children}
        </ContextTest.Provider>
}