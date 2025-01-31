'use client';
import { useState } from 'react';

export const useFilePreview = () => {
    const [previewUrl, setPreviewUrl] = useState(null);
    const [previewType, setPreviewType] = useState(null);

    const openPreview = (file) => {
        // Generate preview URL based on file type
        if (file.type.startsWith('image/')) {
            setPreviewType('image');
            setPreviewUrl(URL.createObjectURL(file));
        } else if (file.type === 'application/pdf') {
            setPreviewType('pdf');
            setPreviewUrl(URL.createObjectURL(file));
        } else {
            setPreviewType('other');
            setPreviewUrl(null);
        }
    };

    const closePreview = () => {
        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }
        setPreviewUrl(null);
        setPreviewType(null);
    };

    return { previewUrl, previewType, openPreview, closePreview };
};
