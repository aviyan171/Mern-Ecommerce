import { BsPeopleFill, BsSunrise } from 'react-icons/bs';
import Avatar from 'shared/components/Avatar';
import Popover from 'shared/components/Popover';
import Tooltip from 'shared/components/Tooltip';
import AdminAccountContent from './AdminAccountContent';

function AdminNavbar({ collapsibleWidth }: { collapsibleWidth: string }) {
  return (
    <div className={`${collapsibleWidth} bg-white`}>
      <div className="p-4">
        <div className="flex  justify-end items-center">
          <div className="flex gap-4 items-center">
            <Tooltip title="Contacts">
              <div className="cursor-pointer">
                <BsPeopleFill />
              </div>
            </Tooltip>
            <Tooltip title="Theme">
              <div className="cursor-pointer">
                <BsSunrise />
              </div>
            </Tooltip>
            <Popover triggerElement={<Avatar name="A" />}>
              <AdminAccountContent />
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;
