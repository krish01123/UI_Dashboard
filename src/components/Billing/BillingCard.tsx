"use client";

import { Pencil, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface BillingUser {
  id: number;
  name: string;
  company: string;
  email: string;
  vat: string;
}

interface BillingCardProps {
  users: BillingUser[];
}

export default function BillingCard({ users }: BillingCardProps) {
  return (
    <Card className="h-full rounded-2xl border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Billing Information
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {users.map((user) => (
          <Card
            key={user.id}
            className="rounded-xl border-0 bg-slate-50 p-5 shadow-sm"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-4 flex-1">
                <h3 className="text-lg font-semibold text-slate-700">
                  {user.name}
                </h3>

                <div className="space-y-2 text-sm">
                  <p className="text-slate-500">
                    <span className="font-semibold">Company Name: </span>
                    <span className="text-slate-600">{user.company}</span>
                  </p>

                  <p className="text-slate-500 break-all">
                    <span className="font-semibold">Email Address: </span>
                    <span className="text-slate-600">{user.email}</span>
                  </p>

                  <p className="text-slate-500">
                    <span className="font-semibold">VAT Number: </span>
                    <span className="text-slate-600">{user.vat}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start lg:self-center">
                <Button
                  variant="ghost"
                  className="cursor-pointer text-red-500 hover:bg-red-50 hover:text-red-600"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  DELETE
                </Button>

                <Button
                  variant="ghost"
                  className="cursor-pointer text-green-700 hover:bg-green-100"
                >
                  <Pencil className="mr-2 h-4 w-4" />
                  EDIT
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}
