// apps/web/pages/api/linear.ts
import axios from "axios";

const handler = async (req, res) => {
    try {
        const response = await axios.post(
            "https://api.linear.app/graphql",
            {
                query: `
          query {
            viewer {
              id
              name
              email
            }
          }
        `,
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.LINEAR_API_KEY}`,
                },
            }
        );

        // Send Linear data as JSON response
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data from Linear" });
    }
};

export default handler;
