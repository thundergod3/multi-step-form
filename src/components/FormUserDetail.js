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

const FormUserDetail = () => {
	const { nextStep, handleChange, firstName, lastName, email } = useContext(UserFormProvider);

	const continueForm = (e) => {
		e.preventDefault();
		nextStep();
	};

	return (
		<>
			<MuiThemeProvider>
				<AppBar title="Enter User Details" />
				<TextField
					hintText="Enter Your First Name"
					floatingLabelText="First Name"
					onChange={(e) => handleChange(e, "firstName")}
					defaultValue={firstName}
				/>
				<br />
				<TextField
					hintText="Enter Your Last Name"
					floatingLabelText="Last Name"
					onChange={(e) => handleChange(e, "lastName")}
					defaultValue={lastName}
				/>
				<br />
				<TextField
					hintText="Enter Your Email"
					floatingLabelText="Email"
					onChange={(e) => handleChange(e, "email")}
					defaultValue={email}
				/>
				<br />
				<RaisedButton label="Continue" primary={true} style={styles.button} onClick={continueForm} />
			</MuiThemeProvider>
		</>
	);
};

export default FormUserDetail;
