import Tema from "./Tema";

interface Postagem{
    id: number;
    tutulo: string;
    texto: string;
    tema?: Tema | null
}
export default Postagem;