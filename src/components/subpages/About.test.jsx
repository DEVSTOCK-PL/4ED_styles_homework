import { test, describe, expect } from "vitest";

import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import About from "./About";

describe("About Component", () => {
  //testujemy czy komponent się wyświetla z stanem początkowym
  test("renders without crash", () => {
    //renderujemy about
    render(<About />);
    //sprawdzamy stan początkowy - licznik:0
    expect(screen.getByText(/Licznik: 0/)).toBeInTheDocument();
  });

  test("increments counter on btn click", () => {
    render(<About />);
    fireEvent.click(screen.getByText("+"));
    expect(screen.getByText(/Licznik: 1/)).toBeInTheDocument();
  });

  test("decrements counter on btn click", () => {
    render(<About />);
    fireEvent.click(screen.getByText("-"));
    expect(screen.getByText(/Licznik: -1/)).toBeInTheDocument();
  });

  test("resets counter on btn click", () => {
    render(<About />);
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("reset"));
    expect(screen.getByText(/Licznik: 0/)).toBeInTheDocument();
  });
  test("multiple changes on counter on btn click", () => {
    render(<About />);
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("-"));
    expect(screen.getByText(/Licznik: 2/)).toBeInTheDocument();
  });
  test("update state on input change", () => {
    render(<About />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "new value" } });
    expect(input.value).toBe("new value");
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
