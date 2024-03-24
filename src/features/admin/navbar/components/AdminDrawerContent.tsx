import { Link, useLocation } from 'react-router-dom';
import { adminRoutes } from 'shared/constants';

export function AdminDrawerContent({ onlyLogo }: { onlyLogo: boolean }) {
  const location = useLocation();
  const isSameRoute = (route: string) => route === location.pathname;
  return (
    <div className="overflow-hidden">
      <div className="mt-10 flex items-center">
        <img
          src="https://static.vecteezy.com/system/resources/previews/016/016/817/original/ecommerce-logo-free-png.png"
          className="h-[60px] w-[60px]"
        />
        {onlyLogo && <p className="italic">Abhiyan Mart</p>}
      </div>
      <div className="flex flex-col gap-2">
        {adminRoutes.map((i) => {
          return (
            <Link
              to={i.link}
              key={i.name}
              className={`flex items-center ${
                !onlyLogo ? 'justify-center ' : 'justify-start'
              }cursor-pointer mt-2 gap-2  ${
                onlyLogo ? 'pl-3' : 'pl-0'
              } hover:bg-slate-200 ${
                isSameRoute(i.link) ? 'bg-slate-200' : ''
              }`}
            >
              <img src={i.img} className="h-[40px] w-[40px]" />
              {onlyLogo && <p>{i.name}</p>}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
