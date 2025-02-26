import { Card, CardContent, Link } from "@mui/material";
import React from "react";

export default function Salty() {
    return (
        <div className="saltyPicture">
            <div className="display-grid">
                <Card>
                    <CardContent>
                        <Link className="listLink" href="salgados/croque_monsieur">
                            <img className="listPicture" src=".\pictures\croqueMonsieur1.png" alt="croque monsieur" />
                            <h2>Croque Monsieur</h2>
                        </Link>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Link className="listLink" href="salgados/waffles_bacon_e_queijo">
                            <img className="listPicture" src=".\pictures\SaltyWaffless.png" alt="Waffle salgado" />
                            <h2>Waffle bacon e queijo</h2>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}