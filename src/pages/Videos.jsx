import React, { useState, useRef, useEffect } from 'react';
import { FaUpload, FaTrash, FaPlay, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { getVideos, uploadVideo, deleteVideo as apiDeleteVideo } from '../services/videoService';
import { fetchCourses } from '../services/adminService';
import api from '../services/api'; // For getting baseURL

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoError, setVideoError] = useState(false);
  const fileInputRef = useRef(null);

  const role = localStorage.getItem('role');
  const canManageVideos = role === 'Admin' || role === 'Teacher';

  const loadCourses = async () => {
    try {
      const data = await fetchCourses();
      setCourses(data.courses || []);
      if (data.courses && data.courses.length > 0) {
        setSelectedCourseId(data.courses[0]._id);
      } else {
        setLoading(false);
      }
    } catch (err) {
      console.error('Failed to load courses', err);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCourses();
  }, []);

  const fetchVideos = async (cId) => {
    if (!cId) return;
    setLoading(true);
    try {
      const data = await getVideos(cId);
      setVideos(data.videos || []);
      setError('');
    } catch (err) {
      setError('Failed to load videos. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos(selectedCourseId);
  }, [selectedCourseId]);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (file && selectedCourseId) {
      if (!file.type.includes('mp4')) {
        setError('Please upload an MP4 video file for best browser compatibility.');
        e.target.value = null;
        return;
      }
      setUploading(true);
      setError('');
      try {
        await uploadVideo(selectedCourseId, file, file.name, 'Uploaded from frontend');
        await fetchVideos(selectedCourseId);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to upload video.');
      } finally {
        setUploading(false);
      }
    }
    // Reset file input so same file can be uploaded again if deleted
    e.target.value = null;
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this video?')) return;
    try {
      await apiDeleteVideo(id);
      setVideos((prev) => prev.filter((v) => v._id !== id));
      if (selectedVideo && selectedVideo._id === id) {
        setSelectedVideo(null);
      }
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to delete video.');
    }
  };

  // Helper to construct full URL for streaming if backend returns relative path
  const getStreamUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${api.defaults.baseURL}${url}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Video Management</h1>
            <p className="text-gray-600 mt-2">View and manage your video content.</p>
          </div>

          <div className="flex items-center space-x-4 w-full md:w-auto">
            {courses.length > 0 && (
              <select
                value={selectedCourseId}
                onChange={(e) => setSelectedCourseId(e.target.value)}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-48 p-2.5 shadow-sm"
              >
                {courses.map((course) => (
                  <option key={course._id} value={course._id}>
                    {course.title}
                  </option>
                ))}
              </select>
            )}

            {canManageVideos && selectedCourseId && (
              <>
                <button
                  onClick={() => fileInputRef.current.click()}
                  disabled={uploading}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md disabled:opacity-50 whitespace-nowrap"
                >
                  {uploading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <FaUpload />
                  )}
                  <span>{uploading ? 'Uploading...' : 'Upload Video'}</span>
                </button>
                <input
                  type="file"
                  accept="video/mp4"
                  ref={fileInputRef}
                  onChange={handleUpload}
                  className="hidden"
                />
                <p className="text-xs text-gray-500 mt-2 absolute -bottom-6 right-0">Only MP4 format supported</p>
              </>
            )}
          </div>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 text-red-600 p-4 rounded-lg border border-red-100">
            {error}
          </div>
        )}

        {/* Video Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : videos.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
            <div className="w-20 h-20 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPlay className="text-3xl ml-1" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No videos yet</h3>
            <p className="text-gray-500 mb-6">There are no videos available in this course.</p>
            {canManageVideos && (
              <button
                onClick={() => fileInputRef.current.click()}
                className="text-blue-600 font-medium hover:text-blue-700"
              >
                Click to upload a video
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {videos.map((video) => (
                <motion.div
                  key={video._id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group flex flex-col"
                >
                  <div className="relative aspect-video bg-black/5 group-hover:bg-black/10 transition-colors flex items-center justify-center overflow-hidden">
                    {/* We render a hidden auto-playing video on hover, otherwise show a play button */}
                    <video
                      src={getStreamUrl(video.streamUrl)}
                      className="w-full h-full object-cover hidden group-hover:block"
                      muted
                      loop
                      playsInline
                      controlsList="nodownload"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/40 transition-all cursor-pointer"
                      onClick={() => {
                        setSelectedVideo(video);
                        setVideoError(false);
                      }}
                    >
                      <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                        <FaPlay className="text-blue-600 ml-1 text-xl" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 flex items-start justify-between bg-white flex-grow">
                    <div className="truncate pr-4 flex-grow">
                      <h4 className="font-semibold text-gray-900 truncate" title={video.title}>{video.title}</h4>
                      <p className="text-sm text-gray-500 capitalize">{video.compressionStatus || 'Ready'}</p>
                    </div>
                    {canManageVideos && (
                      <button
                        onClick={() => handleDelete(video._id)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-2 -mr-2 bg-gray-50 hover:bg-red-50 rounded-full"
                        title="Delete Video"
                      >
                        <FaTrash />
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
          >
            <div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl flex flex-col">
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={() => {
                    setSelectedVideo(null);
                    setVideoError(false);
                  }}
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
              {videoError ? (
                <div className="w-full h-[50vh] flex flex-col items-center justify-center bg-gray-900 text-white p-8 text-center">
                  <FaTimes className="text-4xl text-red-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Video format not supported</h3>
                  <p className="text-gray-400 max-w-md">
                    This browser cannot play the original video format. Please upload videos in MP4 (H.264) format.
                  </p>
                </div>
              ) : (
                <video
                  src={getStreamUrl(selectedVideo.streamUrl)}
                  controls
                  controlsList="nodownload"
                  onContextMenu={(e) => e.preventDefault()}
                  autoPlay
                  onError={() => setVideoError(true)}
                  className="w-full h-auto max-h-[75vh] object-contain bg-black"
                />
              )}
              <div className="p-6 bg-gray-900 text-white flex justify-between items-center">
                <h3 className="font-semibold text-xl truncate pr-4">{selectedVideo.title}</h3>
                {canManageVideos && (
                  <button
                    onClick={() => handleDelete(selectedVideo._id)}
                    className="flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors bg-red-400/10 hover:bg-red-400/20 px-4 py-2 rounded-lg"
                  >
                    <FaTrash />
                    <span>Delete</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Videos;
