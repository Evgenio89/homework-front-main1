import {useState} from "react";
import {FullInput} from "./Components/FullInput";

export const App = () => {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    const addMessage = (title: string) => {
        const newTitle = {
            message: title
        }

        setMessage([newTitle, ...message])
    }
    return (
        <div className="App">
           <FullInput addMessage={addMessage}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}
