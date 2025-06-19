import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Avatar } from './ui/avatar';
import { Home, Users, Calendar, FileText, BarChart, Settings } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100 p-4">
      <div className="w-20 bg-[#1F968B] shadow-2xl rounded-2xl flex flex-col items-center py-6 space-y-8 m-2">
        <Home className="text-white" />
        <Users className="text-white" />
        <Calendar className="text-white" />
        <FileText className="text-white" />
        <BarChart className="text-white" />
        <Settings className="text-white" />
      </div>
      <div className="flex-1 p-8 m-2">
        <div className="flex justify-between items-center mb-6 rounded-2xl">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Input placeholder="Pesquisar cliente..." className="w-64 rounded-2xl"/>
            <Avatar className="rounded-2xl">JM</Avatar>
          </div>
        </div>
        <Card className="rounded-2xl shadow-md mb-6">
          <CardContent className="p-6 space-y-6 rounded-2xl">
            <div className="flex items-center space-x-6 rounded-2xl">
              <Avatar className="w-16 h-16 text-xl rounded-2xl">CL</Avatar>
              <div>
                <h2 className="text-xl font-bold">Carlos Lima</h2>
                <p className="text-gray-600">carlos@mail.com</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
