export const NameList = () => {
    const names = ['Bruce', 'Clark', 'Diana']
    return (
        <div>
            {
                names.map((arrayValue) => {
                    return <h2 key={arrayValue}>{arrayValue}</h2>
                })
            }
        </div>
    )
}