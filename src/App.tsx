import Users from '@pages/Users';
import { themeClass } from '@core/styling';
import { QueryClientProvider } from '@tanstack/react-query';
import { AppQueryClient } from '@core/api/ReactQuery';
import clsx from 'clsx';

import { app } from './App.css';

function App() {
  return (
    <QueryClientProvider client={AppQueryClient}>
      <div className={clsx(app, themeClass)}>
        <Users />
      </div>
    </QueryClientProvider>
  );
}

export default App;
