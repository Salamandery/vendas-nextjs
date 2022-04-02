import { NextPage } from "next";
import { ReactNode } from "react";
import Menu from "./menu";

interface LayoutProps {
    title: string;
    children: ReactNode;
}

const Layout: NextPage<LayoutProps> = ({ title, children }: LayoutProps) => {
    return (
        <div className="app">
            <section className="main-content columns is-fullheight">
                <Menu />
                <div className="container column is-10">
                    <div className="section">
                        <div className="card">
                            <div className="card-header">
                                <p className="card-header-title">{title}</p>
                            </div>
                            <div className="card-content">
                                <div className="content">{children}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Layout