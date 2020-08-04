import * as React from 'react';
import axios from 'axios';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

function Hello({ name, enthusiasmLevel = 1 }: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }

    const testApi = () => {
        axios.post('http://localhost:8000/users/', {
            "name": 'name',
            "email": 'email'
        }).then(data => console.log(data))
    }


    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
            <div>
                <button
                onClick={testApi}
                >
                    test
                </button>
            </div>
        </div>
    );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}