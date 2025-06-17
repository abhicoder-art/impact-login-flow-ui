
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, TrendingUp, Settings } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to Your Admin Dashboard 👋
          </h1>
          <p className="text-gray-600 text-lg">
            You're the backbone of this system! Manage teams, review submissions, and keep things running smoothly.
          </p>
        </div>

        {/* Main Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Manage Users Card */}
          <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-soft">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    Manage Users
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4">
                Add, remove, and assign roles to your team members. Everyone's performance starts with a well-managed team!
              </CardDescription>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2 transition-colors">
                Manage Team
              </Button>
            </CardContent>
          </Card>

          {/* View Insights Card */}
          <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-soft">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    View Insights
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4">
                Keep track of employee contributions and monitor overall performance metrics. Empower your team to thrive!
              </CardDescription>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-2 transition-colors">
                View Analytics
              </Button>
            </CardContent>
          </Card>

          {/* Team & Role Assignment Card */}
          <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-soft">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Settings className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    Team & Role Assignment
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4">
                Assign managers and team members. Build the right structure for a high-performing team!
              </CardDescription>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-2 transition-colors">
                Assign Roles
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action Section */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Let's get started!</h3>
            <p className="text-blue-100 mb-6">Select an action to begin managing your team and improving performance.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 rounded-xl px-6">
                Quick Setup Guide
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 rounded-xl px-6">
                Watch Tutorial
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
