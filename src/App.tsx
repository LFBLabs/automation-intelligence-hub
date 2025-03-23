
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ArticleAutoGPT from "./pages/ArticleAutoGPT";
import LangchainVsLlamaIndex from "./pages/LangchainVsLlamaIndex";
import ConversationalAgents from "./pages/ConversationalAgents";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/article/autogpt" element={<ArticleAutoGPT />} />
          <Route path="/article/langchain-vs-llamaindex" element={<LangchainVsLlamaIndex />} />
          <Route path="/article/conversational-agents" element={<ConversationalAgents />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
