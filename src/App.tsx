import { Routes } from 'react-router-dom';
import { AuthRoutes } from "./features/auth/routes/routes"
import { DiplomasRoute } from './features/diploma/routes/routes';
import { ExamRoutes } from './features/exam/routes/routes';

export function App() {
  return (
    <Routes>
      {AuthRoutes}
      {DiplomasRoute}
      {ExamRoutes}
    </Routes>
  )
}
