import { Link } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent'
import React from "react";
import Suspiros from "./Sweet_Components/Suspiros";

export default function Sweet() {
    return (
        <div className="sweetPicture">
            <div className="display-grid">
                <Card>
                    <CardContent>
                        <Link className="listLink" href="cookies">
                            <img className="listPicture" src=".\pictures\cookies.jpg" alt="cookies" />
                            <h2>Cookies</h2>
                        </Link>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link className="listLink" href="macarrons">
                            <img className="listPicture" src=".\pictures\macarrons.jpg" alt="macarrons" />
                            <h2>Macarrons</h2>
                        </Link>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link className="listLink" href="suspiros">
                            <img className="listPicture" src=".\pictures\suspiros.jpg" alt="suspiros" />
                            <h2>Suspiros</h2>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}