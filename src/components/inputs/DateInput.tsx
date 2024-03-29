import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  FormEvent,
  KeyboardEvent,
  useRef,
} from "react";

type PropsType = {
  name: string;
  label?: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

const DateInput = ({ name, label, placeholder = "", onChange }: PropsType) => {
  return (
    <div className="flex flex-col justify-start gap-5">
      {label && <p>{label}</p>}
      <input
        name={name}
        type={"datetime-local"}
        placeholder={placeholder}
        className="h-10 w-[90%] border-b pl-2 outline-none"
        onChange={onChange}
        autoComplete="off"
        required
      />
    </div>
  );
};

export default DateInput;
