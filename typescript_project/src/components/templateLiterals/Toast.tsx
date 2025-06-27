type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'buttom'

type ToastProps = {
    position: | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
    | 'center'
}
export const Toast = ({position}: ToastProps) => {
    return <div>Toast Notification position - {position}</div>
}