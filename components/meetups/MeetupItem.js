import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import {useRouter} from 'next/router';

function MeetupItem(props) {
  const router = useRouter(); // VSECHNY HOOKY SE MUZOU POUZIVAT JEN NA NEJVYSSIM LEVELU, NE VNORENE DO FUNKCI!
  function showDetailsHandler() {
    // programmmatic (imperative) navigation - napr. metoda push() - funguje jako Link
    router.push('./'+ props.id);
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
