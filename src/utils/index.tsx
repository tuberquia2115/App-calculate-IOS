
export const getColor = (color: string = 'grey') => {
    switch (color) {
        case 'grey':
            return '#9B9B9B';
        case 'naranja':
            return '#FF9427'

        default:
            return '#2D2D2D'
    }
}