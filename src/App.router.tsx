import { Redirect, Route } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import DailyPage from './pages/DailyPage';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';

function AppRouter() {
  return (
    <>
      <HomePage {...({} as any)} />
      <Route exact path="/daily">
        <DailyPage />
      </Route>
      <Route exact path="/settings/about">
        <AboutPage />
      </Route>
      <Route exact path="/settings">
        <SettingsPage />
      </Route>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
    </>
  );
}

export { AppRouter };
