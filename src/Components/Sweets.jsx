import { Link } from "@mui/material";
import React from "react";

export default function Sweet() {
    return (
        <div>
            <div className="display-grid">
                <img className="pagePicture" src=".\pictures\sweet.png" alt="desserts" />
                <div className="display-grid">
                    <Link className="listLink">
                        <img className="listPicture margin-top-32" src=".\pictures\cookies.jpg" alt="cookies" />
                        <h2>Cookies</h2>
                    </Link>

                    <Link className="listLink">
                        <img className="listPicture margin-top-32" src=".\pictures\macarrons.jpg" alt="macarrons" />
                        <h2>Macarrons</h2>
                    </Link>
                    <Link className="listLink">
                        <img className="listPicture margin-top-32" src=".\pictures\suspiros.png" alt="suspiros" />
                        <h2>Suspiros</h2>
                    </Link>
                    <Link className="listLink">
                        <img className="listPicture margin-top-32" src=".\pictures\suspiros.png" alt="suspiros" />
                        <h2>Suspiros</h2>
                    </Link>
                    <Link className="listLink">
                        <img className="listPicture margin-top-32" src=".\pictures\suspiros.png" alt="suspiros" />
                        <h2>Suspiros</h2>
                    </Link>
                    <Link className="listLink">
                        <img className="listPicture margin-top-32" src=".\pictures\suspiros.png" alt="suspiros" />
                        <h2>Suspiros</h2>
                    </Link>
                    <Link className="listLink">
                        <img className="listPicture margin-top-32" src=".\pictures\suspiros.png" alt="suspiros" />
                        <h2>Suspiros</h2>
                    </Link>
                    <Link className="listLink">
                        <img className="listPicture margin-top-32" src=".\pictures\suspiros.png" alt="suspiros" />
                        <h2>Suspiros</h2>
                    </Link>
                </div>
            </div>
        </div>
    )
}