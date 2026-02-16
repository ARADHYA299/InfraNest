import { OrgProvider } from "@/context/OrgContext";
import AppRoutes from "@/routes/AppRoutes";

export default function App() {
  return (
    <OrgProvider>
      <AppRoutes />
    </OrgProvider>
  );
}
