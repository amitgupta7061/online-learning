import { SidebarTrigger } from "@/components/ui/sidebar"
import { UserButton } from "@clerk/nextjs"

const AppHeader = () => {
  return (
    <div className="px-4 py-3 flex justify-between items-center shadow-sm">
      <SidebarTrigger />
      <UserButton />
    </div>
  )
}

export default AppHeader
