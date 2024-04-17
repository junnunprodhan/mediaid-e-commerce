import Sidebar from "@/components/dashboard/sidebar";
import TopBar from "@/components/dashboard/topbar";

function Layout({ children }) {
    return (
        <>
            <Sidebar />
            <div className="sm:ml-64">
                <TopBar />
                <div className="px-4">
                    {children}
                </div>
            </div>
        </>
    );
}

export default Layout;
