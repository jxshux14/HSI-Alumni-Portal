// pages/DirectoryPage.jsx
import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DirectoryHeader from '../components/DirectoryNetworkingComponents/DirectoryHeader.jsx';
import EmployeeCard from '../components/DirectoryNetworkingComponents/EmployeeCards.jsx';
import SelectionBox from '../components/DirectoryNetworkingComponents/SelectionBox.jsx';
// import ViewProfile from '../components/DirectoryNetworkingComponents/ViewProfile.jsx';
import '../styles/pages/DirectoryPage.css';

// Fixed photo URL for all employees
const EMPLOYEE_PHOTO_URL = 'https://tse4.mm.bing.net/th/id/OIP.l96pfbLLzrd2hc-WZhDdtAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3';

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [department, setDepartment] = useState('');
  const [status, setStatus] = useState('');
  const [role, setRole] = useState('');
  const [tag, setTag] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  const employees = [
    {
      id: 1,
      position: "Senior Frontend Developer",
      name: "Bill Gates",
      department: "Web Development Department",
      credentials: [
        "Best Portfolio Website – Regional Web Creators Summit 2024",
        "Outstanding Frontend Developer Award – DevConnect Conference"
      ],
      skills: ["Python", "JavaScript", "HTML", "PHP", "Laravel"],
      photo: EMPLOYEE_PHOTO_URL,
      status: "active",
      role: "developer",
      tags: ["leadership", "mentor"]
    },
    {
      id: 2,
      position: "Senior Backend Engineer",
      name: "Satya Nadella",
      department: "Cloud Services Department",
      credentials: [
        "Azure Cloud Excellence Award 2024",
        "Most Scalable System Architecture 2023"
      ],
      skills: ["C#", ".NET", "Azure", "SQL", "Docker"],
      photo: EMPLOYEE_PHOTO_URL,
      status: "active",
      role: "engineer",
      tags: ["leadership", "innovator"]
    },
    {
      id: 3,
      position: "UX/UI Designer",
      name: "Evan You",
      department: "Product Design Department",
      credentials: [
        "Best User Interface Award 2024",
        "Design Innovation Recognition"
      ],
      skills: ["Figma", "Adobe XD", "Vue.js", "CSS", "Illustrator"],
      photo: EMPLOYEE_PHOTO_URL,
      status: "remote",
      role: "designer",
      tags: ["innovator", "collaborator"]
    },
    {
      id: 4,
      position: "DevOps Engineer",
      name: "Sarah Connor",
      department: "Infrastructure Department",
      credentials: [
        "Infrastructure Automation Excellence 2024",
        "Zero Downtime Achievement"
      ],
      skills: ["Kubernetes", "AWS", "Terraform", "CI/CD", "Linux"],
      photo: EMPLOYEE_PHOTO_URL,
      status: "active",
      role: "engineer",
      tags: ["collaborator", "innovator"]
    },
    {
      id: 5,
      position: "Data Scientist",
      name: "Andrew Ng",
      department: "AI Research Department",
      credentials: [
        "Machine Learning Breakthrough Award",
        "AI Research Paper of the Year"
      ],
      skills: ["Python", "TensorFlow", "PyTorch", "R", "SQL"],
      photo: EMPLOYEE_PHOTO_URL,
      status: "on-leave",
      role: "engineer",
      tags: ["mentor", "leadership"]
    },
    {
      id: 6,
      position: "Product Manager",
      name: "Sheryl Sandberg",
      department: "Product Management Department",
      credentials: [
        "Product Launch Excellence Award",
        "User Growth Achievement"
      ],
      skills: ["Agile", "JIRA", "SQL", "Analytics", "Strategy"],
      photo: EMPLOYEE_PHOTO_URL,
      status: "active",
      role: "manager",
      tags: ["leadership", "collaborator"]
    },
    {
      id: 7,
      position: "Mobile App Developer",
      name: "Tim Cook",
      department: "Mobile Development Department",
      credentials: [
        "Best Mobile App 2024",
        "iOS Development Excellence Award"
      ],
      skills: ["Swift", "Kotlin", "React Native", "Firebase", "XCode"],
      photo: EMPLOYEE_PHOTO_URL,
      status: "active",
      role: "developer",
      tags: ["innovator", "collaborator"]
    },
    {
      id: 8,
      position: "Security Analyst",
      name: "Kevin Mitnick",
      department: "Cybersecurity Department",
      credentials: [
        "Security Excellence Award 2024",
        "Zero Vulnerability Detection"
      ],
      skills: ["Penetration Testing", "Network Security", "SIEM", "Cryptography", "Firewalls"],
      photo: EMPLOYEE_PHOTO_URL,
      status: "active",
      role: "engineer",
      tags: ["innovator"]
    },
    {
      id: 9,
      position: "Database Administrator",
      name: "Michael Stonebraker",
      department: "Data Management Department",
      credentials: [
        "Database Optimization Award 2024",
        "Data Integrity Excellence"
      ],
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQL Server"],
      photo: EMPLOYEE_PHOTO_URL,
      status: "active",
      role: "engineer",
      tags: ["mentor"]
    },
    {
      id: 10,
      position: "QA Automation Engineer",
      name: "James Bach",
      department: "Quality Assurance Department",
      credentials: [
        "Quality Excellence Award 2024",
        "Zero Production Bugs 2023"
      ],
      skills: ["Selenium", "Cypress", "Jest", "TestRail", "JIRA"],
      photo: EMPLOYEE_PHOTO_URL,
      status: "remote",
      role: "engineer",
      tags: ["collaborator", "innovator"]
    },
    {
      id: 11,
      position: "Business Analyst",
      name: "Indra Nooyi",
      department: "Business Operations Department",
      credentials: [
        "Business Process Improvement Award",
        "Stakeholder Satisfaction Excellence"
      ],
      skills: ["Business Analysis", "Process Mapping", "SQL", "Tableau", "Power BI"],
      photo: EMPLOYEE_PHOTO_URL,
      status: "active",
      role: "manager",
      tags: ["leadership", "collaborator"]
    },
    {
      id: 12,
      position: "Technical Writer",
      name: "Ann Handley",
      department: "Documentation Department",
      credentials: [
        "Best Technical Documentation 2024",
        "Clarity and Precision Award"
      ],
      skills: ["Technical Writing", "Markdown", "Git", "Documentation", "API Docs"],
      photo: EMPLOYEE_PHOTO_URL,
      status: "active",
      role: "designer",
      tags: ["collaborator"]
    },
    {
      id: 13,
      position: "Full Stack Developer",
      name: "Guido van Rossum",
      department: "Web Development Department",
      credentials: [
        "Full Stack Excellence Award 2024",
        "Python Contribution Recognition"
      ],
      skills: ["Python", "Django", "React", "PostgreSQL", "Docker"],
      photo: EMPLOYEE_PHOTO_URL,
      status: "active",
      role: "developer",
      tags: ["innovator", "mentor"]
    },
    {
      id: 14,
      position: "Cloud Architect",
      name: "Werner Vogels",
      department: "Cloud Services Department",
      credentials: [
        "Cloud Architecture Excellence",
        "Scalability Design Award"
      ],
      skills: ["AWS", "Terraform", "Kubernetes", "Microservices", "CI/CD"],
      photo: EMPLOYEE_PHOTO_URL,
      status: "active",
      role: "engineer",
      tags: ["leadership", "innovator"]
    },
    {
      id: 15,
      position: "Scrum Master",
      name: "Jeff Sutherland",
      department: "Agile Department",
      credentials: [
        "Scrum Implementation Excellence",
        "Team Productivity Award"
      ],
      skills: ["Scrum", "Agile", "JIRA", "Team Leadership", "Retrospectives"],
      photo: EMPLOYEE_PHOTO_URL,
      status: "active",
      role: "manager",
      tags: ["leadership", "collaborator"]
    },
    {
      id: 16,
      position: "Machine Learning Engineer",
      name: "Yoshua Bengio",
      department: "AI Research Department",
      credentials: [
        "ML Innovation Award 2024",
        "Research Paper of the Year"
      ],
      skills: ["Python", "TensorFlow", "PyTorch", "MLOps", "Data Science"],
      photo: EMPLOYEE_PHOTO_URL,
      status: "active",
      role: "engineer",
      tags: ["innovator", "mentor"]
    },
    {
      id: 17,
      position: "IT Support Specialist",
      name: "Kevin Systrom",
      department: "IT Support Department",
      credentials: [
        "Customer Satisfaction Award",
        "Fast Resolution Excellence"
      ],
      skills: ["Helpdesk", "Networking", "Hardware", "Windows/Mac", "Ticketing"],
      photo: EMPLOYEE_PHOTO_URL,
      status: "inactive",
      role: "engineer",
      tags: ["collaborator"]
    },
    {
      id: 18,
      position: "Sales Engineer",
      name: "Marc Benioff",
      department: "Sales Department",
      credentials: [
        "Top Sales Performance 2024",
        "Technical Sales Excellence"
      ],
      skills: ["Sales", "CRM", "Technical Demos", "Product Knowledge", "Negotiation"],
      photo: EMPLOYEE_PHOTO_URL,
      status: "active",
      role: "manager",
      tags: ["leadership"]
    },
    {
      id: 19,
      position: "Content Strategist",
      name: "Seth Godin",
      department: "Marketing Department",
      credentials: [
        "Content Strategy Award 2024",
        "Best Marketing Campaign"
      ],
      skills: ["Content Strategy", "SEO", "Social Media", "Copywriting", "Analytics"],
      photo: EMPLOYEE_PHOTO_URL,
      status: "remote",
      role: "designer",
      tags: ["innovator"]
    },
    {
      id: 20,
      position: "Systems Administrator",
      name: "Linus Torvalds",
      department: "Infrastructure Department",
      credentials: [
        "Systems Excellence Award",
        "Infrastructure Reliability"
      ],
      skills: ["Linux", "Bash", "Networking", "Virtualization", "Monitoring"],
      photo: EMPLOYEE_PHOTO_URL,
      status: "active",
      role: "engineer",
      tags: ["innovator", "mentor"]
    },
    {
      id: 21,
      position: "Product Designer",
      name: "Jony Ive",
      department: "Product Design Department",
      credentials: [
        "Design Excellence Award 2024",
        "User Experience Innovation"
      ],
      skills: ["Figma", "Sketch", "Prototyping", "User Research", "UI/UX"],
      photo: EMPLOYEE_PHOTO_URL,
      status: "inactive",
      role: "designer",
      tags: ["innovator", "collaborator"]
    },
    {
      id: 22,
      position: "Data Engineer",
      name: "DJ Patil",
      department: "Data Management Department",
      credentials: [
        "Data Engineering Excellence",
        "ETL Pipeline Innovation"
      ],
      skills: ["Python", "Spark", "Airflow", "SQL", "Data Warehousing"],
      photo: EMPLOYEE_PHOTO_URL,
      status: "inactive",
      role: "engineer",
      tags: ["innovator"]
    },
    {
      id: 23,
      position: "HR Technology Specialist",
      name: "Reid Hoffman",
      department: "HR Department",
      credentials: [
        "HR Tech Implementation Award",
        "Employee Experience Innovation"
      ],
      skills: ["HRIS", "Workday", "Recruitment Systems", "Analytics", "Automation"],
      photo: EMPLOYEE_PHOTO_URL,
      status: "inactive",
      role: "manager",
      tags: ["collaborator"]
    },
    {
      id: 24,
      position: "Blockchain Developer",
      name: "Vitalik Buterin",
      department: "Emerging Technologies Department",
      credentials: [
        "Blockchain Innovation Award",
        "Smart Contract Excellence"
      ],
      skills: ["Solidity", "Ethereum", "Smart Contracts", "Web3.js", "Cryptography"],
      photo: EMPLOYEE_PHOTO_URL,
      status: "active",
      role: "developer",
      tags: ["innovator"]
    }
  ];

  // ... rest of your component code remains exactly the same ...

  // Filter employees based on all criteria
  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = searchTerm === '' || 
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.skills.some(skill => 
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
    const matchesDepartment = department === '' || 
      employee.department === department;
    
    const matchesStatus = status === '' || 
      employee.status === status;
    
    const matchesRole = role === '' || 
      employee.role === role;
    
    const matchesTag = tag === '' || 
      employee.tags.includes(tag);
    
    return matchesSearch && matchesDepartment && matchesStatus && matchesRole && matchesTag;
  });

  // Sort employees based on sortOption
  const sortedEmployees = [...filteredEmployees].sort((a, b) => {
    if (sortOption === 'newest') {
      return b.id - a.id;
    } else if (sortOption === 'oldest') {
      return a.id - b.id;
    } else if (sortOption === 'name-asc') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'name-desc') {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEmployees = sortedEmployees.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedEmployees.length / itemsPerPage);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, department, status, role, tag, sortOption]);

  const handleClear = () => {
    setSearchTerm('');
    setSortOption('');
    setDepartment('');
    setStatus('');
    setRole('');
    setTag('');
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPaginationNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);

      // Calculate start and end of visible pages
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      // Adjust if at beginning
      if (currentPage <= 3) {
        start = 2;
        end = 4;
      }

      // Adjust if at end
      if (currentPage >= totalPages - 2) {
        start = totalPages - 3;
        end = totalPages - 1;
      }

      // Add ellipsis after first page if needed
      if (start > 2) {
        pageNumbers.push('...');
      }

      // Add middle pages
      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }

      // Add ellipsis before last page if needed
      if (end < totalPages - 1) {
        pageNumbers.push('...');
      }

      // Always show last page
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    
    <div className="directory-container">
      
      {/* Header */}
      <DirectoryHeader />

      {/* Search and Filter Bar */}
      <div className='w-full justify-center items-center flex flex-col mb-8 mt-8'>
        {/* Top Row */}
        <div className='w-[90%] bg-white rounded-t-xl justify-center items-center flex gap-5 p-5 border-b-2 shadow-md'>
          <div className='relative w-[70%]'>
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              className='bg-gray-100 pl-10 p-2 w-full border border-gray-300 rounded-xl focus:outline focus:outline-yellow-400 h-10'
              type="text" 
              placeholder="Search by name, position, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />      
          </div>
          <SelectionBox 
            className="w-[30%]"
            test={[
              {value: "", label: "Sort By"},
              {value: "newest", label: "Newest"},
              {value: "oldest", label: "Oldest"},
              {value: "name-asc", label: "Name A-Z"},
              {value: "name-desc", label: "Name Z-A"}
            ]}
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          />                  
        </div>
        
        {/* Bottom Row */}
        <div className='w-[90%] bg-white rounded-b-xl justify-center items-center flex gap-5 p-5 shadow-md'>
          <SelectionBox 
            test={[
              {value: "", label: "Department"},
              {value: "Web Development Department", label: "Web Development"},
              {value: "Cloud Services Department", label: "Cloud Services"},
              {value: "Product Design Department", label: "Product Design"},
              {value: "AI Research Department", label: "AI Research"},
              {value: "Infrastructure Department", label: "Infrastructure"},
              {value: "Product Management Department", label: "Product Management"},
              {value: "Mobile Development Department", label: "Mobile Development"},
              {value: "Cybersecurity Department", label: "Cybersecurity"},
              {value: "Data Management Department", label: "Data Management"},
              {value: "Quality Assurance Department", label: "Quality Assurance"},
              {value: "Business Operations Department", label: "Business Operations"},
              {value: "Documentation Department", label: "Documentation"},
              {value: "Agile Department", label: "Agile"},
              {value: "IT Support Department", label: "IT Support"},
              {value: "Sales Department", label: "Sales"},
              {value: "Marketing Department", label: "Marketing"},
              {value: "Emerging Technologies Department", label: "Emerging Technologies"}
            ]}
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <SelectionBox 
            test={[
              {value: "", label: "Status"}, 
              {value: "active", label: "Active"},
              {value: "inactive", label: "Inactive"},
              {value: "on-leave", label: "On Leave"},
              {value: "remote", label: "Remote"}
            ]}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />         
          <SelectionBox 
            test={[
              {value: "", label: "Role"},
              {value: "developer", label: "Developer"},
              {value: "designer", label: "Designer"},
              {value: "manager", label: "Manager"},
              {value: "engineer", label: "Engineer"}
            ]}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <SelectionBox 
            test={[
              {value: "", label: "Tag"},
              {value: "leadership", label: "Leadership"},
              {value: "mentor", label: "Mentor"},
              {value: "innovator", label: "Innovator"},
              {value: "collaborator", label: "Collaborator"}
            ]}
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />      
          <button 
            className='bg-yellow-500 p-2 w-full border border-gray-300 rounded-xl hover:bg-yellow-600 transition-colors'
            onClick={handleClear}
          >
            <span className='text-white'>CLEAR</span>
          </button>
        </div>
      </div>

      {/* Employee Grid */}
      <div className="employees-grid">
        {currentEmployees.map((employee) => (
          <EmployeeCard 
            key={employee.id}
            employee={employee}
          />
        ))}
      </div>

      {/* No Results Message */}
      {sortedEmployees.length === 0 && (
        <div className="search-results-container visible">
          <div className="search-results-box">
            <div className="search-results-content">
              <h3 className="search-results-title">No employees found</h3>
              <p className="search-results-subtitle">
                Try adjusting your search criteria or filters
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Pagination - Only show if there are multiple pages */}
      {totalPages > 1 && (
        <div className="pagination-container">
          <div className="pagination">
            <button 
              className="pagination-button pagination-prev"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {renderPaginationNumbers().map((pageNumber, index) => (
              pageNumber === '...' ? (
                <span key={`ellipsis-${index}`} className="pagination-ellipsis">
                  ...
                </span>
              ) : (
                <button
                  key={pageNumber}
                  className={`pagination-number ${pageNumber === currentPage ? 'active' : ''}`}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {String(pageNumber).padStart(2, '0')}
                </button>
              )
            ))}

            <button 
              className="pagination-button pagination-next"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}