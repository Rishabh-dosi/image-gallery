import { useContext, useState } from "react";
import { ImageContext } from "../App";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ImagePage from "./ImagePage";

export default function Images() {
    const { response } = useContext(ImageContext);
    const [selectedImage, setSelectedImage] = useState([]);
    console.log(response);
    
    const openImageModal = (imageUrl, altText) => {
        setSelectedImage({ imageUrl, altText });
    };
    const closeImageModal = () => {
        setSelectedImage(null);
    };

    
    

    return (
        <>
            <div className="grid grid-cols-3 justify-center items-center gap-auto m-auto">
                
                

                {
                    response.map((data) => {

                        return (
                            <div className="border-2 border-collapse h-fit w-fit rounded-[5px] border-[#4a4a4a] scale-[88%]" onClick={() => openImageModal(data.urls.regular, data.alt_description)}  >
                                <div className="">
                                
                                        <img src={data.urls.small} key={data.id} alt="" />
                                    
                               </div>
                                <div className="flex justify-between p-2 capitalize font-[endregion]">
                                    <p className="flex gap-1">
                                        <img src={data.user.profile_image.small} alt="profile" className="rounded-2xl" />
                                        {
                                             
                                            data.user.first_name
                                        }
                                        
                                    </p>
                                    <p>
                                        <FavoriteBorderIcon />
                                        {
                                            data.likes
                                        }
                                        
                                        
                                    </p>


                                </div>
                            </div>

                        )
                        
                    })
                }
                {
                    selectedImage && (
                        <ImagePage
                            imageUrl={selectedImage.imageUrl}
                            altText={selectedImage.altText}
                            closeModal={closeImageModal}
                        />
                    )
                }

            </div>
            
        </>
    )
}