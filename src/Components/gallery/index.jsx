import { GalleryContainer, GalleryTitle, Image, ImagesContainer, ImageTitle } from "./style";


export function Gallery() {

    return(
        <>
            <GalleryContainer>

                <GalleryTitle>Ultimas noticias</GalleryTitle>

                <ImagesContainer>

                    <Image>
                        <ImageTitle>Ola rapzes</ImageTitle>
                    </Image>
    
                    <Image>
                        <ImageTitle>Ola rapzes</ImageTitle>
                    </Image>


                </ImagesContainer>



                <ImagesContainer>

                    <Image>
                        <ImageTitle>Ola rapzes</ImageTitle>
                    </Image>

                    <Image>
                        <ImageTitle>Ola rapzes</ImageTitle>
                    </Image>

                </ImagesContainer>

            </GalleryContainer>
        </>
    )
}