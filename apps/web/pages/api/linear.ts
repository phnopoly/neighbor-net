import { NextApiRequest, NextApiResponse } from "next";

const linearEndpoint = "https://api.linear.app/graphql";

const query = `query { viewer { id name email } }`;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const apiKey = process.env.LINEAR_API_KEY;

        if (!apiKey) {
            res.status(500).json({
                error: "API key not set in environment variables",
            });
            return;
        }

        const response = await fetch(linearEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: apiKey,
            },
            body: JSON.stringify({ query }),
        });

        console.log("Response Status:", response.status); // Log response status
        const data = await response.json();
        console.log("Response Data:", data); // Log response data

        if (!response.ok) {
            const errorMessage =
                data.errors?.[0]?.message ||
                "Failed to fetch data from Linear API";
            res.status(response.status).json({ error: errorMessage });
            return;
        }

        console.log("Successfully fetched data from Linear API"); // Log success
        res.status(200).json(data); // Send successful response
    } catch (error: any) {
        console.error("Error during API request:", error);

        if (error instanceof Error) {
            res.status(500).json({
                error:
                    error.message ||
                    "An unknown error occurred while fetching data from Linear",
            });
        } else {
            res.status(500).json({
                error: "An unknown error occurred",
            });
        }
    }
};

export default handler;
