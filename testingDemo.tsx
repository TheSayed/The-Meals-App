// import React from "react";
// import { render, screen } from "@testing-library/react-native";
// import App from "./App";

// describe("App", () => {
//   test("App rendered correctly", () => {
//     render(<App />);

//     expect(screen.getByLabelText("Email input")).toBeTruthy();
//     expect(screen.getByLabelText("Password input")).toBeTruthy();
//   });

//   describe("App Role", () => {
//     test("App role rendered correctly", () => {
//       render(<App />);

//       const nameInput = screen.getByRole("text", {
//         name: /User Name/i,
//       });
//       expect(nameInput).toBeOnTheScreen;

//       const emailInput = screen.getByRole("text", {
//         name: /Email input/i,
//       });
//       expect(emailInput).toBeOnTheScreen;

//       const emailInputs = screen.getByPlaceholderText("Enter your password", {
//         exact: true,
//         hidden: false,
//         normalizer: (text) => {
//           console.log("Enter your password");
//           return text;
//         },
//         includeHiddenElements: false,
//       });
//       expect(emailInputs).toBeOnTheScreen;

//       const passwordInput = screen.getByRole("text", {
//         name: /Password input/i,
//       });
//       expect(passwordInput).toBeOnTheScreen;

//       const logginButton = screen.queryByTestId("Loggin", {});
//       expect(logginButton).toBeOnTheScreen;

//       const submitInput = screen.queryByTestId("Submit", {});
//       expect(submitInput).toBeOnTheScreen;

//       const genderText = screen.getByTestId("gender-label", { exact: true });
//       expect(genderText).toBeOnTheScreen;
//     });
//   });
// });
