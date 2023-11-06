
import './dropdown.scss';

function DropdownLogout() {
    return (
        <div className="dropdown">
            <button
                className="btn dropdown-toggle"
                role="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
            >
                <i className="fa-regular fa-user"></i>
            </button>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a className="dropdown-item" href="/profile">Profile</a></li>
                <li><a className="dropdown-item" href="/receipts">Purchase History</a></li>
                <li><a className="dropdown-item" href="/admin">Admin Page</a></li>
               {/*  <li><a className="dropdown-item" href="/logout">Logout</a></li> */}
                <li><a className="dropdown-item" href="/register">Register</a></li>
            </ul>
        </div>
    )
}

export default DropdownLogout