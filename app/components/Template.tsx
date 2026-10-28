interface TemplateProps {
    children: React.ReactNode
}
export const Template: React.FC<TemplateProps> = ({children}: TemplateProps) => {
    return (
        <>
            <Header/>
                {children}
            <Footer/>
        </>
    )
}
const Header: React.FC = () => {
    return(
        <header className="bg-black-950 text-white py-3" >
            <div className="container mx-auto flex justify-between items-center px-4" >
                <h1 className="text-3xl font-bol">ImageLite</h1>
            </div>
        </header>
    )
}
const Footer: React.FC = () => {
    return (
        <footer className="bg-black-950 text-white py-4 mt-8" >
            <div className="container mx-auto text-center" >
                Desenvolvido por Ryckson.
            </div>
        </footer>
    )
}                   