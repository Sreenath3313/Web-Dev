function welcomeMessage(prop) {
    return <h2>Hello, {prop.name}</h2>;
}

function App() {
    return (
        <div>
            <welcomeMessage name="Sreenath" />
            <welcomeMessage name="Sree" />
        </div>
    );
}temp();