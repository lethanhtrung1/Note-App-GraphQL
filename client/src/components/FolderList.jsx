import { Card, CardContent, List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

export default function FolderList({ folders }) {
    return (
        <List
            sx={{
                width: "100%",
                height: "100%",
                padding: "10px",
                backgroundColor: "#7D9D9C",
                textAlign: "left",
                overflowY: "auto",
            }}
            subheader={
                <Box>
                    <Typography sx={{ fontWeight: "bold", color: "white" }}>Folder</Typography>
                </Box>
            }
        >
            {folders.map(({ id, name }) => {
                return (
                    <Link key={id} to={`folders/${id}`} style={{ textDecoration: "none" }}>
                        <Card sx={{ marginBottom: "5px" }}>
                            <CardContent sx={{ "&:last-child": { paddingBottom: "10px" }, padding: "10px" }}>
                                <Typography>{name}</Typography>
                            </CardContent>
                        </Card>
                    </Link>
                );
            })}
        </List>
    );
}
