import { Outlet } from "@remix-run/react"

export default function DashboardSales() {
  return (
    <div>
      <h1>Dashboard sales, should be under dashboard layout.</h1>
      <Outlet />
    </div>
  )
}
