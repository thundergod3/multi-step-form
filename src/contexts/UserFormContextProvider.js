import React, { createContext, useState } from "react";

const UserFormProvider = createContext();

const UserFormContextProvider = (props) => {
	let [step, setStep] = useState(1);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [occupation, setOccupation] = useState("");
	const [city, setCity] = useState("");
	const [bio, setBio] = useState("");

	const nextStep = () => {
		setStep((step += 1));
	};

	const preStep = () => {
		setStep((step -= 1));
	};

	const handleChange = (e, input) => {
		switch (input) {
			case "firstName": {
				console.log("a");
				return setFirstName(e.target.value);
			}
			case "lastName": {
				return setLastName(e.target.value);
			}
			case "email": {
				return setEmail(e.target.value);
			}
			case "occupation": {
				return setOccupation(e.target.value);
			}
			case "city": {
				return setCity(e.target.value);
			}
			case "bio": {
				return setBio(e.target.value);
			}
		}
	};

	return (
		<UserFormProvider.Provider
			value={{
				step,
				firstName,
				lastName,
				email,
				occupation,
				city,
				bio,
				nextStep,
				preStep,
				handleChange,
			}}>
			{props.children}
		</UserFormProvider.Provider>
	);
};

export { UserFormContextProvider, UserFormProvider };
