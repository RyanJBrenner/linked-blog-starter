// Install 'express' and 'axios' if not already installed
// npm install express axios

import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors()); // Enable CORS

// Route for creating a subscriber and assigning to a group
app.post('/api/mailerlite/assign', async (req, res) => {
  try {
    // Create a subscriber
    const subscriberResponse = await axios.post(
      'https://connect.mailerlite.com/api/subscribers',
      req.body,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-MailerLite-ApiDocs': 'true',
          Authorization: `Bearer ${process.env.YOUR_EMAIL_TOKEN}`,
        },
      }
    );

    // Extract the subscriber ID from the response
    const subscriberId = subscriberResponse.data.id;

    // Assign the subscriber to the group
    const assignResponse = await axios.post(
      `https://connect.mailerlite.com/api/subscribers/${subscriberId}/groups/${process.env.GROUP_ID}`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          'X-MailerLite-ApiDocs': 'true',
          Authorization: `Bearer ${process.env.YOUR_EMAIL_TOKEN}`,
        },
      }
    );

    console.log('YOUR_EMAIL_TOKEN:', process.env.YOUR_EMAIL_TOKEN);
    console.log('GROUP_ID:', process.env.GROUP_ID);


    res.json(assignResponse.data);
  } catch (error) {
    console.error('MailerLite error:', error.response ? error.response.data : error.message);
    res.status(error.response ? error.response.status : 500).json({ error: 'Failed to make request' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  
});


