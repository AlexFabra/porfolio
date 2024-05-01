interface User{
    id: number,
    name: string,
    BirthDate: string,
    BirthPlace?: string,
    currentPlace?: string,
    profession: string[],
    hobbies?: Map<string,string>,
    moralValues?: Map<string,string>
}