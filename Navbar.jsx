import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { useOrg } from "@/context/Orgcontext";
import { Link } from "react-router-dom";

function Navbar() {
  const { orgs, currentOrg, setCurrentOrg } = useOrg();

  return (
    <header className="h-16 w-full border-b flex items-center justify-between px-6">
      <div className="text-lg font-semibold">
        <Link to="/dashboard">MultiTenant SaaS</Link>
      </div>

      <div className="flex items-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline">{currentOrg?.name}</Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            {orgs.map((org) => (
              <DropdownMenuItem key={org.id} onClick={() => setCurrentOrg(org)}>
                {" "}
                {org.name}
              </DropdownMenuItem>
            ))}

            <DropdownMenuSeparator />

            <DropdownMenuItem className="font-medium">
              + Create New Organisation
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost">Docs</Button>
      </div>
    </header>
  );
}

export default Navbar;
