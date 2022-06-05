export const UserGreeting = () => {
    const isLoggedIn = true;
    return (
        <div>
            {/* Welcome{isLoggedIn ? "Patrick" : "Guest"} */}
            Welcome {isLoggedIn && "Patrick"}
        </div>
    )
}