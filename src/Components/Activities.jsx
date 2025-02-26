import { Card, CardContent, Link } from "@mui/material";
import React from "react";

export default function Activities() {
    return (
        <div className="activitiesPicture">
            <div className="display-grid">
                <Card>
                    <CardContent>
                        <Link className="listLink" href="atividades/massinha_nuvem">
                            <img className="listPicture" src=".\pictures\massinha_nuvem.png" alt="Massinha Nuvem" />
                            <h2>Massinha nuvem</h2>
                        </Link>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link className="listLink" href="atividades/slime_com_chia">
                            <img className="listPicture" src=".\pictures\ChiaSlimee.png" alt="Slime com chia" />
                            <h2>Slime com chia</h2>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

