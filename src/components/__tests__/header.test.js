import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load the Header Component with login Button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //query
  const loginButton = screen.getByRole("button");

  //Assertion
  expect(loginButton).toBeInTheDocument();
});

it("Should contain the cart items with initial 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/🛒/);

  expect(cartItems).toBeInTheDocument();
});

it("Should Change Login Btton to Logout Button when clicked", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", {name : "login"});

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", {name : "logout"});

  expect(logoutButton).toBeInTheDocument();
});
