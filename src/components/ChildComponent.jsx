export function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler("tatik")}>Greet Parent</button>
        </div>
    )
}