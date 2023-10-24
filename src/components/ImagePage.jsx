import React from 'react';

function ImagePage({ imageUrl, altText, closeModal }) {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80">
            <div className="relative max-w-screen-lg p-4">
                <button onClick={closeModal} className="absolute top-2 right-2 text-white text-2xl">
                    &times;
                </button>
                <img src={imageUrl} alt={altText} className="w-full h-auto" />
            </div>
        </div>
    );
}

export default ImagePage;