import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QuizApp from "./components/quiz-app";
import QuizProvider from "./context/quiz-provider";

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <QuizProvider>
          <QuizApp />
        </QuizProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
