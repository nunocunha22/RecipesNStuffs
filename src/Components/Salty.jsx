import { Card, CardContent, Link } from "@mui/material";
import React from "react";

export default function Salty() {
    return (
        <div className="saltyPicture">
            <div className="display-grid">
                <Card>
                    <CardContent>
                        <Link className="listLink" href="croque_monsieur">
                            <img className="listPicture" src=".\pictures\croqueMonsieur1.png" alt="croque monsieur" />
                            <h2>Croque Monsieur</h2>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}