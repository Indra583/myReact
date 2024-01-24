import { render, screen } from "@testing-library/react";
import RestuarentCard from "../RestuarentCard"
import MOCK_DATA from "../mockData/resCardMock.json"
import "@testing-library/jest-dom";

it("Should render restuarant card component with prop data",() => {

    render(<RestuarentCard resData = {MOCK_DATA} />);

    const name = screen.getByText("Andhra Gunpowder");

    expect(name).toBeInTheDocument();
})