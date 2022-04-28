import { Menu } from "../menu";
import { HeaderContainer, Logo } from "./style";


export function Header() {


    return(
        <>
            <HeaderContainer>
                <Logo>TechNews</Logo>
                <Menu />
            </HeaderContainer>
        </>
    )

}