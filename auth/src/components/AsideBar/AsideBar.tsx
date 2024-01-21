'use client'
import { ContextTest } from "@/contexts";
import { ElementType } from "@/types/layout.types"
import { useContext } from "react";

type AsideBarProps = {
    opened: boolean;
    setOpened: () => void;
} & ElementType


export const AsideBar = () => {

    const contexto = useContext(ContextTest);
    console.log(contexto)
    return (
        <aside className='aside_bar' style={{
            backgroundColor: "#f8a",
            width: '30vw',
            padding: '16px',
            margin: '0px',
            position: 'relative',
            right:'calc(-30vw + -32px)',
            transition: '1s',
        }}>
            <nav>
                <ul className="item">{contexto.value}</ul>
                <ul className="item">Link</ul>
                <ul className="item">Link</ul>
            </nav>
        </aside>
    )
}