import { ChangeEventHandler, HTMLInputTypeAttribute, FormEvent, KeyboardEvent, useRef } from "react";

type PropsType = {
    name: string;
    label?: string;
    placeholder?: string;
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

const NotesInput = ({ name, onChange, label, placeholder = "" }: PropsType) => {
    const ref = useRef<HTMLTextAreaElement>(null);
    return (
        <div className="flex flex-col justify-start gap-5">
            {label && <p>{label}</p>}
            <textarea
                ref={ref}
                name={name}
                placeholder={placeholder}
                className="w-[90%] min-h-12 max-h-[7.5rem] overflow-y-hidden outline-none border-b pl-2 resize-none"
                onChange={onChange}
                autoComplete="off"
                rows={1}
                maxLength={100}
                onInput={(e: FormEvent<HTMLTextAreaElement>) => {
                    if (ref.current && e.currentTarget.scrollHeight <= 120) {
                        ref.current.style.height = "auto";
                        ref.current.style.height = `${e.currentTarget.scrollHeight}px`;
                    }
                }}
                onKeyDown={(e: KeyboardEvent<HTMLTextAreaElement>) => {
                    if (ref.current && e.key === "Enter") {
                        e.preventDefault();
                    }
                }}
            />
        </div>
    );
};

export default NotesInput;
