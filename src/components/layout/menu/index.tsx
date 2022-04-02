import { NextPage } from "next"
import Link from 'next/link'

interface MenuItemProps {
    href: string;
    label: string;
}

const MenuItem: NextPage<MenuItemProps> = ({ href, label }: MenuItemProps) => {
    return (
        <li>
            <Link href={href}>            
                <a>
                    <span className="icon"></span> {label}
                </a>
            </Link>
        </li>
    )
}

const Menu: NextPage = () => {
    return (
        <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
            <p className="menu-label is-hidden-touch">Minhas Vendas</p>

            <ul className="menu-list">
                <MenuItem 
                    label="Home"
                    href="/"
                />
                <MenuItem 
                    label="Cadastro"
                    href="/"
                />
                <MenuItem 
                    label="Config"
                    href="/"
                />
                <MenuItem 
                    label="Sair"
                    href="/"
                />
            </ul>
        </aside>
    )
}

export default Menu