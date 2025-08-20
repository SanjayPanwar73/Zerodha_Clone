
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import Hero from '../landing_page/home/Hero';

// test suite for Hero component(can perform multiple test cases)
describe('Hero Component(Home)', () => {
  test('renders Hero component with correct image', () => {

    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    )
    const imageElement = screen.getByAltText("hero-image"); // alt text of the image
    expect(imageElement).toBeInTheDocument(); // check if image is in the document
    expect(imageElement).toHaveAttribute('src', 'images/homeHero.png'); // check if image source is correct
  
  });

  test("render Hero component with signup button", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    )
    const buttonElement = screen.getByRole('button', { name: /Sign Up/i }); // check if button is present
    expect(buttonElement).toBeInTheDocument(); // check if button is in the document
    expect(buttonElement).toHaveAttribute('href', '/signup'); // check if button has correct href attribute
  });
})
