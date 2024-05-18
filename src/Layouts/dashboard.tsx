import {
  setOpenConfigurator,
  useMaterialTailwindController,
} from "@/context/MaterialTailwind";
import Sidenav from "./components/sidenav";
import routes from "./routes";
import DashboardNavbar from "./components/dashboardNavbar";
import Configurator from "./components/configurator";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { IconButton } from "@material-tailwind/react";
import { BaseProps } from "@/types/base";
import Footer from "./components/footer";

export function Dashboard({ children }: BaseProps) {
  const [controller, dispatch] = useMaterialTailwindController();

  return (
    <div className="min-h-screen bg-light">
      <Sidenav brandName={"Template"} routes={routes} />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
        <Configurator />
        <IconButton
          size="lg"
          color="white"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <Cog6ToothIcon className="h-5 w-5" />
        </IconButton>
        {children}
        <div className="text-blue-gray-600">
          <Footer
            routes={routes[0].pages}
            brandLink="https://www.creative-tim.com"
            brandName="Creative Tim"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
