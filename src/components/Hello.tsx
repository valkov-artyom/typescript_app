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

    const getApi = () => {
        axios.get('http://localhost:8000/users/9').then(data => console.log(data))
    }

    const deleteApi = () => {
        axios.delete('http://localhost:8000/users/9').then(data => console.log(data))
    }

    const putApi = () => {
        axios.put('http://localhost:8000/users/9', {
            "name": 'testname',
            "email": 'testemail',
        }).then(data => console.log(data))
    }



    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
            <div>
                <button
                onClick={getApi}
                >
                    get
                </button>
                <button
                    onClick={putApi}
                >
                    put
                </button>
                <button
                    onClick={deleteApi}
                >
                    delete
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