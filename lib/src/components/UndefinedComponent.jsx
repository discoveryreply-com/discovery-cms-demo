import React from 'react';

export default function UndefinedComponent({ componentType }) {
    console.error(`Unregistered component type: ${componentType}`);

    return (
        <div style={{ color: 'red', marginTop: '32px', marginBottom: '32px', textAlign: 'center', fontSize: '2rem' }}>
            Unregistered component type: {componentType}
        </div>
    );
}
