import { Card, CardContent, Grid, List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function NoteList() {
    const folder = { notes: [{ id: "1", content: "<p>New Note</p>" }] };

    return (
        <Grid container height="100%">
            <Grid
                item
                xs={4}
                sx={{
                    width: "100%",
                    maxWidth: "360px",
                    backgroundColor: "#F0EBE3",
                    height: "100%",
                    overflowY: "auto",
                    padding: "10px",
                    textAlign: "left",
                }}
            >
                <List
                    subheader={
                        <Box>
                            <Typography sx={{ fontWeight: "bold" }}>Notes</Typography>
                        </Box>
                    }
                >
                    {folder.notes.map(({ id, content }) => {
                        return (
                            <Link key={id} to={`note/${id}`} style={{ textDecoration: "none" }}>
                                <Card sx={{ marginBottom: "5px" }}>
                                    <CardContent sx={{ "&:last-child": { paddingBottom: "10px" }, padding: "10px" }}>
                                        <div
                                            style={{ fontSize: 14, fontWeight: "bold" }}
                                            dangerouslySetInnerHTML={{
                                                __html: `${content.substring(0, 30) || "empty"}`,
                                            }}
                                        />
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    })}
                </List>
            </Grid>
            <Grid item xs={8}>
                <Outlet />
            </Grid>
        </Grid>
    );
}
