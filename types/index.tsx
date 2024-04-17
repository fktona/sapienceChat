import { ReactNode } from "react";

export interface NavLinkProps {
    href: string;
    children: ReactNode | ReactNode[] | string | string[] | number | number[] | boolean | boolean[] | null | null[] | undefined | undefined[] | symbol | symbol[] | bigint | bigint[] | object | object[] | any | any[] | unknown | unknown[] | never | never[] | void | void[] | Function;
}