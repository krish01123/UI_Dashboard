import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { PageHeader } from "../Home/PageHeader";

interface Author {
  id: number;
  name: string;
  email: string;
  avatar: string;
  function: string;
  position: string;
  status: "Online" | "Offline";
  employed: string;
}

interface Props {
  authors: Author[];
}

function StatusBadge({ status }: { status: "Online" | "Offline" }) {
  return (
    <Badge
      className={`px-3 py-1 text-xs font-medium text-white ${
        status === "Online"
          ? "bg-green-500 hover:bg-green-500"
          : "bg-slate-400 hover:bg-slate-400"
      }`}
    >
      {status}
    </Badge>
  );
}

export default function AuthorTable({ authors }: Props) {
  return (
    <>
      <div className="w-full">
        <PageHeader
          title="Table"
          items={[{ label: "Pages", href: "/" }, { label: "Table" }]}
        />
        <Card className="rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
          <h2 className="mb-6 text-xl font-bold text-slate-800 sm:text-2xl lg:text-3xl">
            Authors Table
          </h2>

          <div className="w-full overflow-x-auto">
            <Table className="min-w-[760px]">
              <TableHeader>
                <TableRow>
                  <TableHead>Author</TableHead>
                  <TableHead>Function</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Employed</TableHead>
                  <TableHead className="text-right"></TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {authors.map((author) => (
                  <TableRow key={author.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <img
                          src={author.avatar}
                          alt={author.name}
                          width={48}
                          height={48}
                          className="rounded-xl object-cover"
                        />
                        <div>
                          <p className="font-semibold text-slate-800">
                            {author.name}
                          </p>
                          <p className="text-xs text-slate-500 sm:text-sm">
                            {author.email}
                          </p>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell>
                      <p className="font-bold text-slate-700">
                        {author.function}
                      </p>
                      <p className="text-xs text-slate-500">
                        {author.position}
                      </p>
                    </TableCell>

                    <TableCell>
                      <StatusBadge status={author.status} />
                    </TableCell>

                    <TableCell className="font-medium text-slate-700">
                      {author.employed}
                    </TableCell>

                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        className="cursor-pointer text-slate-500 hover:text-blue-600"
                      >
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </>
  );
}
