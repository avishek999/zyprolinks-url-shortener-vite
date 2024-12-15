import { Link2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Charts from "../charts/Charts";
import AllLinks from "../allLinks/AllLinks";


const data = [
  {
    heading: "Total Clicks",
    totalClicks: 1200,
    improvement: "20% better than last month",
  },
  {
    heading: "Active Links",
    totalClicks: 850,
    improvement: "15% better than last month",
  },
  {
    heading: "Unique Visitors",
    totalClicks: 500,
    improvement: "10% better than last month",
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="p-4 space-y-3 ">
      <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <Card key={index} className="px-6 ">
            <CardHeader className="flex justify-between flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm">{item.heading}</CardTitle>

              <Link2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>

            <CardContent>
              <div className="text-2xl font-bold">{item.totalClicks}</div>
              <p className="text-xs text-muted-foreground">
                {item.improvement}
              </p>
            </CardContent>
          </Card>
        ))}

      
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Overview</CardTitle>
              <CardContent>
                <Charts />
              </CardContent>
            </CardHeader>
          </Card>
            <AllLinks />
        </div>
    </div>
  );
};

export default Dashboard;
