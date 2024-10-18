import React, { useEffect, useState } from 'react';
import './ReportsLayout.css';

const ReportsLayout = () => {
  const [reports, setReports] = useState([]);

  // Fetch reports data (replace with your actual API logic)
  useEffect(() => {
    const fetchReports = async () => {
      // Dummy data for now
      const mockReports = [
        { id: 1, doctorName: 'Dr. John Smith', speciality: 'Cardiology', reportUrl: '/reports/report1.pdf' },
        { id: 2, doctorName: 'Dr. Emily Davis', speciality: 'Dermatology', reportUrl: '/reports/report2.pdf' },
        { id: 3, doctorName: 'Dr. Robert Brown', speciality: 'Neurology', reportUrl: '/reports/report3.pdf' },
      ];
      setReports(mockReports);
    };

    fetchReports();
  }, []);

  // Function to handle viewing a report (replace with actual logic)
  const handleViewReport = (reportUrl) => {
    window.open(reportUrl, '_blank');
  };

  // Function to handle downloading a report (replace with actual logic)
  const handleDownloadReport = (reportUrl) => {
    const link = document.createElement('a');
    link.href = reportUrl;
    link.setAttribute('download', 'report.pdf'); // or dynamically generate the report name
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  return (
    <div className="reports-container">
      <h2>Your Reports</h2>
      <table className="reports-table">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>View Report</th>
            <th>Download Report</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={report.id}>
              <td>{index + 1}</td> {/* Serial Number */}
              <td>{report.doctorName}</td>
              <td>{report.speciality}</td>
              <td>
                <button onClick={() => handleViewReport(report.reportUrl)} className="btn-view">
                  View
                </button>
              </td>
              <td>
                <button onClick={() => handleDownloadReport(report.reportUrl)} className="btn-download">
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsLayout;
