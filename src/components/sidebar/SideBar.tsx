import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BarChart3, Link2, Settings, Users } from "lucide-react";
import DarkModeButton from "../DarkModeButton/DarkModeButton";

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
                  <a href="/">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Analytics
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/links">
                    <Link2 className="mr-2 h-4 w-4" />
                    Links
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/users">
                    <Users className="mr-2 h-4 w-4" />
                    Users
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="place-self-start">
          <DarkModeButton />
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
