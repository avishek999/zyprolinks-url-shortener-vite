import { AppSidebar } from "@/components/sidebar/SideBar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

const AllLinks = () => {
  return (
    <SidebarProvider className="flex-col lg:flex-row">
      <div className="flex h-screen overflow-hidden">
        <AppSidebar />
        <main className="flex-1 overflow-y-auto bg-background">
          <SidebarTrigger />
        <AllLinks />
        </main>
      </div>
    </SidebarProvider>
  )
}

export default AllLinks