import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    value: string;
    onChange: ( value: any ) => void;
    label: string;
    columnClasses?: string;
}

const Input: React.FC<InputProps> = ({ 
    id,
    value, 
    onChange, 
    label,
     columnClasses, 
     ...rest }: InputProps) => {
    return (
        <div className={`field column ${columnClasses}`}>
            <label 
                className='label' 
                htmlFor={id}
            >
                {label}
            </label>
            <div className='control'>
                <input 
                    id={id}
                    value={value}
                    onChange={e=> onChange ? onChange(e.target.value): null}
                    {...rest}
                />
            </div>
        </div>
    )
}

export default Input