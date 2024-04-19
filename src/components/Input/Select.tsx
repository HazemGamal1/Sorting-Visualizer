import { SelectOptionsType } from "@/lib/types"

export const Select = ({
    options,
    defaultValue,
    onChange,
    isDisabled = false
}: {
    options: SelectOptionsType[],
    defaultValue: string,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    isDisabled: boolean
}) => {
    return(
        <div className="inline-block relative w-48">
            <select
                defaultValue={defaultValue}
                onChange={onChange}
                disabled={isDisabled}
                className="block appearance-none h-8 w-full bg-system-purple10 border-system-purble20 border px-4 py-1 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline text-gray-300"
            >
                {options.map((option) => 
                    <option key={option.value} value = {option.value}>
                        {option.label}
                    </option>
                )}
            </select>
        </div>
    );
};