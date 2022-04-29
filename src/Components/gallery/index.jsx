import { GalleryContainer, GalleryTitle, Image, ImagesContainer } from "./style";
import reactImage from '../../Images/reactImage.png';
import nextImage from '../../Images/nextjsImage.png';
import nodeImage from '../../Images/nodeImage.png';
import laravelImage from '../../Images/laravelImage.png';

export function Gallery() {

    return(
        <>
            <GalleryContainer>

                <GalleryTitle>Dev news</GalleryTitle>

                <ImagesContainer>

                    <Image>
                        <img src={ reactImage } alt="" />
                    </Image>
    
                    <Image>
                        <img src={ nextImage } alt="" />
                    </Image>

                </ImagesContainer>

                <ImagesContainer>

                    <Image>
                        <img src={ nodeImage } alt="" />
                    </Image>

                    <Image>
                        <img src={ laravelImage } alt="" />
                    </Image>

                </ImagesContainer>

            </GalleryContainer>
        </>
    )
}