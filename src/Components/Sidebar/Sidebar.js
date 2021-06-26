import { faCommentDots, faHome, faPlus, faThLarge, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css"
const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column  col-md-2 px-4" style={{ height: "100vh" }}>
            <Link to="/" className="text-white mt-4">
                <h5><FontAwesomeIcon icon={faHome} />BLOG</h5>
            </Link>
            <ul className="list-unstyled py-5">
                <li>
                    <Link to="/blog" className="text-white">
                        <FontAwesomeIcon icon={faPlus} />
                        <span>Add Blog</span>
                    </Link>
                </li>

                <li>
                    <Link to="review" className="text-white">
                        <FontAwesomeIcon icon={faCommentDots} />
                        <span>Review</span>
                    </Link>
                </li>
                <div>
                    <li>
                        <Link to="/makeAdmin" className="text-white">
                            <FontAwesomeIcon icon={faUserPlus} />
                            <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageService" className="text-white">
                            <FontAwesomeIcon icon={faThLarge} />
                            <span>Manage Service</span>
                        </Link>
                    </li>
                </div>

            </ul>
        </div>
    );
};

export default Sidebar;