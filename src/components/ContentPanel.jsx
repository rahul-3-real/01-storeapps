import { HiOutlineBars3 } from 'react-icons/hi2';
import DragAndDropCards from './DragAndDropCards';

const ContentPanel = ({ toggleSidebar }) => {
    return (
        <main
            className={`flex-grow p-4 transition-all ml-0 bg-neutral-800`}
        >
            <div className="bg-zinc-900 p-4">
                <button onClick={toggleSidebar} className='text-white'>
                    <HiOutlineBars3 />
                </button>
            </div>

            <div className="py-4">
                <DragAndDropCards />
            </div>
        </main>
    );
};

export default ContentPanel;
