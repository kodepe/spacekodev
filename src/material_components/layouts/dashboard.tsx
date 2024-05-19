"use client";
import { SKSidenav } from "./components/sidenav";
import routes from "./routes";
import { SKDashboardNavbar } from "./components/dashboardNavbar";
import Configurator from "./components/configurator";
import { BaseProps } from "@/types/base";
import Footer from "./components/footer";
import { ConfigurationButton } from "./components/configurationButton";

export function SKDashboard({ children }: BaseProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <SKSidenav brandName={"Template"} routes={routes} />
      <div className="p-4 xl:ml-80">
        <SKDashboardNavbar />
        <Configurator />
        <ConfigurationButton />
        {children}
        <div className="text-blue-gray-600">
          <Footer
            routes={routes}
            brandLink="https://www.aquicito.com"
            brandName="Aquicito"
          />
        </div>
      </div>
    </div>
  );
}

export default SKDashboard;
