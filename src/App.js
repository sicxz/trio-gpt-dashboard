import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const yearlyData = [
  { year: 'Year 1', hours: 687.5, credits: 19.75, requestedCredits: 10 },
  { year: 'Year 2', hours: 260, credits: 7.47, requestedCredits: 5 },
  { year: 'Year 3', hours: 260, credits: 7.47, requestedCredits: 5 },
  { year: 'Year 4', hours: 260, credits: 7.47, requestedCredits: 5 },
  { year: 'Year 5', hours: 260, credits: 7.47, requestedCredits: 5 },
];

const year1Breakdown = [
  { quarter: 'Q1', hours: 95 },
  { quarter: 'Q2', hours: 122.5 },
  { quarter: 'Q3', hours: 165 },
  { quarter: 'Q4', hours: 305 },
];

const gptModels = [
  { name: 'AP-GPT', value: 25 },
  { name: 'DL-GPT', value: 25 },
  { name: 'CD-GPT', value: 25 },
  { name: 'FL-GPT', value: 25 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
  const [activeYear, setActiveYear] = useState('Year 1');

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">TRIO GPT Tools Project Dashboard</h1>
      
      <Tabs defaultValue="yearly">
        <TabsList>
          <TabsTrigger value="yearly">Yearly Overview</TabsTrigger>
          <TabsTrigger value="year1">Year 1 Breakdown</TabsTrigger>
          <TabsTrigger value="gptModels">GPT Models</TabsTrigger>
        </TabsList>
        
        <TabsContent value="yearly">
          <Card>
            <CardHeader>
              <CardTitle>Yearly Project Hours and Credits</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={yearlyData}>
                  <XAxis dataKey="year" />
                  <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                  <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="hours" fill="#8884d8" name="Project Hours" />
                  <Bar yAxisId="right" dataKey="credits" fill="#82ca9d" name="Equivalent Credits" />
                  <Bar yAxisId="right" dataKey="requestedCredits" fill="#ffc658" name="Requested Credits" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="year1">
          <Card>
            <CardHeader>
              <CardTitle>Year 1 Quarterly Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={year1Breakdown}>
                  <XAxis dataKey="quarter" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="hours" fill="#8884d8" name="Hours" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="gptModels">
          <Card>
            <CardHeader>
              <CardTitle>GPT Models Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={gptModels}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {gptModels.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Key Points</h2>
        <ul className="list-disc pl-5">
          <li>The project spans 5 years, aligning with the TRIO SSS grant cycle.</li>
          <li>Year 1 requires significantly more hours (687.5) compared to subsequent years (260 each).</li>
          <li>The requested course release credits are lower than the estimated project time, indicating a conservative approach.</li>
          <li>Four GPT models are proposed: Academic Planning (AP-GPT), Daily Life Management (DL-GPT), Career Development (CD-GPT), and Financial Literacy (FL-GPT).</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;