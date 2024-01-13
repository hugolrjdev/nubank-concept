import { CategoriesProgress, TransactionList } from "@/components/Elements";
import { transactions } from "@/values/data";
import { isToday, isYesterday } from "date-fns";




export default function Transactions() {

  const totalExpenses = transactions.reduce((acc, transactions)=> transactions.value + acc, 0);


  const today = transactions.filter((transaction)=> isToday(transaction.date));
  const yesterday = transactions.filter((transaction)=> isYesterday(transaction.date));
  const previous = transactions.filter((transaction)=> !isYesterday(transaction.date) && !isToday(transaction.date));

  return <div className="flex flex-col p-6 pt-10">
    <div className="flex flex-row justify-between">
      <h1 className="font-bold text-3xl mb-5">
        {/*Botão adicionar transação*/}
      </h1>
    </div>

    <div className="flex flex-row flex-wrap gap-y-10 .gap-x-[300px] justify-center w-full p-12 bg-contrast rounded-xl mb-10">
     <div className="flex flex-col justify-center text-primary">
     <div>
        <span className="font-medium">
          total de gastos:&nbsp;
        </span>
         {totalExpenses.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </div>
     </div>

      <CategoriesProgress className="justify-center max-w-[400px] flex-wrap gap-x-20 gap-y-10" />
    </div>
    <div className="flex flex-col w-full max-w-[600px] max-auto gap-10">
      {today.length > 0 && <TransactionList items={today}/>}
      {yesterday.length > 0 && <TransactionList title="Ontem" items={yesterday}/>}
      {previous.length > 0 && <TransactionList title={(today && yesterday && "Anteriores")} items={previous}/>}
    </div>
  </div>
}
