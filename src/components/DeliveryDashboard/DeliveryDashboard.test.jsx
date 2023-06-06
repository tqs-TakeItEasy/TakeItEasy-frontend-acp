import React from 'react';
import { render, screen } from '@testing-library/react';
import DeliveryDashboard from './DeliveryDashboard';

describe('<DeliveryDashboard />', () => {
    test('it should mount', () => {
        render(<DeliveryDashboard />);

        const deliveryDashboard = screen.getByTestId('DeliveryDashboard');

        expect(deliveryDashboard).toBeInTheDocument();
    });
});

