"use client";
import { Button } from "@/components/ui/button"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import { Book, Compass, LayoutDashboard, PencilRulerIcon, UserCheck2Icon, WalletCards } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import AddNewCourseDialog from "./AddNewCourseDialog";

const SidebarOption = [
    {
        title:"Dashboard",
        icon: LayoutDashboard,
        path: "/workspace"
    },
    {
        title:"My Learning",
        icon: Book,
        path: "/workspace/my-course"
    },
    {
        title:"Explore Course",
        icon: Compass,
        path: "/workspace/explore"
    },
    {
        title:"AI Tools",
        icon: PencilRulerIcon,
        path: "/workspace/ai-tools"
    },
    {
        title:"Billing",
        icon: WalletCards,
        path: "/workspace/billing"
    },
    {
        title:"Profile",
        icon: UserCheck2Icon,
        path: "/workspace/profile"
    },

]

const AppSidebar = () => {

    const path = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <Image src={'/logo.svg'} alt="logo" width={130} height={110} className="w-full p-2"/>
      </SidebarHeader >
      <SidebarContent>
      <SidebarGroup>
        <AddNewCourseDialog>
            <Button>Create New Course</Button>
        </AddNewCourseDialog>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupContent>
            <SidebarMenu className="gap-3">
                {SidebarOption.map((item, index) => (
                    <SidebarMenuItem key={index}>
                        <SidebarMenuButton asChild className="p-5">
                            <Link href={item.path} className={`text-[17px] ${path.includes(item.path) && 'text-white bg-[#1e1e29]'}`}>
                                <item.icon className="h-7 w-7"/>
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar
