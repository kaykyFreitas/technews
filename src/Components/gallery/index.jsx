import { GalleryContainer, GalleryTitle, Image, ImagesContainer } from "./style";
import reactImage from '../../reactImage.png';
import nextImage from '../../nextjsImage.png';
import nodeImage from '../../nodeImage.png';
import laravelImage from '../../laravelImage.png';

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