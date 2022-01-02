// tady netvorime komponenty!
// bude zde jen server-side code
//  /api/new-meetup

import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

     // tohle nikdy nesmi bezet na client-side:
    const client = await MongoClient.connect(
      'mongodb+srv://helena:1234567890@cluster0.jmavf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' }); // 201 je kod pro to, ze neco bylo vlozeno succsessfully
  }
}

export default handler;
