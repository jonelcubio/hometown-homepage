import activityData from "../data/activityData";

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
    </>
  );
}