import { MAX_ANIMATION_SPEED, MIN_ANIMATION_SPEED } from "@/lib/utils";


export const Slider = ({
    min = MIN_ANIMATION_SPEED,
    max = MAX_ANIMATION_SPEED,
    step = 10,
    value,
    handleChange,
    isDisapled = false,
}:{
    min?: number;
    max?: number;
    step?:number;
    value: number;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isDisapled?: boolean
}) => {
    return(
        <div className="flex gap-2 items-center justify-center">
            <span className="text-center text-gray-300">Slow</span>
            <input type="range" min={min} max={max} step={step} value={value} onChange={handleChange} disabled={isDisapled}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700 "/>
            <span className="text-center text-gray-300">Fast</span>
        </div>
    )
}
