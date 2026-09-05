import React, { createContext, useState, useContext, useCallback } from 'react';
import { uploadVideo } from '../services/videoService';

const UploadContext = createContext(null);

export const UploadProvider = ({ children }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState('');

  const startUpload = useCallback(async (courseId, file, title, description) => {
    if (isUploading) return;
    
    setIsUploading(true);
    setUploadProgress(0);
    setUploadError('');
    setUploadSuccess('');

    try {
      await uploadVideo(courseId, file, title, description, (progress) => {
        setUploadProgress(progress);
      });
      setUploadSuccess(`Video "${title}" uploaded successfully!`);
      return true;
    } catch (err) {
      setUploadError(err.response?.data?.message || err.message || 'Failed to upload video.');
      return false;
    } finally {
      setIsUploading(false);
      
      // Clear success/error messages after 5 seconds
      setTimeout(() => {
        setUploadSuccess('');
        setUploadError('');
      }, 5000);
    }
  }, [isUploading]);

  const clearUploadState = useCallback(() => {
    setUploadError('');
    setUploadSuccess('');
  }, []);

  return (
    <UploadContext.Provider value={{ isUploading, uploadProgress, uploadError, uploadSuccess, startUpload, clearUploadState }}>
      {children}
    </UploadContext.Provider>
  );
};

export const useUpload = () => {
  const context = useContext(UploadContext);
  if (!context) {
    throw new Error('useUpload must be used within an UploadProvider');
  }
  return context;
};
