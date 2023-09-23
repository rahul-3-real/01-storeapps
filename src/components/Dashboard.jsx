import { useState } from 'react';
import Sidebar from './Sidebar';
import ContentPanel from './ContentPanel';

const Dashboard = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen">
            <Sidebar isOpen={isSidebarOpen} />
            <ContentPanel isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
};

export default Dashboard;
