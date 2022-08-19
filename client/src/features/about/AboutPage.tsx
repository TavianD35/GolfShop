/*import { Typography } from "@mui/material";

export default function AboutPage() {
    return (
        <Typography variant='h2'>
            About Page
        </Typography>
    )
}*/

import { Typography } from "@mui/material";
import { useState } from "react";
import agent from "../../app/api/agent";

export default function ErrorTesting() {
    const [validationErrors, setValidationErrors] = useState<string[]>([]);

    function getValidationError() {
        agent.TestErrors.getValidationError()
            .then(() => console.log('Should not see this'))
            .catch(error => setValidationErrors(error));
    }
    return (
        <Typography>
            About Page
        </Typography>
    )
}