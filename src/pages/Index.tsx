
import React, { useState } from 'react';
import AuthContainer from '@/components/AuthContainer';

type AuthMode = 'signup' | 'login' | 'forgot-password';

const Index = () => {
  const [authMode, setAuthMode] = useState<AuthMode>('signup');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <AuthContainer mode={authMode} onModeChange={setAuthMode} />
      </div>
    </div>
  );
};

export default Index;
