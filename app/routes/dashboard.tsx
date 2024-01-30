import { Outlet } from "@remix-run/react"

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard layout</h1>
      <Outlet />
    </div>
  )
}
