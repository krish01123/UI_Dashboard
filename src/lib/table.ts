export async function getAuthors() {
  const res = await fetch("https://dummyjson.com/users?limit=10", {
    cache: "no-store",
  });

  const data = await res.json();

  const roles = [
    {
      function: "Organization",
      position: "Manager",
    },
    {
      function: "Developer",
      position: "Programmer",
    },
    {
      function: "Projects",
      position: "Executive",
    },
  ];

  return data.users.map((user: any, index: number) => ({
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    email: user.email,
    avatar: `https://i.pravatar.cc/150?u=${user.id}`,
    function: roles[index % 3].function,
    position: roles[index % 3].position,
    status: index % 2 === 0 ? "Online" : "Offline",
    employed: `${String(index + 10).padStart(2, "0")}/06/21`,
  }));
}
