import React from 'react'

export interface CardProps {
    title: string;
    text: string;
    buttonText: string;
    children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = (props) => {

    const { title, text, buttonText, children } = props;

    return (
        <div className="card">
            {children} 
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <button className='cardBtn'>{buttonText}</button>
            </div>
        </div>
    )
}
