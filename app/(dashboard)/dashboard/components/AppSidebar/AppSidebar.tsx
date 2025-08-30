import { Calendar, FlaskConical, Home, Inbox, ScrollText, Search, Settings, WalletCards } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  
} from "@/components/ui/sidebar"
import { Logo } from "@/components/Shared"
import { BtnCreateInterview } from "@/components/Shared/BtnCreateInterview"
import { AccessStatus } from "./AccessStatus";

const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Interviews",
    url: "#",
    icon: FlaskConical,
  },
  {
    title: "All Interviews",
    url: "#",
    icon: ScrollText,
  },
  {
    title: "Payments",
    url: "#",
    icon: WalletCards,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="text-white">
      <SidebarHeader>
        <Logo /> 
      </SidebarHeader>
      <SidebarContent>

        <SidebarGroup>
            <BtnCreateInterview />
        </SidebarGroup>
          
       
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild size="lg">
                    <a href={item.url}>
                      <item.icon className="w-10 h-10 shrink-0 text-3xl" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <AccessStatus />
      </SidebarFooter>
        
    </Sidebar>
  )
}