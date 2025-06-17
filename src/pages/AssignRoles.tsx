
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, wrench } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AssignRoles = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header with back button */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/admin')}
            className="mb-4 p-2 hover:bg-white/50 rounded-xl"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Dashboard
          </Button>
          
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-purple-100 rounded-xl">
              <wrench className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Assign Roles 🛠️
              </h1>
              <p className="text-gray-600 text-lg mt-2">
                You're the decision-maker! Assign roles to ensure everyone knows their responsibilities and gets the recognition they deserve.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-soft">
          <CardHeader className="text-center py-8">
            <CardTitle className="text-2xl text-gray-900 mb-4">
              Role Assignment Center
            </CardTitle>
            <CardDescription className="text-lg text-gray-600 max-w-2xl mx-auto">
              Click here to assign roles like Employee, Manager, or Admin. 
              Every role plays a crucial part in driving success!
            </CardDescription>
          </CardHeader>
          
          <CardContent className="text-center pb-8">
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl px-8 py-3 text-lg font-semibold transition-all duration-200 hover:scale-105"
              >
                Start Assigning Roles
              </Button>
              
              <div className="mt-6 p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white">
                <h3 className="text-xl font-bold mb-2">
                  Assign roles and unlock your team's potential!
                </h3>
                <p className="text-purple-100">
                  Ready to empower your team with the right roles? Define responsibilities and watch your team thrive.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AssignRoles;
