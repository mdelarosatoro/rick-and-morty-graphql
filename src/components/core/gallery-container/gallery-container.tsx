import React from 'react';

function GalleryContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="container mx-auto flex flex-col justify-center items-center gap-4 p-6">
            {children}
        </div>
    );
}

export default GalleryContainer;
