import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Switch } from "../ui/switch";

const accountSettings = [
  {
    id: "follow",
    label: "Email me when someone follows me",
  },
  {
    id: "answer",
    label: "Email me when someone answers on my post",
  },
  {
    id: "mention",
    label: "Email me when someone mentions me",
  },
];

const applicationSettings = [
  {
    id: "launches",
    label: "New launches and projects",
  },
  {
    id: "changes",
    label: "Monthly product changes",
  },
  {
    id: "newsletter",
    label: "Subscribe to newsletter",
  },
];

export default function PlatformSettingsCard() {
  return (
    <Card className="h-full rounded-2xl border border-slate-200 bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-slate-800">
          Platform Settings
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-8">
        <div>
          <h3 className="mb-5 text-xs font-bold uppercase tracking-wider text-slate-500">
            Account
          </h3>

          <div className="space-y-5">
            {accountSettings.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <Switch id={item.id} />
                <label
                  htmlFor={item.id}
                  className="cursor-pointer text-sm text-slate-600"
                >
                  {item.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-bold uppercase tracking-wider text-slate-500">
            Application
          </h3>

          <div className="space-y-5">
            {applicationSettings.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <Switch id={item.id} />
                <label
                  htmlFor={item.id}
                  className="cursor-pointer text-sm text-slate-600"
                >
                  {item.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
