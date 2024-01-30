import { Outlet, useParams } from "@remix-run/react"

export default function DashboardId() {

  const {id} = useParams()

  return (
    <div>
      <h1>Id page: {id}</h1>
      <Outlet />
    </div>
  )
}
