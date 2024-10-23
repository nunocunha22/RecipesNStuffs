import { Link } from "@mui/material";
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent'
import React from "react";

export default function Sweet() {
    return (
        <div className="sweetPicture">
            <div className="display-grid">
                <Card>
                    <CardContent>
                        <Link className="listLink" href="biscoitosAvelã">
                            <img className="listPicture" src=".\pictures\biscoitoAvela2.png" alt="cookies" />
                            <h3>Biscoitos avelã</h3>
                            <h3>recheados</h3>
                        </Link>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link className="listLink" href="cookies">
                            <img className="listPicture" src=".\pictures\cookiess.jpg" alt="cookies" />
                            <h2>Cookies</h2>
                        </Link>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link className="listLink" href="cupcakes">
                            <img className="listPicture" src=".\pictures\cupcakes.png" alt="waffles" />
                            <h2>Cupcakes</h2>
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
                        <Link className="listLink" href="palmiers">
                            <img className="listPicture" src=".\pictures\palmier.jpg" alt="palmiers" />
                            <h2>Palmiers</h2>
                        </Link>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link className="listLink" href="pipocas">
                            <img className="listPicture" src=".\pictures\pipocasColoridas.png" alt="pipocas coloridas" />
                            <h2>Pipocas</h2>
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
                <Card>
                    <CardContent>
                        <Link className="listLink" href="waffles">
                            <img className="listPicture" src=".\pictures\waffles1.png" alt="waffles" />
                            <h2>Waffles</h2>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}