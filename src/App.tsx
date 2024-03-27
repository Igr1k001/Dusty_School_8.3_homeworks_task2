import React, { useState } from 'react';

import './App.css';
import { cnApp } from './App.classname';
import { Comment } from './components/Comment/Comment';
import { Emoji, EmojiClickData } from 'emoji-picker-react';
import EmojiPicker from 'emoji-picker-react';

const App = () => {
    const [comments, setComments] = useState<{id: number, inputValue: string, reaction: string[]}[]>([])
    const [openEmojiPickerId, setOpenEmojiPicker] = useState<number | false>(false)

    const onSendForm = (id: number, inputValue: string, reaction: string[]) => {
        if (inputValue === '') {
            return;
        } 

        setComments(prev => [...prev, {id, inputValue, reaction}]);
        console.log(comments);
    }

    const handleClickReactionEmoji = (id: number) => {
        setOpenEmojiPicker(id);
    }

    const handleChoiceEmoji = (emoji: EmojiClickData, id: number) => {        
        const copyComments = [...comments];

        const elemComment = copyComments.find((elem) => id === elem.id);

        elemComment?.reaction.push(emoji.emoji)
        setComments(copyComments)

        setOpenEmojiPicker(false);
    }

    return (
        <div className={cnApp()}>
            <div className={cnApp('Comments')}>
                {comments.map(comment => 
                    <div className={cnApp('Comment')}>
                        <p>{comment.inputValue}</p>
                        <p onClick={() => handleClickReactionEmoji(comment.id)}>☺</p>
                        {comment.reaction.length ? <p>{comment.reaction.join(' ')}</p> : undefined}
                    </div>
                )}
            </div>
            <Comment sendForm={onSendForm}/>
            {openEmojiPickerId && <EmojiPicker onEmojiClick={(emoji) => handleChoiceEmoji(emoji, openEmojiPickerId)}/>}
        </div>
    );
}

export { App };
