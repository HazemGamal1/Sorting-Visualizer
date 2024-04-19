export type SortingAlgorithmType = 
    |"bubble"
    |"insertion"
    |"selection"
    |"merge"
    |"quick";

export type SelectOptionsType = {
    value: string,
    label: string
}

export type AnimationArrayType = [number[], boolean][];