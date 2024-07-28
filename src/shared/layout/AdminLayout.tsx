import { AdminDrawerContent } from 'features/admin/navbar/components/AdminDrawerContent'
import AdminNavbar from 'features/admin/navbar/components/AdminNavbar'
import { useCheckIsAdmin } from 'features/auth/hooks/useCheckIsAdmin'

import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Drawer from 'shared/components/Drawer'
import { UI_ROUTES } from 'shared/constants'

export const AdminLayout = () => {
  const [collapsible, setCollapsible] = useState(true)

  const calculateCollapsible = () => {
    return collapsible ? `fixed w-[calc(100%-75px-28px)] top-0 z-[1] ` : `fixed w-[calc(100%-280px-28px)] top-0 z-[1]`
  }

  const isAdmin = useCheckIsAdmin()

  if (!isAdmin) return <Navigate to={UI_ROUTES.home} />

  return (
    <div>
      <Drawer collapsible={collapsible} handleCollapsible={() => setCollapsible(!collapsible)}>
        <AdminDrawerContent onlyLogo={!collapsible} />
      </Drawer>

      <div
        className={` ${collapsible ? `ml-COLLAPSIBLE_DRAWER_WIDTH` : `ml-DRAWER_WIDTH`} transition-[margin-left] duration-500 ease-in-out`}
      >
        <div className="px-7 py-4">
          <AdminNavbar collapsibleWidth={calculateCollapsible()} key={calculateCollapsible()} />
        </div>
        <div className="px-4">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
