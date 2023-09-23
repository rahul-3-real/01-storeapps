const Sidebar = ({ isOpen }) => {
    return (
        <aside
            className={`bg-zinc-900 text-white w-64 min-h-screen p-5 border-r-2 border-gray-500 ${isOpen ? 'block' : 'hidden'
                }`}
        >
            <h1 className="font-mono text-xl font-semibold">Putler</h1>
        </aside>
    );
};

export default Sidebar;
