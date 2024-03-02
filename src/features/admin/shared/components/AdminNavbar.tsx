import { BsPeopleFill, BsSearch, BsSunrise } from 'react-icons/bs';
import Avatar from 'shared/components/Avatar';
import Tooltip from 'shared/components/Tooltip';

function AdminNavbar({ collapsibleWidth }: { collapsibleWidth: string }) {
  return (
    <div className={collapsibleWidth}>
      <div className="p-4 text-right">
        <div className="flex  justify-between items-center">
          <BsSearch />
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
            <Avatar name="A" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;
