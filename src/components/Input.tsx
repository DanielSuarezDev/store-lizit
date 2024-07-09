import React, { FC } from 'react'
import { Typography } from './Typography/Typography';

interface Props {
    label?: string;
    value: string;
    name?: string;
    disabled?: boolean;
    placeholder?: string;
    type?: "text" | "number" | "email" | "textarea";
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    otherClasses?: string;
}

export const Input: FC<Props> = ({
    type = "text",
    label,
    value,
    name,
    disabled = false,
    placeholder,
    handleChange,
    otherClasses = '',
}) => {
    return (
        <div className='flex flex-col space-y-4'>
            <Typography type='l4' gutterBottom={false} otherClasses='mt-3'>{label}</Typography>
            {type !== "textarea" ? <input
                type="text"
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                disabled={disabled}
                className={`${otherClasses} p-3 rounded-[10px] border-[1px] ${disabled ? "border-grey-300" :  "border-blue-500"} bg-transparent`}
            /> : <textarea
                name={name}
                value={value}
                onChange={handleChange}
                className={`h-[200px] resize-none p-3 rounded-[10px] border-[1px] ${disabled ? "border-grey-300" :  "border-blue-500"} bg-transparent my-6`}
            />}
        </div>
    )
}
