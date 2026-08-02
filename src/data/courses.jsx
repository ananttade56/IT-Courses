import React from 'react';
import { FcBarChart } from "react-icons/fc";
import { FaJava } from "react-icons/fa";

export const courses = [
  {
    id: 4,
    icon: (
      <div className="text-[#3776AB]">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="100" viewBox="0 0 48 48">
          <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498,1.5-1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path>
        </svg>
      </div>
    ),
    title: 'Python Programming',
    duration: '3 to 5 Months',
    level: 'Beginner to Advance',
    rating: '4.7 (110)',
    price: 'At An Attractive Prices',
    description: 'Master Python programming from the ground up. This course covers everything from basic syntax to advanced topics like web development, data analysis, and automation.',
    syllabus: [
      'Introduction to Python & Basics',
      'Data Structures (Lists, Tuples, Dictionaries)',
      'Functions, Modules & Packages',
      'Object-Oriented Programming (OOP) in Python',
      'File Handling & Exception Handling',
      'Introduction to Web Frameworks (Django/Flask)'
    ],
    features: ['100% Placement Assistance', 'Live Projects', 'Expert Faculty', 'Flexible Timings']
  },
  {
    id: 5,
    icon: (
      <div className="flex w-full">
        <FcBarChart className='w-72 h-10' />
      </div>
    ),
    title: 'Data Science',
    duration: '3 to 5 Months',
    level: 'Beginner to Advance',
    rating: '4.8 (132)',
    price: 'At An Attractive Prices',
    description: 'Dive into the world of Data Science. Learn how to extract insights from data using statistics, machine learning, and visualization techniques.',
    syllabus: [
      'Data Science Fundamentals',
      'Python for Data Science (NumPy, Pandas)',
      'Data Visualization (Matplotlib, Seaborn)',
      'Statistical Analysis',
      'Machine Learning Algorithms',
      'Deep Learning Basics & Projects'
    ],
    features: ['Real-world Datasets', 'Industry Level Projects', 'Mock Interviews', 'Dedicated Mentorship']
  },
  {
    id: 7,
    icon: (
      <div className="text-[#FF9900] flex items-center justify-center">
        <FaJava className="w-12 h-12" />
      </div>
    ),
    title: 'Java Fullstack',
    duration: '4 Months',
    level: 'Beginner to Advance',
    rating: '4.6 ( 80)',
    price: 'At An Attractive Prices',
    description: 'Become a complete Java Fullstack developer. Learn front-end technologies, Core & Advanced Java, and popular frameworks like Spring Boot.',
    syllabus: [
      'HTML, CSS, JavaScript (Frontend Basics)',
      'React.js / Angular',
      'Core Java & Object-Oriented Concepts',
      'Advanced Java (JDBC, Servlets, JSP)',
      'Spring Boot & Microservices',
      'Database Management (SQL/NoSQL)'
    ],
    features: ['End-to-End Application Building', 'Code Reviews', 'Placement Guarantee', 'Resume Building']
  }
];
