import React, { useContext } from "react";
import { UserFormProvider } from "../contexts/UserFormContextProvider";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import { List, ListItem } from "material-ui/List";

const styles = {
	button: {
		margin: 15,
	},
};

const Confirm = () => {
	const { firstName, lastName, email, occupation, city, bio, nextStep, preStep } = useContext(UserFormProvider);

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
				<AppBar title="Confirm User Data" />
				<List>
					<ListItem primaryText="First Name" secondaryText={firstName} />
					<ListItem primaryText="Last Name" secondaryText={lastName} />
					<ListItem primaryText="Email" secondaryText={email} />
					<ListItem primaryText="Occupation" secondaryText={occupation} />
					<ListItem primaryText="City" secondaryText={city} />
					<ListItem primaryText="Bio" secondaryText={bio} />
				</List>
				<br />
				<RaisedButton label="Confirm & Continue" primary={true} style={styles.button} onClick={continueForm} />
				<RaisedButton label="Back" primary={false} style={styles.button} onClick={backForm} />
			</MuiThemeProvider>
		</>
	);
};

export default Confirm;
