import Styles from './EmployeeCard.module.css';
function EmployeeCard(props){
    return(
        <div className={Styles.box}>
            <div className={Styles.card}>
                <div className={Styles.coverPic}>
                  <img src={props.coverPic}/>
               </div>
               <div className={Styles.avatar}>
                  <img src={props.avatar}/>
               </div>
               <div className={Styles.info}>
                  <h2>{props.name}</h2>
                  <p>Email: {props.email}</p>
                  <p>Age: {props.age}</p>
                  <p>City: {props.city}, {props.country}</p>
                  <p>Status: {props.status}</p>
                  <p>Skills: {props.skills.join(', ')}</p>
                  <p>Hobby: {props.hobby}</p>
               </div>
               <div>
                <h4>Favorite Food and Profile Picture</h4>
               </div>
               <div className={Styles.images}>
                    <img src={props.favoriteFoodPic}/>
                    <img src={props.profilePic}/>   
               </div>
            </div>
        </div>
    );
}

export default EmployeeCard;