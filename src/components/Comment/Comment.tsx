import React, { ChangeEvent, FormEvent, useState } from 'react';

import './Comment.css';
import { cnComment } from './Comment.classname';

export interface ICommentProps {
    sendForm: (id: number, inputValue: string, reaction: string[]) => void;
}

export const Comment: React.FC<ICommentProps> = ({ sendForm }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        const id = Math.floor(Math.random() * 1000);

        sendForm(id, inputValue, [])

        setInputValue('');
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    return (
        <form className={cnComment()} onSubmit={handleSubmit}>
            <input 
                className={cnComment('Input')} 
                onChange={handleChange}
                value={inputValue}
                placeholder="Введите комментарий"
            >
            </input>
        </form>
    );
}
