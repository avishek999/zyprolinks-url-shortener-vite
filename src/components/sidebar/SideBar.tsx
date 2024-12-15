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
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BarChart3, Link2, LogOut } from "lucide-react";
import DarkModeButton from "../DarkModeButton/DarkModeButton";
import { Link } from "react-router-dom";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex  flex-row items-center ">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="scroll-m-20 text-sm font-semibold tracking-tight text-blue-400">
            Avishek
          </h4>
          <p className="text-[12px] text-gray-400">Dashboard</p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/dashboard">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Analytics
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/links">
                    <Link2 className="mr-2 h-4 w-4" />
                    Links
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild  className="flex items-center text-gray-600 hover:text-red-500 w-full text-left">
                  <Link to="/links">
                  <LogOut className="mr-2 h-5 w-5 text-red-500" />
                    Log out
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <div className="place-self-start">
                <DarkModeButton />
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        </SidebarGroup>

      
      </SidebarContent>
    </Sidebar>
  );
}
