import "./swith-btn.css"

export default function SwitchBtn() {

    return (
        <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
        </label>
    )
}