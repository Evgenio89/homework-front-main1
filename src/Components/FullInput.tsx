import {ChangeEvent, useState} from "react";

type FullInputType = {
    addMessage: (title: string) => void
}
export const FullInput = (props: FullInputType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const title = event.currentTarget.value
        setTitle(title)
    }
    const onClickButtonHandler = () => {
      props.addMessage(title)
        setTitle('')
    }

    let [title, setTitle] = useState('')
    return (
        <div>
            <input onChange={onChangeInputHandler}
                   value={title}
            />
            <button onClick={onClickButtonHandler}
            >+
            </button>
        </div>
    )
}