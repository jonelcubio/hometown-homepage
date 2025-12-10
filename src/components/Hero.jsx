import activityData from "../data/activityData";
import girl from "../assets/girl.png";
export function Hero() {
  return(
    <>
    <div className="title">Top three activities to do in Seoul</div>

    <div className="activities-con">
    {activityData.map((activity)=> (
      <div key={activity.id} className="activity-card">
        <img src={activity.img} alt={activity.title} className="activity-img" />
        <div className="activity-title">{activity.title}</div>
        <div className="activity-des">{activity.des}</div>
      </div>
    ))}
    </div>

    <div className="guide-con">
      <div className="guide-img-con">
        <img src={girl} className="guide-img" />
      </div>
    
    <div className="guide-text-con">
      <div className="guide-title">Your Guide</div>
      <div className="guide-des">I have lived in Seoul for over 30 years, so I can show you all of its best parts and hidden secrets.</div>
      <div className="guide-name">Park So Yeen</div>
    </div>
    </div>
    </>
  );
}