
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, Target, TrendingUp, CheckCircle } from 'lucide-react';
import ContributionForm from '@/components/ContributionForm';

const EmployeeDashboard = () => {
  const [showForm, setShowForm] = useState(false);

  // Mock data for past contributions
  const contributions = [
    {
      id: 1,
      category: 'Process Improvement',
      summary: 'Automated weekly report generation, saving 3 hours per week',
      date: '2024-06-15',
      status: 'Approved'
    },
    {
      id: 2,
      category: 'Innovation',
      summary: 'Developed new customer onboarding checklist',
      date: '2024-06-10',
      status: 'Under Review'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-blue-100 rounded-xl">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome to Your Performance Dashboard! 🎯
              </h1>
              <p className="text-gray-600 text-lg mt-2">
                Here, every little achievement counts! Track your growth, contribute to team success, and showcase the value you bring to the table.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Your Contributions Card */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-soft">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    Your Contributions
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    View your past performance submissions and keep track of your impact over time. Celebrate the milestones, big and small!
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contributions.map((contribution) => (
                  <div key={contribution.id} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-start justify-between mb-2">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                        {contribution.category}
                      </span>
                      <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                        contribution.status === 'Approved' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {contribution.status}
                      </span>
                    </div>
                    <p className="text-gray-900 font-medium mb-1">{contribution.summary}</p>
                    <p className="text-gray-500 text-sm">{contribution.date}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Submit New Contribution Card */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-soft">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <PlusCircle className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    Submit a New Contribution
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Did you accomplish something impactful today? Whether it's a small win or a big innovation, it's worth sharing!
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-4">
                <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-700 mb-4">
                    Submit your contribution, and let your manager know how you've made a difference.
                  </p>
                  <Button 
                    onClick={() => setShowForm(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-3 text-lg font-semibold transition-all duration-200 hover:scale-105 group"
                  >
                    <PlusCircle className="h-5 w-5 mr-2 group-hover:rotate-90 transition-transform duration-200" />
                    Submit Your Contribution ✍️
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Motivational CTA Section */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Keep up the great work!</h3>
            <p className="text-blue-100 mb-4">
              Your contributions make a real difference! Let's keep pushing forward and growing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 rounded-xl px-6">
                View Progress Report
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 rounded-xl px-6">
                Team Achievements
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contribution Form Modal */}
        {showForm && (
          <ContributionForm 
            isOpen={showForm} 
            onClose={() => setShowForm(false)} 
          />
        )}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
