import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a second meetup!",
  },
];

// DULEZITE
// taky pridame head Metadata - bude tam nejaky kratky popis te nasi stranky, kdyz nekdo tu stranku vyhledva na google.
// plus musime pridat title.
function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of React meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}
// jsou to ty meetups z getStaticProps

// getStaticProps je fce pro STATIC GENERATION (pre-rendering), jde zavolat jen v zalozce pages
// pokud nextJS najde tuhle fci, tak ji zavola nejdriv (btw. muze byt async, tzn vraci promise) a
// ziska ty static Props, ktery pouzije pro vyrenderovani te komponenty
// je to code, ktery nikdy nepojede na client-side, protoze je executed during the build process
export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://helena:1234567890@cluster0.jmavf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  // we must return an object.
  return {
    // object s props, ktere pak dame jako input do te komponenty HomePage
    props: {
      //meetups: DUMMY_MEETUPS,
      // z mongodb:
      meetups: meetups.map(meetup=> ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      }))
    },
    // another prop: revalidate - chce cislo - coz je pocet sekund, nez probehne revalidace tech dat, jestli nejsou outdated
    revalidate: 10,
  };
}

// pro SERVER-SIDE RENDERING
// nepobezi during the build process, ale po deployment
/*
export async function getServerSideProps(context) {
 // fetch data from an API - it will never run on client-side
 // opet vraci objekt. ale neni tady revalidate prop, ta nema tady vyznam, protoze se to aktualizauje pro kazdou incoming request 
 const req = context.req; // request - muze se hodit, kdyz nas zajima type of request - napr. authentication 
 const res = context.res; // response
 
 return {
    props: {
      meetups: DUMMY_MEETUPS,
    }
  }
}
*/

export default HomePage;

/* ---------------------------------------------------------------
Fetching data with NextJS muze vest k problemum:
NextJs prerenderuje stranku, ale jeste nema fetchly data,
takze muze vyrenderovat prazdnou stranku.
Proto existuji 2 formy of pre-rendering:
1. static generation - vytvori se to pri app deployment (po npm run build)
Kdyz pak dame npm run build, tak se nam ukaze, ze se naloadovali 4 stranky.
HomePage je ssg (static html + json) - uses getStaticProps, ssg = static site generation
Ostatni jsou zatim static - static html, no initial props
NewMeetupForm klidne muze zustat static bez initial props.
GetStaticProps ale pridame i pro meetupDetail Page.
Pridame i prop revalidate, popsanou vyse.
KDYZ POUZIVAME GETSTATICPROPS na dynamic page (tedy takove, ktera zavisi na meetupId), MUSIME POUZIT I FCI GETSTATICPATHS.

2. server-side rendering
Ale nekdy ani to revalidovani po kazdych x sekundach neni dostatecne,
nekdy chceme aby se to revalidovalo pri kazde incoming request,
takze chceme pre-generate the page dynamically - after deployment,
not during the build process and not every couple of seconds, BUT FOR EVERY REQUEST
Pro nas je v tomto pripade lepsi to getStaticProps,  protoze se nam ty data moc nemeni,
ale ukazeme si i alternativu => getServerSideProps()

TZN. POKUD SE NAM DATA NEMENI MOC CASTO A POKUD NEPOTREBUJEME PRISTUP K TYPE OF REQUEST,
JE LEPSI POUZIT GETSTATICPROPS - pak je to rychlejsi.
*/

/* DULEZITE
NextJS enables us to build our own backend within this PROJECT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
=> API routes. - special routes (pages), ktere nevraci komponenty, ale obsahuji kod pro
http requests, fetching data, storing data
=> special folder in pages folder: api
Nas backend bude mongoDb.
*/
