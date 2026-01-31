import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiSearch, FiDownload, FiPhone, FiMail, FiMessageCircle, FiStar, FiBook, FiArrowLeft } from 'react-icons/fi';
import { 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram 
} from 'react-icons/fa';
import { useChat } from '../../context/ChatContext.jsx';

export default function ViewProfile() {
  const navigate = useNavigate();
  const location = useLocation();
  const { openChat } = useChat();
  const [activeFilter, setActiveFilter] = useState('All');

  // Get employee data from navigation state
  const employeeData = location.state?.employee;

  // Default mock data for fields not in directory
  const defaultMockData = {
    about: "I'm a technologist and entrepreneur passionate about building products that help people connect and share ideas at a global scale. I co-founded Meta (formerly Facebook) with the mission of bringing the world closer together through technology.\n\nWith a strong focus on innovation, I work on advancing social platforms, virtual and augmented reality, and long-term technologies that redefine how people interact online. I believe in building open systems, thinking long-term, and using technology to create meaningful social impact.",
    socialMedia: {
      linkedin: "#",
      twitter: "#", 
      instagram: "#"
    },
    connections: [
      {
        id: 1,
        name: "Bill Gates",
        role: "Software Executive",
        photo: "https://tse4.mm.bing.net/th/id/OIP.l96pfbLLzrd2hc-WZhDdtAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
      },
      {
        id: 2,
        name: "Elon Musk",
        role: "Technology Entrepreneur",
        photo: "https://tse4.mm.bing.net/th/id/OIP.l96pfbLLzrd2hc-WZhDdtAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
      },
      {
        id: 3,
        name: "Reid Hoffman",
        role: "Internet Entrepreneur",
        photo: "https://tse4.mm.bing.net/th/id/OIP.l96pfbLLzrd2hc-WZhDdtAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
      },
      {
        id: 4,
        name: "Jack Dorsey",
        role: "Software Developer",
        photo: "https://tse4.mm.bing.net/th/id/OIP.l96pfbLLzrd2hc-WZhDdtAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
      }
    ],
    projects: [
      {
        id: 1,
        name: "Unleash",
        logo: "🚀",
        link: "Unleash.PH",
        industry: "Pet Care / E-commerce",
        role: "Web Developer"
      },
      {
        id: 2,
        name: "mWell",
        logo: "💊",
        link: "mWell: Philippines' First All-In-One Health & Wellness App",
        industry: "Health Tech / Telemedicine",
        role: "Web Developer / UI Designer"
      },
      {
        id: 3,
        name: "HELLO ATTY",
        logo: "⚖️",
        link: "Highly Succeed Inc",
        industry: "Legal Tech",
        role: "Mobile App Developer"
      },
      {
        id: 4,
        name: "The Bistro Group",
        logo: "🍽️",
        link: "The Bistro Group",
        industry: "Food & Beverage",
        role: "QA / Test Engineer"
      },
      {
        id: 5,
        name: "ULPI - Plant AI",
        logo: "🌱",
        link: "Highly Succeed Inc",
        industry: "Agriculture",
        role: "Database Administrator"
      },
      {
        id: 6,
        name: "Waste Management System",
        logo: "♻️",
        link: "Highly Succeed Inc",
        industry: "Environmental Technology",
        role: "QA Engineer"
      }
    ],
    moreDetails: {
      number: "+(23) 123 123 1234",
      email: "contact@example.com",
      languages: "EN / TL / FR",
      education: "Computer Science – Harvard",
      skills: "Scalable systems & product innovation"
    },
    careerDocuments: [
      {
        id: 1,
        name: "Resume.pdf",
        uploadedBy: "J"
      }
    ]
  };

  // Merge employee data with defaults
  const profileData = {
    name: employeeData?.name || "Unknown Employee",
    position: employeeData?.position || "Position Not Specified",
    photo: employeeData?.photo || "https://tse4.mm.bing.net/th/id/OIP.l96pfbLLzrd2hc-WZhDdtAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    department: employeeData?.department || "Department Not Specified",
    credentials: employeeData?.credentials || [],
    skills: employeeData?.skills || [],
    status: employeeData?.status || "active",
    role: employeeData?.role || "employee",
    tags: employeeData?.tags || [],
    about: defaultMockData.about,
    socialMedia: defaultMockData.socialMedia,
    connections: defaultMockData.connections,
    projects: defaultMockData.projects,
    moreDetails: {
      number: defaultMockData.moreDetails.number,
      email: employeeData?.name ? `${employeeData.name.toLowerCase().replace(/\s+/g, '.')}@company.com` : defaultMockData.moreDetails.email,
      languages: defaultMockData.moreDetails.languages,
      education: defaultMockData.moreDetails.education,
      skills: employeeData?.skills?.join(', ') || defaultMockData.moreDetails.skills
    },
    careerDocuments: [
      {
        id: 1,
        name: employeeData?.name ? `${employeeData.name.replace(/\s+/g, '_')}_Resume.pdf` : defaultMockData.careerDocuments[0].name,
        uploadedBy: employeeData?.name ? employeeData.name.charAt(0).toUpperCase() : "J"
      }
    ]
  };

  return (
    <div className="flex gap-6 p-6 bg-[#f5f5f0] min-h-screen">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/directory')}
          className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition-colors w-fit"
        >
          <FiArrowLeft className="text-xl" />
          <span className="font-semibold text-sm">Back to Directory</span>
        </button>

        {/* Profile Header */}
        <div className="bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-300 rounded-xl p-10 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>

          <div className="flex gap-6 items-start relative z-10">
            <div className="flex-shrink-0">
              <img 
                src={profileData.photo} 
                alt={profileData.name}
                className="w-32 h-32 rounded-xl object-cover border-4 border-white shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{profileData.name}</h1>
              <p className="text-sm text-gray-700 mb-4">{profileData.position}</p>
              <div className="flex gap-3 flex-wrap items-center justify-between">
                <div className="flex gap-3 flex-wrap">
                  <a href={profileData.socialMedia.linkedin} className="flex items-center gap-2 px-4 py-2 bg-[#0077b5] text-white rounded-full text-sm font-medium hover:shadow-lg transition-all hover:-translate-y-0.5">
                    <FaLinkedin className="text-base" /> Linkedin
                  </a>
                  <a href={profileData.socialMedia.twitter} className="flex items-center gap-2 px-4 py-2 bg-[#1da1f2] text-white rounded-full text-sm font-medium hover:shadow-lg transition-all hover:-translate-y-0.5">
                    <FaTwitter className="text-base" /> Twitterr
                  </a>
                  <a href={profileData.socialMedia.instagram} className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full text-sm font-medium hover:shadow-lg transition-all hover:-translate-y-0.5">
                    <FaInstagram className="text-base" /> Instagram
                  </a>
                </div>
                <button 
                  onClick={() => openChat(profileData)}
                  className="px-6 py-2 bg-white text-yellow-600 border-2 border-yellow-600 rounded-full text-sm font-bold hover:bg-yellow-600 hover:text-white transition-all shadow-md"
                >
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-5">About Me</h2>
          <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-line">{profileData.about}</p>
        </div>

        {/* Project Table Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Project Table</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b-2 border-gray-200">
                  <th className="px-4 py-4 text-left text-xs font-bold text-yellow-600 uppercase tracking-wide">PROJECT</th>
                  <th className="px-4 py-4 text-left text-xs font-bold text-yellow-600 uppercase tracking-wide">LINK</th>
                  <th className="px-4 py-4 text-left text-xs font-bold text-yellow-600 uppercase tracking-wide">INDUSTRY</th>
                  <th className="px-4 py-4 text-left text-xs font-bold text-yellow-600 uppercase tracking-wide">ROLE</th>
                </tr>
              </thead>
              <tbody>
                {profileData.projects.map((project) => (
                  <tr key={project.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{project.logo}</span>
                        <span className="text-sm text-gray-800">{project.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-5">
                      <a href="#" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">{project.link}</a>
                    </td>
                    <td className="px-4 py-5 text-sm text-gray-700">{project.industry}</td>
                    <td className="px-4 py-5 text-sm text-gray-700">{project.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-[360px] flex-shrink-0 flex flex-col gap-5">
        {/* Invisible placeholder to align with back button */}
        <div className="h-6"></div>

        {/* More Details Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-5">More Details</h3>
          
          <div className="flex flex-col gap-5">
            <div className="flex gap-4 items-start">
              <FiPhone className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="text-xs font-semibold text-gray-900 mb-1">Number</h4>
                <p className="text-xs text-gray-600">{profileData.moreDetails.number}</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FiMail className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="text-xs font-semibold text-gray-900 mb-1">Email</h4>
                <p className="text-xs text-gray-600">{profileData.moreDetails.email}</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FiMessageCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="text-xs font-semibold text-gray-900 mb-1">Languages</h4>
                <p className="text-xs text-gray-600">{profileData.moreDetails.languages}</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FiBook className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="text-xs font-semibold text-gray-900 mb-1">Education</h4>
                <p className="text-xs text-gray-600">{profileData.moreDetails.education}</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FiStar className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="text-xs font-semibold text-gray-900 mb-1">Skills</h4>
                <p className="text-xs text-gray-600">{profileData.moreDetails.skills}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Career Documents Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-5">Career Documents</h3>
          
          <div className="flex flex-col gap-3">
            {profileData.careerDocuments.map((doc) => (
              <div key={doc.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-400 to-blue-400 flex items-center justify-center text-white font-bold text-sm">
                    {doc.uploadedBy}
                  </div>
                  <div className="flex items-center gap-2 flex-1">
                    <FiDownload className="text-gray-500 text-base" />
                    <span className="text-xs text-gray-700 font-medium">{doc.name}</span>
                  </div>
                </div>
                <button className="w-9 h-9 flex items-center justify-center bg-yellow-50 rounded-lg hover:bg-yellow-600 hover:text-white text-yellow-600 transition-colors">
                  <FiDownload className="text-base" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
