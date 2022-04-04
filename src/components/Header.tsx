
interface HeaderPropos {
    title: string
}
export function Header({ title }: HeaderPropos) {
    return (
        <header>
            <span className="category">Categoria:<span> {title}</span></span>
        </header>
    );
}