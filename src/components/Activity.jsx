import ellipsis from '/assets/images/icon-ellipsis.svg'
import '../styles/Activity.css'

const Activity = ({ activity, color, activeTimeframe }) => {
  return (
    <article
      className='Activity'
      style={{
        backgroundColor: color,
        backgroundImage: `url(/assets/images/icon-${activity.title.toLowerCase()}.svg)`
      }}>
      <div className='activity-info'>
        <h3 className='activity-title'>{activity.title}</h3>
        <img className='ellipsis' src={ellipsis} alt='ellipsis' />
        <h1 className='activity-time'>{`${
          activity.timeframes[activeTimeframe.toLowerCase()].current
        }hrs`}</h1>
        <h3 className='activity-previous'>
          {`${
            activeTimeframe === 'Daily'
              ? 'Yesterday'
              : activeTimeframe === 'Weekly'
              ? 'Last Week'
              : activeTimeframe === 'Monthly'
              ? 'Last Month'
              : null
          } - ${
            activity.timeframes[activeTimeframe.toLowerCase()].previous
          }hrs`}
        </h3>
      </div>
    </article>
  )
}
export default Activity
