export enum DifficultyLevel {
    Easy = 1,
    Normal = 2,
    Hard = 4
}

interface DifficultySpec {
    color: string;
    ionColor: string;
    label: string;
}

function getDifficultySpec(dif: DifficultyLevel): DifficultySpec {
    switch (+dif) {
        case DifficultyLevel.Easy:
            return { color: '#10dc60', ionColor: 'success', label: '易' };
        case DifficultyLevel.Normal:
            return { color: '#ffce00', ionColor: 'warning', label: '中' };
        case DifficultyLevel.Hard:
            return { color: '#f04141', ionColor: 'danger', label: '难' };
    }
}


export function getDifficultyColor(dif: DifficultyLevel): string {
    return getDifficultySpec(dif).color;
}

export function getDifficultyIonColor(dif: DifficultyLevel): string {
    return getDifficultySpec(dif).ionColor;
}

export function getDifficultyLabel(dif: DifficultyLevel): string {
    return getDifficultySpec(dif).label;
}


