import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from 'next/head';

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        title={props.meetupData.title}
        description={props.meetupData.description}
        image={props.meetupData.image}
        address={props.meetupData.address}
      />
    </Fragment>
  );
}

// tahle funkce popisuje vsechny moznosti (vsechny meetupId), pro ktere musi byt pre-generated
// tuhle funkci musime pridat do dynamic pages (tedy tech ktera zavisi na nejakem paramatru - zde meetupId)
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://helena:1234567890@cluster0.jmavf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray(); // empty object stands for 'give me all'. a pak pridame id=1 - tzn jsme interested jen v id.
  client.close();
  return {
    fallback: 'blocking', // => list of specified paths is not complete. neco jako true. ale true okamzite vraci empty page a az pak prida ten obsah az to fetchne. blocking pocka na obsah.
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    /*fallback: false, // dame false, abychom indikovali, ze jsme vypsali vsechny ty moznosti meetupIds
    // fallback: true - jsx zkusi vygenerovat page for this missing meetupId. tzn. muzeme nastavit paths jen pro ty nejcasteji navstevovane meetups
    // => ty budou pre-generated a ty, co nam tam chybi, se dofetchnou pozdeji. to je vyhodne, kdyz mame velky pocet stranek (stovky)
    //fallback: false - rika, ze nase paths obsahuji vsechny supported moznosti meetupId, takze kdyz uzivatel zada m3, tak uvidi 404 error
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],*/
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  // potrebujeme ale nejaky identifikator - NEMUZEME ALE POUZIT USEROUTER. TO V TEHLE FCI NEJDE POUZIT.
  // proto input bude context, ale nebude mit request a response properties, ale ma params:
  const meetupId = context.params.meetupId; // meetupId je ten identifikator co mame v []
  console.log(meetupId); // tohle uvidime v te konzoli primo ve visual studio code, protoze to runs in build process.
  const client = await MongoClient.connect(
    "mongodb+srv://helena:1234567890@cluster0.jmavf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
    /*props: {
      meetupData: {
        id: "m1",
        title: "A First Meetup",
        description: "The meetup description",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        address: "Some Street 5, Some City",
      },
    },*/
  };
}

export default MeetupDetails;

/*
Slo by to cele zapsat primo tady jako:
function MeetupDetails() {
    return (
        <Fragment>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg' alt='A First Meetup' />
            <h1>A First Meetup</h1>
            <p>The meetup description</p>
            <address>Some Street 5, Some City</address>
        </Fragment>
    )
}

Ale my to hodime do samostatne komponenty.
*/
