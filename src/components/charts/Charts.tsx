"use client"

import { ChartContainer, ChartTooltip, type ChartConfig } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"

// Example of the data structure
const chartData = [
  { month: "January", desktop: 0, mobile: 0 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
].map(item => ({
  ...item,
  total: item.desktop + item.mobile
}))

// Chart config definition
const chartConfig = {
  total: {
    label: "Total Users",
    color: "rgb(96 165 250)",
  },
} satisfies ChartConfig

// Type definition for the props of ChartTooltipContent
interface ChartTooltipContentProps {
  fields: string[];
  formatter: (value: any, name: string) => string[];
}

const ChartTooltipContent: React.FC<ChartTooltipContentProps> = ({ fields, formatter }) => {
  return (
    <div>
      {fields.map((field, idx) => {
        const formattedValue = formatter(field, field);
        return (
          <div key={idx}>
            {formattedValue.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
        );
      })}
    </div>
  );
};

const Charts = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <ChartContainer config={chartConfig} className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
              width={50}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  fields={['total']}
                  formatter={(value, name) => {
                    if (name === 'total') {
                      const item = chartData.find(d => d.total === value)
                      return [`Total: ${value}`, `Desktop: ${item?.desktop}`, `Mobile: ${item?.mobile}`]
                    }
                    return [value]
                  }}
                />
              }
            />
            <Bar dataKey="total" fill="var(--color-total)" radius={[4, 4, 0, 0]} maxBarSize={60} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}

export default Charts
