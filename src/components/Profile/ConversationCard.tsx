import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle } from "../ui/card";

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

export default function ConversationCard({ authors }: Props) {
  return (
    <Card className="h-full rounded-2xl p-4 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Conversation</CardTitle>
      </CardHeader>

      <div className="space-y-5">
        {authors.map((author) => (
          <div
            key={author.id}
            className="flex items-center justify-between gap-3"
          >
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <img
                src={author.avatar}
                alt={author.name}
                className="h-12 w-12 rounded-xl object-cover"
              />

              <div className="min-w-0">
                <h3 className="truncate text-sm font-bold text-slate-800">
                  {author.name}
                </h3>

                <p className="truncate text-xs text-slate-500">
                  {author.email}
                </p>
              </div>
            </div>

            <Button
              variant="ghost"
              className="cursor-pointer h-auto p-0 text-xs font-bold uppercase text-cyan-400 hover:bg-transparent hover:text-cyan-500"
            >
              Reply
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}
