import { GetAllUsers } from "@/actions/GetAllUsers";
import { Users } from "@/components/Users";
import { UserRole } from "@/generated/client/enums";
import { UsersTable } from "@/components/UsersTable";

export default async function TechnicianPage() {
  const technicians = await GetAllUsers(UserRole.technical);

  return (
    <Users title="Técnicos">
      <UsersTable data={technicians} />
    </Users>
  );
}
