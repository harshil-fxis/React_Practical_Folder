export type Profileprops = {
    name: string
}

export const Profile = ({name} : Profileprops) => {
    return <div>Private profile component. Name is {name}</div>
}