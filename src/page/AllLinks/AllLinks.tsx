import AllLinks from "@/components/allLinks/AllLinks";
import { AppSidebar } from "@/components/sidebar/SideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const AllLinksPage = () => {
  return (
    <SidebarProvider className="block">
      <div className="flex h-screen overflow-hidden">
        <AppSidebar />
        <main className="flex-1 overflow-y-auto bg-background">
          <SidebarTrigger />
          <div className="w-full flex justify-center">

          <AllLinks />
          </div> 
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AllLinksPage;
