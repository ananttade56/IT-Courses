import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaUpload } from 'react-icons/fa';
import { uploadIcon } from '../services/adminService';
import api from '../services/api';

const CourseModal = ({ isOpen, onClose, course, onSave }) => {
  const [formData, setFormData] = useState({ title: '', description: '', duration: '', level: '', icon: '', syllabus: '' });
  const [loading, setLoading] = useState(false);
  const [iconFile, setIconFile] = useState(null);
  const [iconPreview, setIconPreview] = useState('');

  useEffect(() => {
    if (course) {
      setFormData({ 
        title: course.title, 
        description: course.description || '', 
        duration: course.duration || '', 
        level: course.level || '',
        icon: course.icon || '',
        syllabus: course.syllabus ? course.syllabus.join('\n') : ''
      });
      setIconPreview(course.icon || '');
    } else {
      setFormData({ title: '', description: '', duration: '', level: '', icon: '', syllabus: '' });
      setIconPreview('');
    }
    setIconFile(null);
  }, [course, isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setIconFile(e.target.files[0]);
      setIconPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      let iconUrl = formData.icon;
      if (iconFile) {
        const result = await uploadIcon(iconFile);
        iconUrl = result.imageUrl;
      }

      const formattedData = {
        ...formData,
        icon: iconUrl,
        syllabus: formData.syllabus.split('\n').filter(s => s.trim() !== '')
      };
      
      await onSave(course ? course._id : null, formattedData);
      onClose();
    } catch (err) {
      alert(err?.response?.data?.message || 'Failed to save course.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.95 }}
          className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden flex flex-col max-h-[90vh]"
        >
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50 flex-shrink-0">
            <h3 className="text-xl font-bold text-gray-900">
              {course ? 'Edit Course' : 'Add New Course'}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>
          
          <div className="overflow-y-auto p-6">
            <form id="courseForm" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Course Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                    placeholder="e.g., Introduction to React"
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow resize-none"
                    placeholder="Briefly describe the course content..."
                  ></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                      Duration
                    </label>
                    <input
                      type="text"
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                      placeholder="e.g., 3 months"
                    />
                  </div>
                  <div>
                    <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">
                      Level
                    </label>
                    <input
                      type="text"
                      id="level"
                      name="level"
                      value={formData.level}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                      placeholder="e.g., Beginner to Advanced"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Course Icon (Image)
                  </label>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden border border-gray-200 shrink-0">
                      {iconPreview ? (
                        iconPreview.startsWith('<svg') ? (
                          <div dangerouslySetInnerHTML={{ __html: iconPreview }} className="transform scale-75" />
                        ) : (
                          <img src={iconPreview.startsWith('blob:') ? iconPreview : `${api.defaults.baseURL}${iconPreview}`} alt="Icon Preview" className="w-full h-full object-cover" />
                        )
                      ) : (
                        <FaUpload className="text-gray-400" />
                      )}
                    </div>
                    <label className="cursor-pointer bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                      <span>Choose File</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                    {iconFile && (
                      <span className="text-xs text-gray-500 truncate max-w-[120px]">{iconFile.name}</span>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="syllabus" className="block text-sm font-medium text-gray-700 mb-1">
                    Syllabus (One item per line)
                  </label>
                  <textarea
                    id="syllabus"
                    name="syllabus"
                    rows="4"
                    value={formData.syllabus}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                    placeholder="Introduction to course&#10;Basic Concepts&#10;Advanced Topics"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
          
          <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-end space-x-3 flex-shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="courseForm"
              disabled={loading}
              className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none transition-colors disabled:opacity-70 flex items-center"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              ) : null}
              {course ? 'Save Changes' : 'Create Course'}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CourseModal;
