import "./App.css";
import { ThemeContext, useTheme } from "../context/themeContext";
import { LanguageContext, useLanguage } from "../context/languageContext";
import { useContext, useEffect } from "react";
import i18n from "i18next";
import styled from "styled-components";
import {
	isLanguage,
	LanguageAbbreviation,
	languages,
} from "../config/LanguageAbbreviation";
import { initReactI18next } from "react-i18next";
import { ThemeToggle, LanguageToggle } from "@joshuameiser/component-library";
import { Button } from "@joshuameiser/template-components";

i18n.use(initReactI18next).init({
	resources: {
		en: { translation: "" },
		de: { translation: "" },
	},
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: false },
});

const StyledThemeToggle = styled(ThemeToggle)`
	position: fixed;
	top: 16px;
	right: 16px;
`;

const StyledLanguageToggle = styled(LanguageToggle)`
	position: fixed;
	top: 16px;
	right: 80px;
`;

function App() {
	// When switching routes the page scroll position resets
	window.onbeforeunload = function () {
		window.scrollTo(0, 0);
	};

	const { theme, setTheme } = useContext(ThemeContext);
	const { language, setLanguage } = useContext(LanguageContext);

	return (
		<div className="App" data-theme={theme}>
			<StyledThemeToggle theme={theme} setTheme={setTheme} />
			<StyledLanguageToggle
				language={language}
				setLanguage={setLanguage}
				languages={languages}
			/>
			<div>
				<Button onClick={() => {}}>Test</Button>
			</div>
		</div>
	);
}

export default App;
