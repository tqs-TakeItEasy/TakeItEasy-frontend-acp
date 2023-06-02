import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

/**
 * @jest-environment jsdom
 */

describe('<HomePage />', () => {
    test('it should mount', () => {
        render(<HomePage />);

        const homePage = screen.getByTestId('HomePage');

        expect(homePage).toBeInTheDocument();
    });
});