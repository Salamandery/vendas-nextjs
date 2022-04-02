import { TextareaHTMLAttributes } from 'react'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    id: string;
    value: string;
    onChange: ( value: any ) => void;
    label: string;
    columnClasses?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ 
    id,
    value, 
    onChange, 
    label,
     columnClasses, 
     ...rest }: TextAreaProps) => {
    return (
        <div className={`field column ${columnClasses}`}>
            <label 
                className='label' 
                htmlFor={id}
            >
                {label}
            </label>
            <div className='control'>
                <textarea 
                    id={id}
                    value={value}
                    onChange={e=> onChange ? onChange(e.target.value): null}
                    {...rest}
                />
            </div>
        </div>
    )
}

export default TextArea