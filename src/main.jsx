import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./layout";
import Homepage from "./pages/Homepage";
import IntroPage from "./pages/IntroPage";
import ReasonPage from "./pages/ReasonPage";
import TimelinePage from "./pages/TimelinePage";
import QuestionPage from "./pages/QuestionPage";
import InformationPage from "./pages/InformationPage";
import FormPage from "./pages/FormPage";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Homepage />} />
					<Route path="/intro" element={<IntroPage />} />
					<Route path="/reason" element={<ReasonPage />} />
					<Route path="/timeline" element={<TimelinePage />} />
					<Route path="/question" element={<QuestionPage />} />
					<Route path="/information" element={<InformationPage />} />
					<Route path="/form" element={<FormPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
