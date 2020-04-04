import React, { useContext } from "react";
import { UserFormProvider } from "../contexts/UserFormContextProvider";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const styles = {
	button: {
		margin: 15,
	},
};

const FormPersonalDetail = () => {
	const { nextStep, preStep, handleChange, occupation, city, bio } = useContext(UserFormProvider);

	const continueForm = (e) => {
		e.preventDefault();
		nextStep();
	};

	const backForm = (e) => {
		e.preventDefault();
		preStep();
	};

	return (
		<>
			<MuiThemeProvider>
				<AppBar title="Enter Personal Details" />
				<TextField
					hintText="Enter Your Occupation"
					floatingLabelText="Occupation"
					onChange={(e) => handleChange(e, "occupation")}
					defaultValue={occupation}
				/>
				<br />
				<TextField
					hintText="Enter Your City"
					floatingLabelText="City"
					onChange={(e) => handleChange(e, "city")}
					defaultValue={city}
				/>
				<br />
				<TextField
					hintText="Enter Your Bio"
					floatingLabelText="Bio"
					onChange={(e) => handleChange(e, "bio")}
					defaultValue={bio}
				/>
				<br />
				<RaisedButton label="Continue" primary={true} style={styles.button} onClick={continueForm} />
				<RaisedButton label="Back" primary={false} style={styles.button} onClick={backForm} />
			</MuiThemeProvider>
		</>
	);
};

export default FormPersonalDetail;
