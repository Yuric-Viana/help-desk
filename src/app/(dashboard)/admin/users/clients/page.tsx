import { GetAllUsers } from "@/actions/GetAllUsers";
import { Users } from "@/components/Users";
import { UserRole } from "@/generated/client/enums";
import { UsersTable } from "@/components/UsersTable";

export default async function TechnicianPage() {
  const clients = await GetAllUsers(UserRole.client);

  return (
    <Users title="Clientes">
      <UsersTable data={clients} />
    </Users>
  );
}
