import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaPlus, FaTimes, FaBook, FaUserCheck, FaCheck } from 'react-icons/fa';
import { fetchCourses, createCourse, updateCourse, deleteCourse, fetchPendingStudents, approveStudent, rejectStudent, fetchApprovedStudents } from '../services/adminService';
import { motion, AnimatePresence } from 'framer-motion';
import CourseModal from '../components/CourseModal';

const AdminDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [pendingStudents, setPendingStudents] = useState([]);
  const [approvedStudents, setApprovedStudents] = useState([]);
  const [activeTab, setActiveTab] = useState('courses');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [selectedCourseIds, setSelectedCourseIds] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);
  const [studentToManage, setStudentToManage] = useState(null);
  const [selectedRole, setSelectedRole] = useState('Student');

  const loadData = async () => {
    setLoading(true);
    try {
      const [coursesData, studentsData, approvedData] = await Promise.all([
        fetchCourses(),
        fetchPendingStudents(),
        fetchApprovedStudents()
      ]);
      setCourses(coursesData.courses || []);
      setPendingStudents(studentsData.students || []);
      setApprovedStudents(approvedData.students || []);
      setError('');
    } catch (err) {
      setError('Failed to load dashboard data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleOpenModal = (course = null) => {
    setEditingCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingCourse(null);
  };

  const handleSaveCourse = async (id, courseData) => {
    if (id) {
      await updateCourse(id, courseData);
    } else {
      await createCourse(courseData);
    }
    await loadData();
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this course?')) return;
    try {
      await deleteCourse(id);
      await loadData();
    } catch (err) {
      alert(err?.response?.data?.message || 'Failed to delete course.');
    }
  };

  const handleOpenStudentModal = (student) => {
    setStudentToManage(student);
    setSelectedRole(student.role || 'Student');
    if (student.enrolledCourses) {
      setSelectedCourseIds(student.enrolledCourses.map(c => typeof c === 'object' ? c._id : c));
    } else {
      setSelectedCourseIds([]);
    }
    setIsStudentModalOpen(true);
  };

  const handleCloseStudentModal = () => {
    setIsStudentModalOpen(false);
    setStudentToManage(null);
    setSelectedCourseIds([]);
    setSelectedRole('Student');
  };

  const handleToggleCourse = (courseId) => {
    setSelectedCourseIds(prev =>
      prev.includes(courseId) ? prev.filter(id => id !== courseId) : [...prev, courseId]
    );
  };

  const handleSaveStudentCourses = async () => {
    if (!studentToManage) return;
    try {
      await approveStudent(studentToManage._id, selectedCourseIds, selectedRole);
      await loadData();
      handleCloseStudentModal();
    } catch (err) {
      alert(err?.response?.data?.message || 'Failed to update student.');
    }
  };

  const handleApproveStudent = async (studentId) => {
    try {
      await approveStudent(studentId);
      await loadData();
    } catch (err) {
      alert(err?.response?.data?.message || 'Failed to approve student.');
    }
  };

  const handleRejectStudent = async (studentId) => {
    if (!window.confirm('Are you sure you want to reject this student?')) return;
    try {
      await rejectStudent(studentId);
      await loadData();
    } catch (err) {
      alert(err?.response?.data?.message || 'Failed to reject student.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage courses and overall platform settings.</p>
          </div>

          {activeTab === 'courses' && (
            <button
              onClick={() => handleOpenModal()}
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md"
            >
              <FaPlus />
              <span>Add Course</span>
            </button>
          )}
        </div>

        <div className="flex space-x-4 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('courses')}
            className={`py-2 px-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'courses' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            Courses
          </button>
          <button
            onClick={() => setActiveTab('pending')}
            className={`py-2 px-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'pending' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'} flex items-center`}
          >
            Pending Registrations
            {pendingStudents.length > 0 && (
              <span className="ml-2 bg-red-100 text-red-600 py-0.5 px-2 rounded-full text-xs font-bold">
                {pendingStudents.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('students')}
            className={`py-2 px-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'students' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            Approved Users
          </button>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 text-red-600 p-4 rounded-lg border border-red-100">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : activeTab === 'courses' ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <FaBook className="mr-2 text-blue-600" /> All Courses
              </h3>
            </div>

            {courses.length === 0 ? (
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBook className="text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
                <p className="text-gray-500 mb-6">Create your first course to get started.</p>
                <button
                  onClick={() => handleOpenModal()}
                  className="text-blue-600 font-medium hover:text-blue-700"
                >
                  Click to add a course
                </button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created By</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {courses.map((course) => (
                      <tr key={course._id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{course.title}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500 truncate max-w-xs">{course.description || '-'}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{course.createdBy?.username || 'Unknown'}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => handleOpenModal(course)}
                            className="text-blue-600 hover:text-blue-900 mr-4 transition-colors"
                            title="Edit"
                          >
                            <FaEdit className="inline text-lg" />
                          </button>
                          <button
                            onClick={() => handleDelete(course._id)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                            title="Delete"
                          >
                            <FaTrash className="inline text-lg" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ) : activeTab === 'pending' ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <FaUserCheck className="mr-2 text-blue-600" /> Pending Users
              </h3>
            </div>

            {pendingStudents.length === 0 ? (
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUserCheck className="text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No pending registrations</h3>
                <p className="text-gray-500">You're all caught up!</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role Requested</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requested Courses</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {pendingStudents.map((student) => (
                      <tr key={student._id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{student.username}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            {student.role}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500 max-w-xs truncate">
                            {student.enrolledCourses?.length > 0
                              ? student.enrolledCourses.map(c => c.title || 'Course').join(', ')
                              : 'None'}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => handleApproveStudent(student._id)}
                            className="text-green-600 hover:text-green-900 mr-4 transition-colors bg-green-50 hover:bg-green-100 px-3 py-1 rounded-md"
                          >
                            <FaCheck className="inline mr-1" /> Approve
                          </button>
                          <button
                            onClick={() => handleRejectStudent(student._id)}
                            className="text-red-600 hover:text-red-900 transition-colors bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md"
                          >
                            <FaTimes className="inline mr-1" /> Reject
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <FaUserCheck className="mr-2 text-blue-600" /> Approved Users
              </h3>
            </div>

            {approvedStudents.length === 0 ? (
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUserCheck className="text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No approved users</h3>
                <p className="text-gray-500">Approve some registrations to see them here.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enrolled Courses</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {approvedStudents.map((student) => (
                      <tr key={student._id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{student.username}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {student.role}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500 max-w-xs truncate">
                            {student.enrolledCourses?.length > 0
                              ? student.enrolledCourses.map(c => c.title).join(', ')
                              : 'None'}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => handleOpenStudentModal(student)}
                            className="text-blue-600 hover:text-blue-900 transition-colors"
                          >
                            Manage Access
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Course Modal */}
      <CourseModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        course={editingCourse}
        onSave={handleSaveCourse}
      />

      {/* Student Approval/Manage Modal */}
      <AnimatePresence>
        {isStudentModalOpen && (
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
              className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <h3 className="text-xl font-bold text-gray-900">
                  {studentToManage?.status === 'Pending' ? 'Approve Registration' : 'Manage Access'}
                </h3>
                <button
                  onClick={handleCloseStudentModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Assign Role:</label>
                  <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  >
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                  </select>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Select the courses <strong>{studentToManage?.username}</strong> should have access to:
                </p>
                <div className="max-h-60 overflow-y-auto space-y-2 border border-gray-200 rounded-lg p-3">
                  {courses.length === 0 ? (
                    <p className="text-sm text-gray-500 text-center py-4">No courses available.</p>
                  ) : (
                    courses.map(course => (
                      <label key={course._id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedCourseIds.includes(course._id)}
                          onChange={() => handleToggleCourse(course._id)}
                          className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-sm font-medium text-gray-700">{course.title}</span>
                      </label>
                    ))
                  )}
                </div>
                <div className="mt-8 flex justify-end space-x-3">
                  <button
                    onClick={handleCloseStudentModal}
                    className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveStudentCourses}
                    className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none transition-colors"
                  >
                    {studentToManage?.status === 'Pending' ? 'Approve User' : 'Save Changes'}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;
