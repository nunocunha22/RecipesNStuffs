import { Card, CardContent, Link } from "@mui/material";
import React from "react";

export default function Activities() {
    return (
        <div className="activitiesPicture">
            <div className="display-grid">
                <Card>
                    <CardContent>
                        <Link className="listLink" href="massinha_nuvem">
                            <img className="listPicture" src=".\pictures\massinha_nuvem.png" alt="cookies" />
                            <h2>Massinha nuvem</h2>
                        </Link>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}

