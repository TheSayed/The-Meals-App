import App from "./App";
import { render, screen } from "@testing-library/react-native";

test("App text is correctly rendered", () => {
  render(<App />);
  const textElement = screen.getByText("The developer name is");
  expect(textElement).toBeOnTheScreen();
});

test("App text followed by a name is correctly rendered", () => {
  render(<App name="Ahmed Kotp" />);
  const textElement = screen.getByText("The developer name is Ahmed Kotp");
  expect(textElement).toBeOnTheScreen();
});
