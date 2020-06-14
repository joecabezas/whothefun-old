import * as React from 'react';

export interface Props {
    name: string;
}

export const Hello = ({name}: Props) => <h1>Hello {name}!</h1>;
