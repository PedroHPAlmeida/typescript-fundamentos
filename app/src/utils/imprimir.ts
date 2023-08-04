import { Imprimivel } from "./imprimivel.js";

export function imprimir(...objs: Imprimivel[]): void {
    objs.forEach(obj => console.log(obj.paraTexto()));
}
