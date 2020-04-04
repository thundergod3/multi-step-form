import React, { useContext } from "react";
import "./App.css";
import { UserFormProvider } from "./contexts/UserFormContextProvider";
import FormUserDetail from "./components/FormUserDetail";
import FormPersonalDetail from "./components/FormPersonalDetail";
import Confirm from "./components/Confirm";
import Success from "./components/Success";

function App() {
	const { step } = useContext(UserFormProvider);

	switch (step) {
		case 1: {
			return <FormUserDetail />;
		}
		case 2: {
			return <FormPersonalDetail />;
		}
		case 3: {
			return <Confirm />;
		}
		case 4: {
			return <Success />;
		}
	}
}

export default App;
