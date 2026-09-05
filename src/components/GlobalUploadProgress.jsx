import React from 'react';
import { useUpload } from '../contexts/UploadContext';
import { FaTimes, FaCheck, FaExclamationCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const GlobalUploadProgress = () => {
  const { isUploading, uploadProgress, uploadError, uploadSuccess, clearUploadState } = useUpload();

  if (!isUploading && !uploadError && !uploadSuccess) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        className="fixed bottom-6 right-6 z-[100] w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
      >
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-sm font-semibold text-gray-800">
              {isUploading && 'Uploading Video...'}
              {uploadSuccess && 'Upload Complete'}
              {uploadError && 'Upload Failed'}
            </h4>
            {!isUploading && (
              <button 
                onClick={clearUploadState}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FaTimes />
              </button>
            )}
          </div>

          {isUploading && (
            <>
              <div className="w-full bg-gray-100 rounded-full h-2.5 mb-2 overflow-hidden">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <p className="text-xs text-right text-gray-500 font-medium">{uploadProgress}%</p>
            </>
          )}

          {uploadSuccess && (
            <div className="flex items-center text-green-600 text-sm mt-2 bg-green-50 p-2 rounded-lg">
              <FaCheck className="mr-2 flex-shrink-0" />
              <span className="truncate">{uploadSuccess}</span>
            </div>
          )}

          {uploadError && (
            <div className="flex items-center text-red-600 text-sm mt-2 bg-red-50 p-2 rounded-lg">
              <FaExclamationCircle className="mr-2 flex-shrink-0" />
              <span className="break-words">{uploadError}</span>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GlobalUploadProgress;
