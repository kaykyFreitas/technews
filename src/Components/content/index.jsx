import { ContentContainer, ContentTitle, News, NewsContainer, NewsTitle } from "./style";






export function Content() {

    return(
        <>
            <ContentContainer>

                <ContentTitle>Assuntos do momento</ContentTitle>

                <NewsContainer>
                    <News>
                        <NewsTitle>Twitter</NewsTitle>
                    </News>
    
                    <News>
                        <NewsTitle>Metaverso</NewsTitle>
                    </News>

                    <News>
                        <NewsTitle>Star link</NewsTitle>
                    </News>

                    <News>
                        <NewsTitle>Bitcoin</NewsTitle>
                    </News>

                </NewsContainer>



                <NewsContainer>
                    <News>
                        <NewsTitle>Playstation</NewsTitle>
                    </News>
    
                    <News>
                        <NewsTitle>Tesla</NewsTitle>
                    </News>

                    <News>
                        <NewsTitle>Instagram</NewsTitle>
                    </News>

                    <News>
                        <NewsTitle>Apple</NewsTitle>
                    </News>

                </NewsContainer>

            </ContentContainer>
        </>
    )
}