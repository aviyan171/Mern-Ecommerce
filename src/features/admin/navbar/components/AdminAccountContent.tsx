import CustomerInfo from 'shared/components/CustomerInfo';
import Divider from 'shared/components/Divider';

const AdminAccountContent = () => {
  return (
    <div className="p-3 ">
      <CustomerInfo
        name="Abhiyan Upreti"
        additionalInfo="abhiyanupreti76@gmail.com"
        img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e0ab53af-37d7-44ff-846f-868de437ef1d/dg94erf-83e3c25f-d11e-4bb1-a658-7c87d7d2e54a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UwYWI1M2FmLTM3ZDctNDRmZi04NDZmLTg2OGRlNDM3ZWYxZFwvZGc5NGVyZi04M2UzYzI1Zi1kMTFlLTRiYjEtYTY1OC03Yzg3ZDdkMmU1NGEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yZGsRd_kqzgzw_Eto7Lj-oAL3HVTfv_iAKbpRLL8QwI"
      />
      <div className="py-3">
        <Divider />
      </div>
      <p className="cursor-pointer text-sm" onClick={() => alert('Signed Out')}>
        Sign Out
      </p>
    </div>
  );
};

export default AdminAccountContent;
