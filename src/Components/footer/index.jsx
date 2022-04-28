import { Contact, ContactsContainer, FooterContainer, Info, InfosContainer } from "./style";

export function Footer() {


    return(
        <>
            <FooterContainer>
                <ContactsContainer>
                    <Contact>Email: myemail@gmail.com</Contact>
                    <Contact>LinkedIn: Nome Sobrenome</Contact>
                    <Contact>Tel: 11 1234-5678</Contact>
                </ContactsContainer>   

                <InfosContainer>
                    <Info>Lorem</Info>
                    <Info>Lorem</Info>
                    <Info>Lorem</Info>
                    <Info>Lorem</Info>
                    <Info>Lorem</Info>
                    <Info>Lorem</Info>
                    <Info>Lorem</Info>
                </InfosContainer>

            </FooterContainer>
        </>
    )
}