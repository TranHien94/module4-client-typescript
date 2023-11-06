
import LoadingIcon from './loading_icon.png'
import './loading.scss'
export default function Loading() {
    return (
        <div className="loading_container">
            <img src={LoadingIcon} className="rotating-image"/>
        </div>
    )
}